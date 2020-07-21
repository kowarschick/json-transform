/*! For license information please see examples_bundle_es6.js.LICENSE.txt */
!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),o=this&&this.__exportStar||function(e,n){for(var t in e)"default"===t||n.hasOwnProperty(t)||r(n,e,t)};Object.defineProperty(n,"__esModule",{value:!0}),o(t(1),n),o(t(2),n),o(t(6),n),o(t(7),n),o(t(8),n),o(t(9),n),o(t(10),n),o(t(11),n),o(t(12),n),o(t(3),n),o(t(13),n),o(t(14),n),o(t(15),n),o(t(16),n),o(t(17),n),o(t(18),n),o(t(19),n),o(t(20),n),o(t(21),n),o(t(22),n),o(t(23),n),o(t(24),n)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isInitMap=n.isRegExp=n.isJsonFunction=n.isJsonValue=n.isJsonObject=n.isJsonArray=n.isJsonPrimitive=n.isJsonNull=n.isJsonBoolean=n.isJsonNumber=n.isJsonString=n.JsonType=void 0;let r=null;r=null,r=null,r=null,r=null,r=null,r=null,r=null,function(e){e[e.Primitive=1]="Primitive",e[e.Array=2]="Array",e[e.Object=3]="Object",e[e.String=4]="String",e[e.Number=5]="Number",e[e.Boolean=6]="Boolean",e[e.Null=7]="Null"}(n.JsonType||(n.JsonType={})),r=null,r=null,n.isJsonString=function(e){return"string"==typeof e},n.isJsonNumber=function(e){return Number.isFinite(e)},n.isJsonBoolean=function(e){return"boolean"==typeof e},n.isJsonNull=function(e){return null==e},n.isJsonPrimitive=function(e){const n=typeof e;return null==n||"string"===n||"number"===n||"boolean"===n},n.isJsonArray=function(e){return Array.isArray(e)},n.isJsonObject=function(e){return null!=e&&"object"==typeof e&&!Array.isArray(e)},n.isJsonValue=function(e){return null!=e&&"function"!=typeof e},n.isJsonFunction=function(e){return null!=e&&"function"==typeof e},n.isRegExp=function(e){return e instanceof RegExp},n.isInitMap=function(e){return null!=e&&"object"==typeof e&&!Array.isArray(e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformer=void 0;const r=t(1),o=[["transformerJsonPrimitive",r.isJsonPrimitive],["transformerJsonArray",r.isJsonArray],["transformerJsonObject",r.isJsonObject],["transformerJsonString",r.isJsonString],["transformerJsonNull",r.isJsonNull],["transformerJsonNumber",r.isJsonNumber],["transformerJsonBoolean",r.isJsonBoolean]];class s{constructor({init:e={},data:n={},rename:t={}}={}){this.v_init_root={},this.v_data={},this.v_rename_reverse={},this.v_transformer_tests=[],this._pipe_tail=null,this._pipe_transformers=[],this.transformerJsonPrimitive=null,this.transformerJsonArray=null,this.transformerJsonObject=null,this.transformerJsonString=null,this.transformerJsonNumber=null,this.transformerJsonBoolean=null,this.transformerJsonNull=null,this.v_root=this,this.v_name=this.constructor.name,this.init=e,this.merge({[this.v_name]:this.init},this.v_init_root),this.v_data=n,this.v_rename=t;for(const[e,n]of Object.entries(t))this.v_rename_reverse[n]=e}initialize(){if(0===this.v_transformer_tests.length)for(const[e,n]of o){const t=this[e];null!=t&&this.v_transformer_tests.push([n,t])}}merge(e,n){for(let[t,o]of Object.entries(e)){const e=n[t];null==e?n[t]=o:r.isJsonObject(e)&&r.isJsonObject(o)&&this.merge(o,e)}}rename(e){var n;return null!==(n=this.v_root.v_rename[e])&&void 0!==n?n:e}rerename(e){var n;return null!==(n=this.v_root.v_rename_reverse[e])&&void 0!==n?n:e}functionName(e){const n=e=>r.isJsonString(e)?null!=this.v_rename_reverse[e]?this.rerename(e):null!=this.v_rename[e]?null:e:null;return r.isJsonArray(e)?e.length>0?n(e[0]):null:n(e[this.rename("$function")])}isFunctionName(e,n){return this.functionName(n)===e}arrayFunctionValue(e,n){if(this.functionName(n)===e){const e=n[this.rename("$value")];return r.isJsonArray(e)?e:null}return null}pipe(...e){if(0===e.length)return this;if(null==this._pipe_tail){this._pipe_transformers=e;for(const n of e)Object.setPrototypeOf(n.v_data,this.v_data),n.v_root=this,this.merge({[n.v_name]:n.init},this.v_init_root),this.merge(n.v_rename,this.v_rename),n.init=this.v_init_root[n.v_name]}else this._pipe_tail.pipe(...e);return this._pipe_tail=this._pipe_transformers[0],this}transformerPipe(e){let n=e.value;for(const t of this._pipe_transformers)n=t.transform({value:n,data:e.data,level:e.level});return n}transform({value:e,data:n={},level:t=0}){const r=Object.assign({},n);Object.setPrototypeOf(r,this.v_data);let o=e;for(const[n,s]of this.v_transformer_tests)if(n(e)){o=s({value:e,data:r,level:t});break}return o=this.transformerPipe({value:o,data:r,level:t}),o}}n.JsonTransformer=s,n.default=s},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerTraversal=void 0;const r=t(2);class o extends r.JsonTransformer{constructor(e={}){super(e),this.transformerJsonPrimitive=({value:e})=>e,this.transformerJsonArray=({value:e,data:n,level:t})=>{const r=t+1,o=[];for(const t of e)o.push(this.transform({value:t,data:n,level:r}));return o},this.transformerJsonObject=({value:e,data:n,level:t})=>{const r=t+1,o={};for(const[t,s]of Object.entries(e))o[this.transform({value:t,data:n,level:r})]=this.transform({value:s,data:n,level:r});return o},this.initialize()}}n.JsonTransformerTraversal=o,n.default=o},function(e,n){e.exports=require("util")},function(e,n,t){e.exports=t(25)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerLevel=void 0;const r=t(2);class o extends r.JsonTransformer{constructor(e={}){super(e),this.transformerJsonString=({value:e,level:n})=>e===this.rename("$level")?n:e,this.initialize()}}n.JsonTransformerLevel=o,n.default=o},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerNull=void 0;const r=t(2);class o extends r.JsonTransformer{constructor(e={}){super(e),this.transformerJsonNull=({})=>null,this.initialize()}}n.JsonTransformerNull=o,n.default=o},function(e,n,t){"use strict";var r=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerRandom=void 0;const o=t(1),s=t(2);class i extends s.JsonTransformer{constructor(e={}){var{init:n={min:0,max:1,isInteger:!1,scale:null,gzp:1}}=e,t=r(e,["init"]);super(Object.assign({init:n},t)),this.transformerJsonObject=({value:e,data:n})=>{var t,r,s,i;const l=this.init,a=null!==(t=null==e?void 0:e[this.rename("$min")])&&void 0!==t?t:l.min,u=null!==(r=null==e?void 0:e[this.rename("$max")])&&void 0!==r?r:l.max;if(!this.isFunctionName("$random",e)||!Number.isFinite(a)||!Number.isFinite(u))return e;const c=null!==(s=null==e?void 0:e[this.rename("$isInteger")])&&void 0!==s?s:l.isInteger,f=null!==(i=null==e?void 0:e[this.rename("$gzp")])&&void 0!==i?i:l.gzp,v=null==n?void 0:n[null==e?void 0:e[this.rename("$scale")]],m=o.isJsonNumber(v)?v:l.scale,p=Math.random();let d;return d=c?Math.floor(a+p*(u+1-a)):a+p*(u-a),Number.isFinite(f)&&0<=f&&f<1&&(d*=Math.random()>=f?1:-1),o.isJsonNumber(m)?d*m:d},this.initialize()}}n.JsonTransformerRandom=i,n.default=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerSome=void 0;const r=t(2);class o extends r.JsonTransformer{constructor(e={}){super(e),this.transformerJsonArray=({value:e})=>{const n=e.length;return 0===n||e[0]!==this.rename("$some")?e:1===n?null:e[Math.floor(Math.random()*(n-1))+1]},this.transformerJsonObject=({value:e,data:n,level:t})=>{const r=this.arrayFunctionValue("$some",e);return null!=r?this.transformerJsonArray({value:r,data:n,level:t}):e},this.initialize()}}n.JsonTransformerSome=o,n.default=o},function(e,n,t){"use strict";var r=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerStringReplace=void 0;const o=t(1),s=t(2);class i extends s.JsonTransformer{constructor(e={}){var{init:n={regexp:/^(@|\${)/,jsonOnly:!0}}=e,t=r(e,["init"]);super(Object.assign({init:n},t)),this.transformerJsonString=({value:e,data:n})=>{var t,r;const s=this.init,i=null!==(t=s.regexp)&&void 0!==t?t:/^(@|\${)/,l=null===(r=s.jsonOnly)||void 0===r||r,a=n[e];return null==a||!e.match(i)||l&&!o.isJsonValue(a)?e:a},this.initialize()}}n.JsonTransformerStringReplace=i,n.default=i},function(e,n,t){"use strict";var r=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerTemplate=void 0;const o=t(2);class s extends o.JsonTransformer{constructor(e={}){var{init:n=/\${([\w\d@_-]+)}/}=e,t=r(e,["init"]);super(Object.assign({init:n},t)),this.transformerJsonString=({value:e,data:n})=>{const t=this.init,r=e,o=r.match(new RegExp(`^${t.toString().slice(1,-1)}$`)),s=e=>{const r=e.matchAll(new RegExp(t,"g")),o=[];let i=r.next();if(i.done)return e;for(;!i.done;){const e=i.value,t=n[e[1]],l="string"==typeof t?t:JSON.stringify(t);null!=t&&o.push([e[0],s(l)]),i=r.next()}for(const n of o)e=e.replace(n[0],n[1]);return e};return null!=o?n[o[1]]:s(r)},this.initialize()}}n.JsonTransformerTemplate=s,n.default=s},function(e,n,t){"use strict";var r=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerTemplateFunctions=void 0;const o=t(2);class s extends o.JsonTransformer{constructor(e={}){var{init:n=/\${([\w\d@_-]+)(}|\([\s\w\d@_,:'"<>{}\[\]-]*\)})/}=e,t=r(e,["init"]);super(Object.assign({init:n},t)),this.transformerJsonString=({value:e,data:n})=>{const t=this.init,r=e,o=r.match(new RegExp(`^${t.toString().slice(1,-1)}$`)),s=(e,t)=>{var r;const o=null==e?null:null==n?void 0:n[e],s=null!==(r=null==t?void 0:t.slice(1,-2).replace(/'/g,'"'))&&void 0!==r?r:"";let i;if(t.length>1){try{i=JSON.parse(s)}catch(e){i=e.message}return[o,i]}return[o,null]};return((e,r)=>{var o;const i=e.matchAll(new RegExp(t,"g")),l=[];let a=i.next();if(a.done)return e;for(;!a.done;){const e=a.value,[t,u]=s(e[1],e[2]);if(null!=t){let s;if("function"==typeof t){const e=t({value:u,data:n,level:this.level});s=r&&"string"!=typeof e?JSON.stringify(e):e}else s=null!=u?e[0]:r?null!==(o=t)&&void 0!==o?o:"":t;l.push([e[0],s])}a=i.next()}if(r){for(const n of l)e=e.replace(n[0],n[1]);return e}return l[0][1]})(r,null==o||1==o.length)},this.initialize()}}n.JsonTransformerTemplateFunctions=s,n.default=s},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerTraversalBreadthFirst=void 0;const r=t(2);class o extends r.JsonTransformer{constructor(e={}){super(e),this.transformerJsonPrimitive=e=>super.transformerPipe(e),this.transformerJsonArray=({value:e,data:n,level:t})=>{const r=t+1;let o=[];for(const t of e)o.push(this.transform({value:t,data:n,level:r}));return super.transformerPipe({value:o,data:n,level:r})},this.transformerJsonObject=({value:e,data:n,level:t})=>{const r=t+1;let o={};for(const[t,s]of Object.entries(e))o[this.transform({value:t,data:n,level:r})]=this.transform({value:s,data:n,level:r});return super.transformerPipe({value:o,data:n,level:r})},this.initialize()}transformerPipe({value:e}){return e}}n.JsonTransformerTraversalBreadthFirst=o,n.default=o},function(e,n,t){"use strict";var r=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerTraversalRestricted=void 0;const o=t(3);class s extends o.JsonTransformerTraversal{constructor(e={}){var{init:n={minLevel:0,maxLevel:1/0}}=e,t=r(e,["init"]);super(Object.assign({init:n},t)),this.initialize()}transformerPipe(e){const n=this.init;return n.minLevel<=e.level&&e.level<=n.maxLevel?super.transformerPipe(e):e.value}}n.JsonTransformerTraversalRestricted=s,n.default=s},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerFunction=void 0;const r=t(1),o=t(2);class s extends o.JsonTransformer{constructor(e={}){if(super(e),this.descriptors={[r.JsonType.Array]:{},[r.JsonType.Object]:{},[r.JsonType.String]:{}},this.transformerJsonArray=e=>{const n=e.value;if(0===n.length)return n;const t=this.functionName(n);if(null==t)return n;const o=this.descriptors[r.JsonType.Array][t];return null==o?n:o.function(Object.assign(Object.assign({},e),{init:o.init,rename:this.rename.bind(this)}),1)},this.transformerJsonObject=e=>{const n=e.value,t=this.functionName(n);if(null!=t){const o=this.descriptors[r.JsonType.Object][t];if(null!=o)return o.function(Object.assign(Object.assign({},e),{init:o.init,rename:this.rename.bind(this)}));const s=this.descriptors[r.JsonType.Array][t],i=this.arrayFunctionValue(t,n);return null==i?n:s.function(Object.assign(Object.assign({},e),{value:i,init:s.init,rename:this.rename.bind(this)}))}return n},this.transformerJsonString=e=>{const n=this.descriptors[r.JsonType.String][e.value];return null==n?e.value:n.function(Object.assign(Object.assign({},e),{init:n.init,rename:this.rename.bind(this)}))},this.initialize(),Array.isArray(e.init)){let n;for(const t of e.init)n=t,this.descriptors[n.type][n.name]=n}}}n.JsonTransformerFunction=s,n.default=s},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionAverage=n.JsonFunctionProduct=n.JsonFunctionSum=n.JsonFunctionMaxString=n.JsonFunctionMinString=n.JsonFunctionMax=n.JsonFunctionMin=n.aggregate=void 0;const r=t(1);function o({value:e,init:n},t=0){var r;const o=n,s=(null!==(r=o.begin)&&void 0!==r?r:0)+t,i=o.default,l=o.initialize,a=o.aggregate,u=o.finalize;if("function"==typeof a){let n=null!=l?l(e,s,i):i;for(let t=s,r=e.length;t<r;t++)n=a(n,e[t],e,s,t);return null!=u&&(n=u(n,e,s)),n}return i}n.aggregate=o,n.JsonFunctionMin={name:"$min",type:r.JsonType.Array,function:o,init:{default:Number.MAX_VALUE,aggregate:(e,n)=>Math.min(e,n)}},n.JsonFunctionMax={name:"$max",type:r.JsonType.Array,function:o,init:{default:-Number.MAX_VALUE,aggregate:(e,n)=>Math.max(e,n)}},n.JsonFunctionMinString={name:"$min_string",type:r.JsonType.Array,function:o,init:{default:null,begin:1,initialize:(e,n)=>e.length>n?e[n]:null,aggregate:(e,n)=>e.toString().localeCompare(n)<0?e:n}},n.JsonFunctionMaxString={name:"$max_string",type:r.JsonType.Array,function:o,init:{default:null,begin:1,initialize:(e,n)=>e.length>n?e[n]:null,aggregate:(e,n)=>e.toString().localeCompare(n)>0?e:n}},n.JsonFunctionSum={name:"$sum",type:r.JsonType.Array,function:o,init:{default:0,aggregate:(e,n)=>e+n}},n.JsonFunctionProduct={name:"$product",type:r.JsonType.Array,function:o,init:{default:1,aggregate:(e,n)=>e*n}},n.JsonFunctionAverage={name:"$average",type:r.JsonType.Array,function:o,init:{default:0,aggregate:(e,n)=>e+n,finalize:(e,n,t)=>e/(n.length-t)}},n.default=n.JsonFunctionMin},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionCount=n.count=void 0;const r=t(1);function o({value:e},n=0){return e.length-n}n.count=o,n.JsonFunctionCount={name:"$count",type:r.JsonType.Array,function:o},n.default=n.JsonFunctionCount},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionDuplicate=n.duplicate=void 0;const r=t(1),o=t(3);function s({value:e,init:n,rename:t=(e=>e)}){var r,s,i;const l=new o.JsonTransformerTraversal,a=n,u=null!==(r=e[t("$value")])&&void 0!==r?r:null,c=null!==(s=e[t("$times")])&&void 0!==s?s:a.times,f=[];if((null!==(i=e[t("$flatten")])&&void 0!==i?i:a.flatten)&&Array.isArray(u))for(let e of u)for(let n=0;n<c;n++)f.push(l.transform({value:e}));else for(let e=0;e<c;e++)f.push(l.transform({value:u}));return f}n.duplicate=s,n.JsonFunctionDuplicate={name:"$duplicate",type:r.JsonType.Object,function:s,init:{times:1,withinArray:!1}},n.default=n.JsonFunctionDuplicate},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionLevel=n.level=void 0;const r=t(1);function o({level:e}){return e}n.level=o,n.JsonFunctionLevel={name:"$level",type:r.JsonType.String,function:o},n.default=n.JsonFunctionLevel},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionRandom=n.random=void 0;const r=t(1);function o({value:e,data:n,init:t,rename:o=(e=>e)}){var s,i,l,a;const u=t,c=null!==(s=null==e?void 0:e[o("$min")])&&void 0!==s?s:u.min,f=null!==(i=null==e?void 0:e[o("$max")])&&void 0!==i?i:u.max,v=null!==(l=null==e?void 0:e[o("$isInteger")])&&void 0!==l?l:u.isInteger,m=null!==(a=null==e?void 0:e[o("$gzp")])&&void 0!==a?a:u.gzp,p=null==n?void 0:n[null==e?void 0:e[o("$scale")]],d=r.isJsonNumber(p)?p:u.scale,h=Math.random();let J;return J=v?Math.floor(c+h*(f+1-c)):c+h*(f-c),Number.isFinite(m)&&0<=m&&m<1&&(J*=Math.random()>=m?1:-1),r.isJsonNumber(d)?J*d:J}n.random=o,n.JsonFunctionRandom={name:"$random",type:r.JsonType.Object,function:o,init:{min:0,max:1,isInteger:!1,scale:null,gzp:1}},n.default=n.JsonFunctionRandom},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionSequence=n.sequence=void 0;const r=t(1);function o({value:e,data:n,init:t,rename:r=(e=>e)}){var o,s,i,l;const a=t,u=null!==(o=null==e?void 0:e[r("$first")])&&void 0!==o?o:a.first,c=null!==(s=null==e?void 0:e[r("$last")])&&void 0!==s?s:a.last,f=null!==(i=null==e?void 0:e[r("$prefix")])&&void 0!==i?i:a.prefix,v=null!==(l=null==e?void 0:e[r("$format")])&&void 0!==l?l:a.format,m="string"==typeof v?n[v]:v,p=[];for(let e=u;e<=c;e++){let n=e;null!=f&&(n=f+n),null!=m&&null!=m&&(n=m(n)),p.push(n)}return p}n.sequence=o,n.JsonFunctionSequence={name:"$sequence",type:r.JsonType.Object,function:o,init:{first:1,last:1,prefix:null,format:null}},n.default=n.JsonFunctionSequence},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionShuffle=n.shuffle=void 0;const r=t(1);function o({value:e},n=0){const t=e.slice(n);for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));e!==n&&([t[e],t[n]]=[t[n],t[e]])}return t}n.shuffle=o,n.JsonFunctionShuffle={name:"$shuffle",type:r.JsonType.Array,function:o},n.default=n.JsonFunctionShuffle},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionSome=n.some=void 0;const r=t(1);function o({value:e},n=0){const t=e.length;return t===n?null:e[Math.floor(Math.random()*(t-n))+n]}n.some=o,n.JsonFunctionSome={name:"$some",type:r.JsonType.Array,function:o},n.default=n.JsonFunctionSome},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionUnnest=n.unnest=void 0;const r=t(1);function o({value:e},n=0){const t=e.length,r=[];for(let o=n;o<t;o++){const n=e[o];if(Array.isArray(n))for(let e of n)r.push(e);else r.push(n)}return r}n.unnest=o,n.JsonFunctionUnnest={name:"$unnest",type:r.JsonType.Array,function:o},n.default=n.JsonFunctionUnnest},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(4),s=t.n(o);const i={compact:!0,depth:10,breakLength:80,colors:!0};var l=function(e){console.log("============================================================================================"),console.log("== "+e),console.log("============================================================================================"),console.group(),console.log("------------------------------------------------------------------------------------------")},a=function(e,n,t={}){console.log(s.a.inspect(n,i).replace(/'/g,'"')),console.log("→"),console.log(s.a.inspect(e.transform({value:n,data:t}),i).replace(/'/g,'"')),console.log("------------------------------------------------------------------------------------------")},u=function(){console.groupEnd(),console.log()};const c=(new r.JsonTransformerTraversal).pipe(new r.JsonTransformerSome);l("$some (es6)"),a(c,["$some"]),a(c,["$some",5]);for(let e=0;e<5;e++)a(c,["$some",5,7,9]);l("$level before $some (es6)");const f=(new r.JsonTransformerTraversal).pipe(new r.JsonTransformerLevel).pipe(new r.JsonTransformerSome);for(let e=0;e<3;e++)a(f,["$some","$level",["$level"],[["$level"]]]);for(let e=0;e<3;e++)a(f,{someValue:["$some","$level",["$level"],[["$level"]]]});l("$some before $level (es6)");const v=(new r.JsonTransformer).pipe((new r.JsonTransformerTraversal).pipe(new r.JsonTransformerSome),(new r.JsonTransformerTraversal).pipe(new r.JsonTransformerLevel));for(let e=0;e<3;e++)a(v,["$some","$level",["$level"],[["$level"]]]);for(let e=0;e<3;e++)a(v,{someValue:["$some","$level",["$level"],[["$level"]]]});u();const m=(new r.JsonTransformerTraversal).pipe(new r.JsonTransformerLevel);l("$level (es6)"),a(m,"$level"),a(m,["$level",{level:"$level"},["$level",["$level"]]]),a(m,["$level",{level:"$level"},["$level",["$level",["$level",{level:"$level"},["$level",["$level"]]]]]]),u();const p=new r.JsonTransformerTraversal({data:{abc:123,hello:"Hallo",name:"Wolfgang"}}).pipe(new r.JsonTransformerLevel).pipe(new r.JsonTransformerTemplate);l("Templates with Placeholders ${name} (es6))"),a(p,"${abc}"),a(p,"${hello}, ${name}!"),a(p,"${hello}, ${name}! ${HowAreYou}"),a(p,[["${abc}"],{abc:"${abc}","${abc}":"abc"},"${name}"]),u();const d=new r.JsonTransformerTraversal({data:{abc:123,hello:"Hallo",name:"Wolfgang",fps:50,vpf:({value:e,data:n})=>[e.vx/n.fps,e.vy/n.fps],def:()=>123}}).pipe(new r.JsonTransformerLevel).pipe(new r.JsonTransformerTemplateFunctions);l("Templates with Placeholders ${name(...)} and Function Calls (csj)"),a(d,"${abc}"),a(d,"${hello}, ${name}!"),a(d,"${hello}, ${name}! ${HowAreYou}"),a(d,[["${abc}"],{abc:"${abc}","${abc}":"abc"},"${name}"]),a(d,"${vpf({'vx':100, 'vy':200})}"),a(d,"{v: ${vpf({'vx':100, 'vy':200})}}"),a(d,{v:"${vpf({'vx':100, 'vy':200})}"}),a(d,[{v:"${vpf({'vx':100, 'vy':200})}"},{a:"${vpf({'vx':200, 'vy':400})}"}]),a(d,"${def()}"),u();const h=new r.JsonTransformerTraversal({data:{"@noOfPairs":10,"@image":e=>"image"+e}}).pipe(new r.JsonTransformerFunction({init:[r.JsonFunctionDuplicate,r.JsonFunctionSequence,r.JsonFunctionShuffle,r.JsonFunctionUnnest]})).pipe(new r.JsonTransformerStringReplace),J={cards:{$function:"$sequence",$last:"@noOfPairs",$format:"@image"},board:{$function:"$shuffle",$value:{$function:"$duplicate",$value:{$function:"$sequence",$last:"@noOfPairs"},$times:2,$flatten:!0}}};l("Memory (es6)"),a(h,J,{"@noOfPairs":4}),a(h,J),a(h,J,{"@noOfPairs":11,"@image":e=>"bild"+("__"+e).slice(-3)}),u()}]);