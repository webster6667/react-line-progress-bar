"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/defineProperty"),r=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a=t(r),i={exports:{}},o={};function l(e){function r(r,a,i,o){var l=a?t+r+e.e+a:t+r,v=l;if(i){var s=" "+v+e.m;for(var u in i)if(i.hasOwnProperty(u)){var f=i[u];1==f?v+=s+u:f&&(v+=s+u+n+f)}}if(void 0!==o)for(var c=0,d=o.length;c<d;c++){var p=o[c];if(p&&"string"==typeof p.valueOf())for(var m=p.valueOf().split(" "),g=0;g<m.length;g++){var y=m[g];y!==l&&(v+=" "+y)}}return v}var t=e.n||"",n=e.v||e.m;return function(e,t){return function(n,a,i){return"string"==typeof n?Array.isArray(a)?r(e,n,void 0,a):r(e,n,a,i):r(e,t,n,a)}}}Object.defineProperty(o,"__esModule",{value:1});var v=l({e:"-",m:"_"});o.cn=v,o.withNaming=l;var s={};function u(e){var r=e.n||"",t=e.v||e.m;function n(n,a,i,o){var l=a?r+n+e.e+a:r+n,v=l;if(i){var s=" "+v+e.m;for(var u in i)if(i.hasOwnProperty(u)){var f=i[u];!0===f?v+=s+u:f&&(v+=s+u+t+f)}}if(void 0!==o)for(var c=0,d=o.length;c<d;c++){var p=o[c];if(p&&"string"==typeof p.valueOf())for(var m=p.valueOf().split(" "),g=0;g<m.length;g++){var y=m[g];y!==l&&(v+=" "+y)}}return v}return function(e,r){return function(t,a,i){return"string"==typeof t?Array.isArray(a)?n(e,t,void 0,a):n(e,t,a,i):n(e,r,t,a)}}}Object.defineProperty(s,"__esModule",{value:!0});var f=u({e:"-",m:"_"});s.cn=f,s.withNaming=u,"production"===process.env.NODE_ENV?i.exports=o:i.exports=s;var c=i.exports.withNaming({e:"__",m:"_",v:"-"}),d=function(e){var r={};return Object.keys(e).forEach((function(t){var n=t.replace(/[A-Z]/g,"-$&").toLowerCase();r[n]=e[t]})),r};exports.ProgressBar=function(e){var r=e.className,t=e.progress,i=void 0===t?0:t,o=e.duration,l=void 0===o?"ltr":o,v=e.lineContent,s=void 0===v?null:v,u=e.parallelLineContent,f=void 0===u?null:u,p=e.progressLineWrapperContent,m=void 0===p?null:p,g=e.maxProgress,y=void 0===g?100:g,h=c("progress-bar"),_=i/y*100,O=n.default({transform:"translateX(".concat(_,"%)")},"-ms-transform","translateX(".concat(_,"%)")),N=i===y,b=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=c(e)(d(r));return"".concat(n," ").concat(t).trim()}(h(),{duration:l,fullFilled:N},r);return a.default.createElement("div",{className:b},a.default.createElement("div",{className:h("wrapper")},m,a.default.createElement("div",{className:h("line"),style:O},s)),f?a.default.createElement("div",{className:h("parallel-visible-line"),style:O},f):null)};
