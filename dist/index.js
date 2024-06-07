/*! For license information please see index.js.LICENSE.txt */
!function(t,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e=r();for(var n in e)("object"==typeof exports?exports:t)[n]=e[n]}}(self,(()=>(()=>{var t={9944:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},9966:(t,r,e)=>{"use strict";var n=e(3448).charAt;t.exports=function(t,r,e){return r+(e?n(t,r).length:1)}},1855:t=>{t.exports=function(t,r,e){if(!(t instanceof r))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},6112:(t,r,e)=>{var n=e(8759);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},6198:(t,r,e)=>{var n=e(4088),o=e(4005),i=e(7740),a=function(t){return function(r,e,a){var c,u=n(r),s=o(u.length),f=i(a,s);if(t&&e!=e){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},9955:(t,r,e)=>{var n=e(3677),o=e(211),i=e(1448),a=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[];return(r.constructor={})[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},5574:(t,r,e)=>{var n=e(8759),o=e(6526),i=e(211)("species");t.exports=function(t,r){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?n(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},8939:(t,r,e)=>{var n=e(211)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var e=!1;try{var i={};i[n]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},2306:t=>{var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},375:(t,r,e)=>{var n=e(2371),o=e(2306),i=e(211)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),i))?e:a?o(r):"Object"==(n=o(r))&&"function"==typeof r.callee?"Arguments":n}},8474:(t,r,e)=>{var n=e(3167),o=e(6095),i=e(4399),a=e(7826);t.exports=function(t,r){for(var e=o(r),c=a.f,u=i.f,s=0;s<e.length;s++){var f=e[s];n(t,f)||c(t,f,u(r,f))}}},2585:(t,r,e)=>{var n=e(5283),o=e(7826),i=e(5736);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},5736:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},9720:(t,r,e)=>{"use strict";var n=e(1288),o=e(7826),i=e(5736);t.exports=function(t,r,e){var a=n(r);a in t?o.f(t,a,i(0,e)):t[a]=e}},5283:(t,r,e)=>{var n=e(3677);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},821:(t,r,e)=>{var n=e(2086),o=e(8759),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},4344:(t,r,e)=>{var n=e(4999);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(n)},1801:(t,r,e)=>{var n=e(2306),o=e(2086);t.exports="process"==n(o.process)},4928:(t,r,e)=>{var n=e(4999);t.exports=/web0s(?!.*chrome)/i.test(n)},4999:(t,r,e)=>{var n=e(563);t.exports=n("navigator","userAgent")||""},1448:(t,r,e)=>{var n,o,i=e(2086),a=e(4999),c=i.process,u=c&&c.versions,s=u&&u.v8;s?o=(n=s.split("."))[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},8684:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1695:(t,r,e)=>{var n=e(2086),o=e(4399).f,i=e(2585),a=e(1007),c=e(3648),u=e(8474),s=e(7189);t.exports=function(t,r){var e,f,l,p,v,h=t.target,d=t.global,y=t.stat;if(e=d?n:y?n[h]||c(h,{}):(n[h]||{}).prototype)for(f in r){if(p=r[f],l=t.noTargetGet?(v=o(e,f))&&v.value:e[f],!s(d?f:h+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(e,f,p,t)}}},3677:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},2331:(t,r,e)=>{"use strict";e(2077);var n=e(1007),o=e(3677),i=e(211),a=e(4861),c=e(2585),u=i("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f="$0"==="a".replace(/./,"$0"),l=i("replace"),p=!!/./[l]&&""===/./[l]("a","$0"),v=!o((function(){var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,r,e,l){var h=i(t),d=!o((function(){var r={};return r[h]=function(){return 7},7!=""[t](r)})),y=d&&!o((function(){var r=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[u]=function(){return e},e.flags="",e[h]=/./[h]),e.exec=function(){return r=!0,null},e[h](""),!r}));if(!d||!y||"replace"===t&&(!s||!f||p)||"split"===t&&!v){var g=/./[h],x=e(h,""[t],(function(t,r,e,n,o){return r.exec===a?d&&!o?{done:!0,value:g.call(r,e,n)}:{done:!0,value:t.call(e,r,n)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=x[0],b=x[1];n(String.prototype,t,m),n(RegExp.prototype,h,2==r?function(t,r){return b.call(t,this,r)}:function(t){return b.call(t,this)})}l&&c(RegExp.prototype[h],"sham",!0)}},8516:(t,r,e)=>{var n=e(9944);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},563:(t,r,e)=>{var n=e(9775),o=e(2086),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][r]||o[t]&&o[t][r]}},1667:(t,r,e)=>{var n=e(375),o=e(7719),i=e(211)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},8509:(t,r,e)=>{var n=e(3060),o=Math.floor,i="".replace,a=/\$([$&'`]|\d\d?|<[^>]*>)/g,c=/\$([$&'`]|\d\d?)/g;t.exports=function(t,r,e,u,s,f){var l=e+t.length,p=u.length,v=c;return void 0!==s&&(s=n(s),v=a),i.call(f,v,(function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,e);case"'":return r.slice(l);case"<":a=s[i.slice(1,-1)];break;default:var c=+i;if(0===c)return n;if(c>p){var f=o(c/10);return 0===f?n:f<=p?void 0===u[f-1]?i.charAt(1):u[f-1]+i.charAt(1):n}a=u[c-1]}return void 0===a?"":a}))}},2086:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},3167:t=>{var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},7153:t=>{t.exports={}},1670:(t,r,e)=>{var n=e(2086);t.exports=function(t,r){var e=n.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,r))}},5963:(t,r,e)=>{var n=e(563);t.exports=n("document","documentElement")},6761:(t,r,e)=>{var n=e(5283),o=e(3677),i=e(821);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},5974:(t,r,e)=>{var n=e(3677),o=e(2306),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},9277:(t,r,e)=>{var n=e(4489),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},3278:(t,r,e)=>{var n,o,i,a=e(9316),c=e(2086),u=e(8759),s=e(2585),f=e(3167),l=e(4489),p=e(8944),v=e(7153),h=c.WeakMap;if(a){var d=l.state||(l.state=new h),y=d.get,g=d.has,x=d.set;n=function(t,r){return r.facade=t,x.call(d,t,r),r},o=function(t){return y.call(d,t)||{}},i=function(t){return g.call(d,t)}}else{var m=p("state");v[m]=!0,n=function(t,r){return r.facade=t,s(t,m,r),r},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!u(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},2814:(t,r,e)=>{var n=e(211),o=e(7719),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},6526:(t,r,e)=>{var n=e(2306);t.exports=Array.isArray||function(t){return"Array"==n(t)}},7189:(t,r,e)=>{var n=e(3677),o=/#|\.prototype\./,i=function(t,r){var e=c[a(t)];return e==s||e!=u&&("function"==typeof r?n(r):!!r)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},8759:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},3296:t=>{t.exports=!1},4722:(t,r,e)=>{var n=e(6112),o=e(2814),i=e(4005),a=e(8516),c=e(1667),u=e(6737),s=function(t,r){this.stopped=t,this.result=r};t.exports=function(t,r,e){var f,l,p,v,h,d,y,g=e&&e.that,x=!(!e||!e.AS_ENTRIES),m=!(!e||!e.IS_ITERATOR),b=!(!e||!e.INTERRUPTED),w=a(r,g,1+x+b),E=function(t){return f&&u(f),new s(!0,t)},S=function(t){return x?(n(t),b?w(t[0],t[1],E):w(t[0],t[1])):b?w(t,E):w(t)};if(m)f=t;else{if("function"!=typeof(l=c(t)))throw TypeError("Target is not iterable");if(o(l)){for(p=0,v=i(t.length);v>p;p++)if((h=S(t[p]))&&h instanceof s)return h;return new s(!1)}f=l.call(t)}for(d=f.next;!(y=d.call(f)).done;){try{h=S(y.value)}catch(t){throw u(f),t}if("object"==typeof h&&h&&h instanceof s)return h}return new s(!1)}},6737:(t,r,e)=>{var n=e(6112);t.exports=function(t){var r=t.return;if(void 0!==r)return n(r.call(t)).value}},7719:t=>{t.exports={}},3173:(t,r,e)=>{var n,o,i,a,c,u,s,f,l=e(2086),p=e(4399).f,v=e(4953).set,h=e(4344),d=e(4928),y=e(1801),g=l.MutationObserver||l.WebKitMutationObserver,x=l.document,m=l.process,b=l.Promise,w=p(l,"queueMicrotask"),E=w&&w.value;E||(n=function(){var t,r;for(y&&(t=m.domain)&&t.exit();o;){r=o.fn,o=o.next;try{r()}catch(t){throw o?a():i=void 0,t}}i=void 0,t&&t.enter()},h||y||d||!g||!x?b&&b.resolve?(s=b.resolve(void 0),f=s.then,a=function(){f.call(s,n)}):a=y?function(){m.nextTick(n)}:function(){v.call(l,n)}:(c=!0,u=x.createTextNode(""),new g(n).observe(u,{characterData:!0}),a=function(){u.data=c=!c})),t.exports=E||function(t){var r={fn:t,next:void 0};i&&(i.next=r),o||(o=r,a()),i=r}},8109:(t,r,e)=>{var n=e(2086);t.exports=n.Promise},3193:(t,r,e)=>{var n=e(3677);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},9316:(t,r,e)=>{var n=e(2086),o=e(9277),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},8722:(t,r,e)=>{"use strict";var n=e(9944),o=function(t){var r,e;this.promise=new t((function(t,n){if(void 0!==r||void 0!==e)throw TypeError("Bad Promise constructor");r=t,e=n})),this.resolve=n(r),this.reject=n(e)};t.exports.f=function(t){return new o(t)}},8675:(t,r,e)=>{"use strict";var n=e(5283),o=e(3677),i=e(8779),a=e(6952),c=e(7446),u=e(3060),s=e(5974),f=Object.assign,l=Object.defineProperty;t.exports=!f||o((function(){if(n&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},r={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach((function(t){r[t]=t})),7!=f({},t)[e]||i(f({},r)).join("")!=o}))?function(t,r){for(var e=u(t),o=arguments.length,f=1,l=a.f,p=c.f;o>f;)for(var v,h=s(arguments[f++]),d=l?i(h).concat(l(h)):i(h),y=d.length,g=0;y>g;)v=d[g++],n&&!p.call(h,v)||(e[v]=h[v]);return e}:f},7826:(t,r,e)=>{var n=e(5283),o=e(6761),i=e(6112),a=e(1288),c=Object.defineProperty;r.f=n?c:function(t,r,e){if(i(t),r=a(r,!0),i(e),o)try{return c(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},4399:(t,r,e)=>{var n=e(5283),o=e(7446),i=e(5736),a=e(4088),c=e(1288),u=e(3167),s=e(6761),f=Object.getOwnPropertyDescriptor;r.f=n?f:function(t,r){if(t=a(t),r=c(r,!0),s)try{return f(t,r)}catch(t){}if(u(t,r))return i(!o.f.call(t,r),t[r])}},62:(t,r,e)=>{var n=e(1352),o=e(8684).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},6952:(t,r)=>{r.f=Object.getOwnPropertySymbols},1352:(t,r,e)=>{var n=e(3167),o=e(4088),i=e(6198).indexOf,a=e(7153);t.exports=function(t,r){var e,c=o(t),u=0,s=[];for(e in c)!n(a,e)&&n(c,e)&&s.push(e);for(;r.length>u;)n(c,e=r[u++])&&(~i(s,e)||s.push(e));return s}},8779:(t,r,e)=>{var n=e(1352),o=e(8684);t.exports=Object.keys||function(t){return n(t,o)}},7446:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},999:(t,r,e)=>{"use strict";var n=e(2371),o=e(375);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},6095:(t,r,e)=>{var n=e(563),o=e(62),i=e(6952),a=e(6112);t.exports=n("Reflect","ownKeys")||function(t){var r=o.f(a(t)),e=i.f;return e?r.concat(e(t)):r}},9775:(t,r,e)=>{var n=e(2086);t.exports=n},4522:t=>{t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},880:(t,r,e)=>{var n=e(6112),o=e(8759),i=e(8722);t.exports=function(t,r){if(n(t),o(r)&&r.constructor===t)return r;var e=i.f(t);return(0,e.resolve)(r),e.promise}},9431:(t,r,e)=>{var n=e(1007);t.exports=function(t,r,e){for(var o in r)n(t,o,r[o],e);return t}},1007:(t,r,e)=>{var n=e(2086),o=e(2585),i=e(3167),a=e(3648),c=e(9277),u=e(3278),s=u.get,f=u.enforce,l=String(String).split("String");(t.exports=function(t,r,e,c){var u,s=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof r||i(e,"name")||o(e,"name",r),(u=f(e)).source||(u.source=l.join("string"==typeof r?r:""))),t!==n?(s?!v&&t[r]&&(p=!0):delete t[r],p?t[r]=e:o(t,r,e)):p?t[r]=e:a(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},1189:(t,r,e)=>{var n=e(2306),o=e(4861);t.exports=function(t,r){var e=t.exec;if("function"==typeof e){var i=e.call(t,r);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,r)}},4861:(t,r,e)=>{"use strict";var n,o,i=e(4276),a=e(4930),c=RegExp.prototype.exec,u=String.prototype.replace,s=c,f=(n=/a/,o=/b*/g,c.call(n,"a"),c.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(f||p||l)&&(s=function(t){var r,e,n,o,a=this,s=l&&a.sticky,v=i.call(a),h=a.source,d=0,y=t;return s&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),y=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(h="(?: "+h+")",y=" "+y,d++),e=new RegExp("^(?:"+h+")",v)),p&&(e=new RegExp("^"+h+"$(?!\\s)",v)),f&&(r=a.lastIndex),n=c.call(s?e:a,y),s?n?(n.input=n.input.slice(d),n[0]=n[0].slice(d),n.index=a.lastIndex,a.lastIndex+=n[0].length):a.lastIndex=0:f&&n&&(a.lastIndex=a.global?n.index+n[0].length:r),p&&n&&n.length>1&&u.call(n[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=s},4276:(t,r,e)=>{"use strict";var n=e(6112);t.exports=function(){var t=n(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},4930:(t,r,e)=>{"use strict";var n=e(3677);function o(t,r){return RegExp(t,r)}r.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),r.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},9586:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3648:(t,r,e)=>{var n=e(2086),o=e(2585);t.exports=function(t,r){try{o(n,t,r)}catch(e){n[t]=r}return r}},7420:(t,r,e)=>{"use strict";var n=e(563),o=e(7826),i=e(211),a=e(5283),c=i("species");t.exports=function(t){var r=n(t),e=o.f;a&&r&&!r[c]&&e(r,c,{configurable:!0,get:function(){return this}})}},914:(t,r,e)=>{var n=e(7826).f,o=e(3167),i=e(211)("toStringTag");t.exports=function(t,r,e){t&&!o(t=e?t:t.prototype,i)&&n(t,i,{configurable:!0,value:r})}},8944:(t,r,e)=>{var n=e(9197),o=e(5422),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},4489:(t,r,e)=>{var n=e(2086),o=e(3648),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},9197:(t,r,e)=>{var n=e(3296),o=e(4489);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.8.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},8515:(t,r,e)=>{var n=e(6112),o=e(9944),i=e(211)("species");t.exports=function(t,r){var e,a=n(t).constructor;return void 0===a||null==(e=n(a)[i])?r:o(e)}},3448:(t,r,e)=>{var n=e(9679),o=e(9586),i=function(t){return function(r,e){var i,a,c=String(o(r)),u=n(e),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},4953:(t,r,e)=>{var n,o,i,a=e(2086),c=e(3677),u=e(8516),s=e(5963),f=e(821),l=e(4344),p=e(1801),v=a.location,h=a.setImmediate,d=a.clearImmediate,y=a.process,g=a.MessageChannel,x=a.Dispatch,m=0,b={},w="onreadystatechange",E=function(t){if(b.hasOwnProperty(t)){var r=b[t];delete b[t],r()}},S=function(t){return function(){E(t)}},j=function(t){E(t.data)},O=function(t){a.postMessage(t+"",v.protocol+"//"+v.host)};h&&d||(h=function(t){for(var r=[],e=1;arguments.length>e;)r.push(arguments[e++]);return b[++m]=function(){("function"==typeof t?t:Function(t)).apply(void 0,r)},n(m),m},d=function(t){delete b[t]},p?n=function(t){y.nextTick(S(t))}:x&&x.now?n=function(t){x.now(S(t))}:g&&!l?(i=(o=new g).port2,o.port1.onmessage=j,n=u(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts&&v&&"file:"!==v.protocol&&!c(O)?(n=O,a.addEventListener("message",j,!1)):n=w in f("script")?function(t){s.appendChild(f("script"))[w]=function(){s.removeChild(this),E(t)}}:function(t){setTimeout(S(t),0)}),t.exports={set:h,clear:d}},7740:(t,r,e)=>{var n=e(9679),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},4088:(t,r,e)=>{var n=e(5974),o=e(9586);t.exports=function(t){return n(o(t))}},9679:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},4005:(t,r,e)=>{var n=e(9679),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},3060:(t,r,e)=>{var n=e(9586);t.exports=function(t){return Object(n(t))}},1288:(t,r,e)=>{var n=e(8759);t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},2371:(t,r,e)=>{var n={};n[e(211)("toStringTag")]="z",t.exports="[object z]"===String(n)},5422:t=>{var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},1876:(t,r,e)=>{var n=e(3193);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},211:(t,r,e)=>{var n=e(2086),o=e(9197),i=e(3167),a=e(5422),c=e(3193),u=e(1876),s=o("wks"),f=n.Symbol,l=u?f:f&&f.withoutSetter||a;t.exports=function(t){return i(s,t)||(c&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},3938:(t,r,e)=>{"use strict";var n=e(1695),o=e(3677),i=e(6526),a=e(8759),c=e(3060),u=e(4005),s=e(9720),f=e(5574),l=e(9955),p=e(211),v=e(1448),h=p("isConcatSpreadable"),d=9007199254740991,y="Maximum allowed index exceeded",g=v>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),x=l("concat"),m=function(t){if(!a(t))return!1;var r=t[h];return void 0!==r?!!r:i(t)};n({target:"Array",proto:!0,forced:!g||!x},{concat:function(t){var r,e,n,o,i,a=c(this),l=f(a,0),p=0;for(r=-1,n=arguments.length;r<n;r++)if(m(i=-1===r?a:arguments[r])){if(p+(o=u(i.length))>d)throw TypeError(y);for(e=0;e<o;e++,p++)e in i&&s(l,p,i[e])}else{if(p>=d)throw TypeError(y);s(l,p++,i)}return l.length=p,l}})},8410:(t,r,e)=>{var n=e(1695),o=e(8675);n({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},2571:(t,r,e)=>{var n=e(1695),o=e(3060),i=e(8779);n({target:"Object",stat:!0,forced:e(3677)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},3238:(t,r,e)=>{var n=e(2371),o=e(1007),i=e(999);n||o(Object.prototype,"toString",i,{unsafe:!0})},1418:(t,r,e)=>{"use strict";var n,o,i,a,c=e(1695),u=e(3296),s=e(2086),f=e(563),l=e(8109),p=e(1007),v=e(9431),h=e(914),d=e(7420),y=e(8759),g=e(9944),x=e(1855),m=e(9277),b=e(4722),w=e(8939),E=e(8515),S=e(4953).set,j=e(3173),O=e(880),T=e(1670),P=e(8722),_=e(4522),L=e(3278),I=e(7189),A=e(211),R=e(1801),k=e(1448),M=A("species"),N="Promise",C=L.get,$=L.set,F=L.getterFor(N),U=l,G=s.TypeError,D=s.document,B=s.process,K=f("fetch"),q=P.f,z=q,Y=!!(D&&D.createEvent&&s.dispatchEvent),W="function"==typeof PromiseRejectionEvent,H="unhandledrejection",J=I(N,(function(){if(m(U)===String(U)){if(66===k)return!0;if(!R&&!W)return!0}if(u&&!U.prototype.finally)return!0;if(k>=51&&/native code/.test(U))return!1;var t=U.resolve(1),r=function(t){t((function(){}),(function(){}))};return(t.constructor={})[M]=r,!(t.then((function(){}))instanceof r)})),X=J||!w((function(t){U.all(t).catch((function(){}))})),V=function(t){var r;return!(!y(t)||"function"!=typeof(r=t.then))&&r},Q=function(t,r){if(!t.notified){t.notified=!0;var e=t.reactions;j((function(){for(var n=t.value,o=1==t.state,i=0;e.length>i;){var a,c,u,s=e[i++],f=o?s.ok:s.fail,l=s.resolve,p=s.reject,v=s.domain;try{f?(o||(2===t.rejection&&et(t),t.rejection=1),!0===f?a=n:(v&&v.enter(),a=f(n),v&&(v.exit(),u=!0)),a===s.promise?p(G("Promise-chain cycle")):(c=V(a))?c.call(a,l,p):l(a)):p(n)}catch(t){v&&!u&&v.exit(),p(t)}}t.reactions=[],t.notified=!1,r&&!t.rejection&&tt(t)}))}},Z=function(t,r,e){var n,o;Y?((n=D.createEvent("Event")).promise=r,n.reason=e,n.initEvent(t,!1,!0),s.dispatchEvent(n)):n={promise:r,reason:e},!W&&(o=s["on"+t])?o(n):t===H&&T("Unhandled promise rejection",e)},tt=function(t){S.call(s,(function(){var r,e=t.facade,n=t.value;if(rt(t)&&(r=_((function(){R?B.emit("unhandledRejection",n,e):Z(H,e,n)})),t.rejection=R||rt(t)?2:1,r.error))throw r.value}))},rt=function(t){return 1!==t.rejection&&!t.parent},et=function(t){S.call(s,(function(){var r=t.facade;R?B.emit("rejectionHandled",r):Z("rejectionhandled",r,t.value)}))},nt=function(t,r,e){return function(n){t(r,n,e)}},ot=function(t,r,e){t.done||(t.done=!0,e&&(t=e),t.value=r,t.state=2,Q(t,!0))},it=function(t,r,e){if(!t.done){t.done=!0,e&&(t=e);try{if(t.facade===r)throw G("Promise can't be resolved itself");var n=V(r);n?j((function(){var e={done:!1};try{n.call(r,nt(it,e,t),nt(ot,e,t))}catch(r){ot(e,r,t)}})):(t.value=r,t.state=1,Q(t,!1))}catch(r){ot({done:!1},r,t)}}};J&&(U=function(t){x(this,U,N),g(t),n.call(this);var r=C(this);try{t(nt(it,r),nt(ot,r))}catch(t){ot(r,t)}},(n=function(t){$(this,{type:N,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(U.prototype,{then:function(t,r){var e=F(this),n=q(E(this,U));return n.ok="function"!=typeof t||t,n.fail="function"==typeof r&&r,n.domain=R?B.domain:void 0,e.parent=!0,e.reactions.push(n),0!=e.state&&Q(e,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n,r=C(t);this.promise=t,this.resolve=nt(it,r),this.reject=nt(ot,r)},P.f=q=function(t){return t===U||t===i?new o(t):z(t)},u||"function"!=typeof l||(a=l.prototype.then,p(l.prototype,"then",(function(t,r){var e=this;return new U((function(t,r){a.call(e,t,r)})).then(t,r)}),{unsafe:!0}),"function"==typeof K&&c({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return O(U,K.apply(s,arguments))}}))),c({global:!0,wrap:!0,forced:J},{Promise:U}),h(U,N,!1,!0),d(N),i=f(N),c({target:N,stat:!0,forced:J},{reject:function(t){var r=q(this);return r.reject.call(void 0,t),r.promise}}),c({target:N,stat:!0,forced:u||J},{resolve:function(t){return O(u&&this===i?U:this,t)}}),c({target:N,stat:!0,forced:X},{all:function(t){var r=this,e=q(r),n=e.resolve,o=e.reject,i=_((function(){var e=g(r.resolve),i=[],a=0,c=1;b(t,(function(t){var u=a++,s=!1;i.push(void 0),c++,e.call(r,t).then((function(t){s||(s=!0,i[u]=t,--c||n(i))}),o)})),--c||n(i)}));return i.error&&o(i.value),e.promise},race:function(t){var r=this,e=q(r),n=e.reject,o=_((function(){var o=g(r.resolve);b(t,(function(t){o.call(r,t).then(e.resolve,n)}))}));return o.error&&n(o.value),e.promise}})},2077:(t,r,e)=>{"use strict";var n=e(1695),o=e(4861);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},1203:(t,r,e)=>{"use strict";var n=e(2331),o=e(6112),i=e(4005),a=e(9586),c=e(9966),u=e(1189);n("match",1,(function(t,r,e){return[function(r){var e=a(this),n=null==r?void 0:r[t];return void 0!==n?n.call(r,e):new RegExp(r)[t](String(e))},function(t){var n=e(r,t,this);if(n.done)return n.value;var a=o(t),s=String(this);if(!a.global)return u(a,s);var f=a.unicode;a.lastIndex=0;for(var l,p=[],v=0;null!==(l=u(a,s));){var h=String(l[0]);p[v]=h,""===h&&(a.lastIndex=c(s,i(a.lastIndex),f)),v++}return 0===v?null:p}]}))},911:(t,r,e)=>{"use strict";var n=e(2331),o=e(6112),i=e(4005),a=e(9679),c=e(9586),u=e(9966),s=e(8509),f=e(1189),l=Math.max,p=Math.min;n("replace",2,(function(t,r,e,n){var v=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=n.REPLACE_KEEPS_$0,d=v?"$":"$0";return[function(e,n){var o=c(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,n){if(!v&&h||"string"==typeof n&&-1===n.indexOf(d)){var c=e(r,t,this,n);if(c.done)return c.value}var y=o(t),g=String(this),x="function"==typeof n;x||(n=String(n));var m=y.global;if(m){var b=y.unicode;y.lastIndex=0}for(var w=[];;){var E=f(y,g);if(null===E)break;if(w.push(E),!m)break;""===String(E[0])&&(y.lastIndex=u(g,i(y.lastIndex),b))}for(var S,j="",O=0,T=0;T<w.length;T++){E=w[T];for(var P=String(E[0]),_=l(p(a(E.index),g.length),0),L=[],I=1;I<E.length;I++)L.push(void 0===(S=E[I])?S:String(S));var A=E.groups;if(x){var R=[P].concat(L,_,g);void 0!==A&&R.push(A);var k=String(n.apply(void 0,R))}else k=s(P,g,_,L,A,n);_>=O&&(j+=g.slice(O,_)+k,O=_+P.length)}return j+g.slice(O)}]}))},7061:(t,r,e)=>{var n=e(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var r,e={},i=Object.prototype,a=i.hasOwnProperty,c=Object.defineProperty||function(t,r,e){t[r]=e.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",f=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function p(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{p({},"")}catch(r){p=function(t,r,e){return t[r]=e}}function v(t,r,e,n){var o=r&&r.prototype instanceof b?r:b,i=Object.create(o.prototype),a=new k(n||[]);return c(i,"_invoke",{value:L(t,e,a)}),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=v;var d="suspendedStart",y="suspendedYield",g="executing",x="completed",m={};function b(){}function w(){}function E(){}var S={};p(S,s,(function(){return this}));var j=Object.getPrototypeOf,O=j&&j(j(M([])));O&&O!==i&&a.call(O,s)&&(S=O);var T=E.prototype=b.prototype=Object.create(S);function P(t){["next","throw","return"].forEach((function(r){p(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,c,u){var s=h(t[o],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==n(l)&&a.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;c(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}})}function L(t,e,n){var o=d;return function(i,a){if(o===g)throw new Error("Generator is already running");if(o===x){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=I(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=x,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var s=h(t,e,n);if("normal"===s.type){if(o=n.done?x:y,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=x,n.method="throw",n.arg=s.arg)}}}function I(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,I(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=h(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function A(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function R(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function M(t){if(t||""===t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return w.prototype=E,c(T,"constructor",{value:E,configurable:!0}),c(E,"constructor",{value:w,configurable:!0}),w.displayName=p(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,p(t,l,"GeneratorFunction")),t.prototype=Object.create(T),t},e.awrap=function(t){return{__await:t}},P(_.prototype),p(_.prototype,f,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(v(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(T),p(T,l,"Generator"),p(T,s,(function(){return this})),p(T,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=M,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),R(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;R(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:t=>{function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},4687:(t,r,e)=>{var n=e(7061)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{"use strict";function t(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}e.r(n),e.d(n,{default:()=>l,fromHtml:()=>s,watch:()=>f});var r=e(4687),o=e.n(r),i=(e(3238),e(1418),e(2077),e(1203),e(911),e(3938),e(8410),e(2571),{}),a={protocol:"ws",host:"localhost",port:9900},c={},u=function(t){delete c[t]},s=function(t){return new Promise((function(r,e){wx.request({url:t,method:"GET",dataType:"其他",success:function(n){var o=n.data,i=null==o?void 0:o.match(/\<script src="([^"]+)"\>\<\/script\>\<\/body\>/gm);if(null!=i&&i.length){var a=i[0].replace(/^.+src="([^"]+)".+$/,"$1").replace(/\.js$/,".dsl.json");if(/^http(s?):\/\/|^\/\//.test(a))r(a);else{var c=/\/$/.test(t)?"":"/";r("".concat(t).concat(c).concat(a))}}else e(new Error("获取 dsl 地址失败！"))},fail:function(t){e(t)}})}))},f=function(t){var r=Object.assign({},a,t||{}),e=r.protocol,n=r.host,o=r.port,i=r.entry,s=r.update;if(i){var f=function(t){if(!c[t]){var r=wx.connectSocket({url:t,fail:function(t){console.log("失败：",t)}});r&&(r.onOpen((function(){console.log("文件监听开启!")})),r.onClose((function(){return u(t)})),r.onError((function(){return u(t)})),c[t]=r)}return c[t]}("".concat(e,"://").concat(n,":").concat(o));f&&f.onMessage((function(t){var r=t.data,e=JSON.parse(r);e.entry===i&&(null==s||s(JSON.parse(e.dslStr)))}))}else console.warn("watchOptions 缺少关键参数 entry。PS: 通常是被下载的 url 的根目录")};const l=function(){var r,e=(r=o().mark((function t(r,e){var n,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n="","string"==typeof r){t.next=7;break}return t.next=4,r;case 4:n=t.sent,t.next=8;break;case 7:n=r;case 8:if(!i[n]){try{a=wx.getStorageSync(n)}catch(t){console.warn("getStorageSync 失败：",n)}i[n]=a||new Promise((function(t,r){try{wx.request({url:n,method:"GET",dataType:"json",success:function(r){var o=r.data;if(e)try{wx.setStorage({key:n,data:o})}catch(t){console.warn("setStorage 失败：",{key:n,data:o})}t(o)},fail:function(t){r(t)}})}catch(t){r(t)}}))}return t.abrupt("return",i[n]);case 10:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=r.apply(e,n);function c(r){t(a,o,i,c,u,"next",r)}function u(r){t(a,o,i,c,u,"throw",r)}c(void 0)}))});return function(t,r){return e.apply(this,arguments)}}()})(),n})()));