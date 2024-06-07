interface WatchOptions {
  protocol?: 'ws';
  host?: string;
  port?: number;
  entry?: string;
  update?: (json: any) => void;
}

declare module 'kbs-dsl-loader' {
  export default function(url: string | Promise<string>, saveToStrorage: boolean): Promise<any> | undefined;
  export function fromHtml(url: string): Promise<string>;
  export function watch(watchOptions: WatchOptions): void;
}
