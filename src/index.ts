//@ts-ignore
import resolveModule from 'kbs-dsl-resolver';

interface WatchOptions {
  protocol?: 'ws';
  host?: string;
  port?: number;
  entry?: string;
  update?: (json: any) => void;
};

// 默认监听参数
const defaultWatchOptions: WatchOptions = {
  protocol: 'ws',
  host: 'localhost',
  port: 9900
};

// websocket 链接
const connectSocketTaskMap: Record<string, any | undefined> = {};

// 清除 websocket 任务
const removeSocketTask = (url) => {
  delete connectSocketTaskMap[url];
};

// 创建 websocket 任务
const createWebsocketTask = (url: string) => {
  if (!connectSocketTaskMap[url]) {
    const task = wx.connectSocket({
      url,
      fail: (err) => {
        console.log('失败：', err);
      }
    });
    if (task) {
      task.onOpen(() => {
        console.log('文件监听开启!');
      });
      task.onClose(() => removeSocketTask(url));
      task.onError(() => removeSocketTask(url));
      connectSocketTaskMap[url] = task;
    }
  }
  return connectSocketTaskMap[url];
};

const fromHtmlCache: Record<string, Promise<string>> = {};

// 从 html 中提取 dsl 地址
export const fromHtml= (htmlUrl: string): Promise<string>  => {
  if (!fromHtmlCache[htmlUrl]) {
    fromHtmlCache[htmlUrl] = new Promise((resolve, reject) => {
      wx.request({
        url: htmlUrl,
        method: 'GET',
        dataType: '其他',
        timeout: 10 * 60000,
        success({ data }) {
          const result = (data as string)?.match(/mp-web-package-url="([^"]+)"/mg);
          if (result?.length) {
            let dslJsonUrl = result[0].replace(/mp-web-package-url="([^"]+)"/g, '$1');
            if (/^\/\//.test(dslJsonUrl)) {
              // 缺少协议头
              dslJsonUrl = `https:${dslJsonUrl}`;
            } else if (!/^http(s?):/.test(dslJsonUrl)) {
              // 缺少域名，表示与 htmlUrl 同域名
              const host = htmlUrl.replace(/http(s?)\:\/\//, '').split(/\//)[0];
              const protocol = htmlUrl.split('://')[0];
              dslJsonUrl = `${[protocol]}://${host}${dslJsonUrl}`;
            }
            resolve(dslJsonUrl);
          } else {
            reject(new Error('获取 dsl 地址失败！'));
          }
        },
        fail(err) {
          reject(err);
          delete fromHtmlCache[htmlUrl];
        }
      });
    });
  }
  return fromHtmlCache[htmlUrl];
};

const DAY = 24 * 60 * 60 * 1000;
// 内存级缓存
const MEMO_CACHE: Record<string, Promise<any> | undefined> = {};

interface CacheStorageItem {
  key: string;
  size: number;
  tempFilePath: string;
  updateTime: number;
  expireTime: number;
}
type CacheStorage = CacheStorageItem[];

const CAHCE_STORAGE_KEY = 'WEB_PACKAGE_CACHE_SET';

const cacheStorage: CacheStorage = wx.getStorageSync(CAHCE_STORAGE_KEY) || [];

// 当前缓存大小
let cacheSize = 0;

cacheStorage.forEach(item => cacheSize += item.size);

const updateStorage = (() => {
  let timer: NodeJS.Timeout;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      wx.setStorage({ key: CAHCE_STORAGE_KEY, data: cacheStorage });
    }, 100);
  };
})();

// 更新缓存文件信息
const setStorageItem = (key: string, value: CacheStorageItem) => {
  const index = cacheStorage.findIndex(item => item.key === key);
  if (index >= 0) {
    cacheSize += value.size - cacheStorage[index].size;
    cacheStorage[index] = value;
    // 重排
    cacheStorage.sort((a, b) => a.updateTime - b.updateTime);
  } else {
    cacheStorage.push(value);
    cacheSize += value.size;
  }
  updateStorage();
};

// 删除对应的缓存
const removeStorageItem = (key: string) => {
  const index = cacheStorage.findIndex(item => item.key === key);
  if (index >= 0) {
    const [removedItem] = cacheStorage.splice(index, 1);
    cacheSize -= removedItem.size;
  }
  updateStorage();
};

type CreateCacheFile = Promise<{ size: number, tempFilePath: string }>;
// 生成缓存文件
const createCacheFile = (name: string, content: string): CreateCacheFile => new Promise((resolve, reject) => {
  const fs = wx.getFileSystemManager();
  // 临时文件路径
  const tempFilePath = `${wx.env.USER_DATA_PATH}/${name}`;
  // 写入到临时目录
  fs.writeFile({
    filePath: tempFilePath,
    data: content,
    encoding: 'utf8',
    success: () => {
      // 将临时文件保存到用户数据目录
      fs.getFileInfo({
        filePath: tempFilePath,
        success({ size }) {
          resolve({ size: size / (1024 * 1024), tempFilePath });
        },
        fail(err) {
          console.error('获取文件信息失败', err);
          reject(err);
        }
      })
    },
    fail: (err) => {
      console.error('写入临时文件失败', err);
      reject(err);
    }
  });
});

// 删除缓存文件
const removeCacheFile = (filePath: string, success?: () => void) => {
  const fs = wx.getFileSystemManager();
  fs.unlink({
    filePath,
    success() {
      console.log('删除缓存文件成功', filePath);
      success?.();
    },
    fail(err) {
      console.warn('删除缓存文件失败', err);
    }
  });
};

// 按 size 删除文件
const removeCacheFileBySize = (size: number) => {
  if (size <= 0) return;
  let targetSize = 0;
  let index = 0;
  let cacheStorageItem = cacheStorage[index];
  while(cacheStorageItem && targetSize < size) {
    targetSize += cacheStorageItem.size;
    removeCacheFile(cacheStorageItem.tempFilePath, () => {
      // 文件删除成功后，删除对应的缓存 size
      removeStorageItem(cacheStorageItem.key);
    });
    index += 1;
    cacheStorageItem = cacheStorage[index];
  }
};

// 获取缓存文件
const getCacheFile = (key: string) => {
  const cacheItem = cacheStorage.find(item => item.key === key);
  console.log('====== cacheItem', {cacheItem, cacheStorage});
  if (!cacheItem) return;
  const { tempFilePath } = cacheItem;
  const fs = wx.getFileSystemManager();
  const res = fs.readFileSync(tempFilePath, 'utf8') as string;
  return JSON.parse(res || '[]') as string[];
};

// 清理缓存
const clearExpireCache = () => {
  const cacheItemsLen = cacheStorage.length;
  const lastIndex = cacheItemsLen - 1;
  const now = Date.now();
  for(let i = lastIndex; i >= 0; --i) {
    const { expireTime } = cacheStorage[i];
    if (expireTime < now) {
      // 过期
      cacheStorage.splice(i, 1);
    }
  }
  updateStorage();
};

clearExpireCache();

/**
 * 加载 dsl
 * 第二个参数表示是否缓存到本地，默认为 false
 */
const load = async (
  rawUrl: string | Promise<string>,
  enableCache: boolean = false, // 是否开启缓存
  cacheName?: string, // 缓存名字
  cacheTime: number = 7 * DAY, // 缓存时长
  cacheMaxSize: number = 50, // 缓存上限，单位为 Mb
) => {
  let url: string = '';
  if (typeof rawUrl !== 'string') {
    url = await rawUrl;
  } else {
    url = rawUrl;
  }
  if (!MEMO_CACHE[url]) {
    const cacheData = getCacheFile(url);
    if (cacheData) {
      MEMO_CACHE[url] = Promise.resolve(cacheData);
    } else {
      MEMO_CACHE[url] = new Promise((resolve, reject) => {
        const tempFileName = cacheName || `${Date.now()}.dsl.json`;
        try {
          wx.request({
            url,
            method: 'GET',
            dataType: 'json',
            async success({ data }) {
              resolve(data);
              if (enableCache) {
                const { tempFilePath, size } = await createCacheFile(tempFileName, JSON.stringify(data));
                if (size > cacheMaxSize) {
                  // 单个文件就超过量大值
                  console.error('当前分包超过 cacheMaxSize', cacheMaxSize);
                  removeCacheFile(tempFileName);
                  return;
                }
                const overSize = size + cacheSize - cacheMaxSize;
                if (overSize > 0) {
                  // 缓存超上限，需要删除其它缓存文件
                  removeCacheFileBySize(overSize);
                }
                const now = Date.now();
                setStorageItem(url, {
                  key: url,
                  updateTime: now,
                  expireTime: now + cacheTime,
                  tempFilePath,
                  size
                });
              }
            },
            fail(err) {
              reject(err);
            }
          });
        } catch (err) {
          reject(err);
        }
      });
    }
  }
  return MEMO_CACHE[url];
};

// 监听文件（用于开发阶段）
export const watch = (watchOptions: WatchOptions) => {
  // 需要监听文件变化
  const wsOptions: WatchOptions = Object.assign({}, defaultWatchOptions, watchOptions || {});
  const {
    protocol,
    host,
    port,
    entry,
    update
  } = wsOptions;
  if (!entry) {
    console.warn('watchOptions 缺少关键参数 entry。PS: 通常是被下载的 url 的根目录');
  } else {
    const task = createWebsocketTask(`${protocol}://${host}:${port}`);
    if (task) {
      task.onMessage(({ data }) => {
        const result = JSON.parse(data as string);
        if (result.entry === entry) {
          update?.(JSON.parse(result.dslStr));
        }
      });
    }
  }
};

interface ImportModuleParams {
  path: string;
  saveToStorage?: boolean;
};
const importModuleCache: Record<string, Promise<any>> = {};
export const importModule = ({ path, saveToStorage = false }: ImportModuleParams) => {
  let moduleCache = importModuleCache[path];
  if (moduleCache) return moduleCache;
  importModuleCache[path] = moduleCache = new Promise(async (resolve, reject) => {
    try {
      const moduleCode = await load(path, saveToStorage);
      const start = Date.now();
      resolve(resolveModule(moduleCode));
      console.log('####### 模块解析时间：', Date.now() - start);
    } catch (err) {
      reject(err);
      delete importModuleCache[path];
    }
  });
  return moduleCache;
};

export default load;
