!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=3)}([function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EJsonType=void 0,function(n){n[n.JsonPrimitive=1]="JsonPrimitive",n[n.JsonArray=2]="JsonArray",n[n.JsonObject=3]="JsonObject",n[n.JsonString=4]="JsonString",n[n.JsonNumber=5]="JsonNumber",n[n.JsonBoolean=6]="JsonBoolean",n[n.JsonNull=7]="JsonNull"}(e.EJsonType||(e.EJsonType={}))},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JsonTransformer=void 0;const t=r(0),o={[t.EJsonType.Primitive]:n=>{const e=typeof n;return null==e||"string"===e||"number"===e||"boolean"===e},[t.EJsonType.Array]:n=>Array.isArray(n),[t.EJsonType.Object]:n=>null!=n&&"object"==typeof n&&!Array.isArray(n),[t.EJsonType.String]:n=>"string"==typeof n,[t.EJsonType.Number]:n=>"number"==typeof n,[t.EJsonType.Boolean]:n=>"boolean"==typeof n,[t.EJsonType.Null]:n=>null==n},s={transformerJsonPrimitive:o[t.EJsonType.Primitive],transformerJsonArray:o[t.EJsonType.Array],transformerJsonObject:o[t.EJsonType.Object],transformerJsonString:o[t.EJsonType.String],transformerJsonNumber:o[t.EJsonType.Number],transformerJsonBoolean:o[t.EJsonType.Boolean],transformerJsonNull:o[t.EJsonType.Null]},i={transformerJsonPrimitiveAfter:o[t.EJsonType.Primitive],transformerJsonArrayAfter:o[t.EJsonType.Array],transformerJsonObjectAfter:o[t.EJsonType.Object],transformerJsonStringAfter:o[t.EJsonType.String],transformerJsonNumberAfter:o[t.EJsonType.Number],transformerJsonBooleanAfter:o[t.EJsonType.Boolean],transformerJsonNullAfter:o[t.EJsonType.Null]};class u{constructor({init:n,data:e={},level:r=0,transformer:t}={}){Object.assign(this,{init:n,data:e,level:r,transformer:t}),this._root=this,null!=t&&Object.setPrototypeOf(this.transformer.data,this.data)}get root(){return this._root}transformerPipe(n){var e,r;return null!==(r=null===(e=this.transformer)||void 0===e?void 0:e.transform(n))&&void 0!==r?r:n.value}transform({value:n,data:e={},level:r=0}){const t=Object.assign({},e);Object.setPrototypeOf(t,this.data);let o=n;for(const[e,i]of Object.entries(s)){const s=this[e];null!=s&&i(o)&&(o=s({value:n,data:t,level:r}))}o=this.transformerPipe({value:o,data:t,level:r});for(const[n,e]of Object.entries(i)){const s=this[n];null!=s&&e(o)&&(o=s({value:o,data:t,level:r}))}return o}pipe(n){const e=n.data;return Object.setPrototypeOf(e,this.data),n._root=this._root,this.transformer=n,n}transformerJsonNullAfter(n){return null}}e.JsonTransformer=u,e.default=u},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JsonTransformerTraversal=void 0;const t=r(1);class o extends t.JsonTransformer{constructor(n={}){super(n),this.transformerJsonArrayAfter=({value:n,data:e,level:r})=>{const t=r+1,o=[];for(const r of n)o.push(this.transform({value:r,data:e,level:t}));return o},this.transformerJsonObjectAfter=({value:n,data:e,level:r})=>{const t=r+1,o={};for(const[r,s]of Object.entries(n))o[this.transform({value:r,data:e,level:t})]=this.transform({value:s,data:e,level:t});return o}}}e.JsonTransformerTraversal=o,e.default=o},function(n,e,r){n.exports=r(4)},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r(1);Object.defineProperty(e,"JsonTransformer",{enumerable:!0,get:function(){return t.JsonTransformer}});var o=r(5);Object.defineProperty(e,"JsonTransformerFunction",{enumerable:!0,get:function(){return o.JsonTransformerFunction}});var s=r(2);Object.defineProperty(e,"JsonTransformerTraversal",{enumerable:!0,get:function(){return s.JsonTransformerTraversal}});var i=r(6);Object.defineProperty(e,"JsonTransformerTraversalRestricted",{enumerable:!0,get:function(){return i.JsonTransformerTraversalRestricted}});var u=r(7);Object.defineProperty(e,"JsonTransformerArraySome",{enumerable:!0,get:function(){return u.JsonTransformerArraySome}});var a=r(8);Object.defineProperty(e,"JsonTransformerStringLevel",{enumerable:!0,get:function(){return a.JsonTransformerStringLevel}});var l=r(9);Object.defineProperty(e,"JsonTransformerStringTemplate",{enumerable:!0,get:function(){return l.JsonTransformerStringTemplate}});var c=r(10);Object.defineProperty(e,"JsonTransformerStringTemplateFunctions",{enumerable:!0,get:function(){return c.JsonTransformerStringTemplateFunctions}});var f=r(11);Object.defineProperty(e,"JsonFunctionArraySome",{enumerable:!0,get:function(){return f.JsonFunctionArraySome}});var v=r(12);Object.defineProperty(e,"JsonFunctionArrayCount",{enumerable:!0,get:function(){return v.JsonFunctionArrayCount}});var m=r(13);Object.defineProperty(e,"JsonFunctionArraySum",{enumerable:!0,get:function(){return m.JsonFunctionArraySum}});var J=r(14);Object.defineProperty(e,"JsonFunctionArrayMin",{enumerable:!0,get:function(){return J.JsonFunctionArrayMin}});var d=r(15);Object.defineProperty(e,"JsonFunctionArrayMax",{enumerable:!0,get:function(){return d.JsonFunctionArrayMax}});var y=r(16);Object.defineProperty(e,"JsonFunctionStringLevel",{enumerable:!0,get:function(){return y.JsonFunctionStringLevel}})},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JsonTransformerFunction=void 0;const t=r(0),o=r(1);class s extends o.JsonTransformer{constructor(n={}){var e,r,o,s;if(super(Object.assign(Object.assign({},n),{init:Object.assign(Object.assign({},n.init),{functionAttribute:null!==(r=null===(e=null==n?void 0:n.init)||void 0===e?void 0:e.functionAttribute)&&void 0!==r?r:"$function"})})),this.v_functions_before={[t.EJsonType.Array]:{},[t.EJsonType.Object]:{},[t.EJsonType.String]:{}},this.v_functions_after={[t.EJsonType.Array]:{},[t.EJsonType.Object]:{},[t.EJsonType.String]:{}},this.transformerJsonArray=n=>{if(0===n.value.length)return n.value;const e=this.v_functions_before[t.EJsonType.Array][n.value[0]];return null==e?n.value:e(n)},this.transformerJsonObject=n=>{var e;const r=null!==(e=n.value[this.init.functionAttribute])&&void 0!==e?e:"";if("string"==typeof r&&null!=n.value[r]){const e=this.v_functions_before[t.EJsonType.Object][r];return null==e?n.value:e(n)}return n.value},this.transformerJsonString=n=>{const e=this.v_functions_before[t.EJsonType.String][n.value];return null==e?n.value:e(n)},this.transformerJsonArrayAfter=n=>{if(0===n.value.length)return n.value;const e=this.v_functions_after[t.EJsonType.Array][n.value[0]];return null==e?n.value:e(n)},this.transformerJsonObjectAfter=n=>{var e;const r=null!==(e=n.value[this.init.functionAttribute])&&void 0!==e?e:"";if("string"==typeof r&&null!=n.value[r]){const e=this.v_functions_after[t.EJsonType.Object][r];return null==e?n.value:e(n)}return n.value},this.transformerJsonStringAfter=n=>{const e=this.v_functions_after[t.EJsonType.String][n.value];return null==e?n.value:e(n)},Array.isArray(null===(o=null==n?void 0:n.init)||void 0===o?void 0:o.before))for(const e of n.init.before)null!=e.type&&(this.v_functions_before[e.type][e.init]=e);if(Array.isArray(null===(s=null==n?void 0:n.init)||void 0===s?void 0:s.after))for(const e of n.init.after)this.v_functions_after[e.type][e.init]=e}}e.JsonTransformerFunction=s,e.default=s},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JsonTransformerTraversalRestricted=void 0;const t=r(2);class o extends t.JsonTransformerTraversal{constructor(n={}){var e,r,t,o;super(Object.assign(Object.assign({},n),{init:{minLevel:null!==(r=null===(e=null==n?void 0:n.init)||void 0===e?void 0:e.minLevel)&&void 0!==r?r:0,maxLevel:null!==(o=null===(t=null==n?void 0:n.init)||void 0===t?void 0:t.maxLevel)&&void 0!==o?o:1/0}}))}transformerPipe(n){return this.init.minLevel<=n.level&&n.level<=this.init.maxLevel?super.transformerPipe(n):n.value}}e.JsonTransformerTraversalRestricted=o,e.default=o},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JsonTransformerArraySome=void 0;const t=r(1);class o extends t.JsonTransformer{constructor(n={}){var e;super(Object.assign(Object.assign({},n),{init:null!==(e=null==n?void 0:n.init)&&void 0!==e?e:"$some"})),this.transformerJsonArrayAfter=({value:n})=>{const e=n.length;return 0===e||n[0]!==this.init?n:1===e?null:n[Math.floor(Math.random()*(e-1))+1]}}}e.JsonTransformerArraySome=o,e.default=o},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JsonTransformerStringLevel=void 0;const t=r(1);class o extends t.JsonTransformer{constructor(n={}){var e;super(Object.assign(Object.assign({},n),{init:null!==(e=null==n?void 0:n.init)&&void 0!==e?e:"$level"})),this.transformerJsonString=({value:n,level:e})=>n===this.init?e:n}}e.JsonTransformerStringLevel=o,e.default=o},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JsonTransformerStringTemplate=void 0;const t=r(1);class o extends t.JsonTransformer{constructor(n={}){var e;super(Object.assign(Object.assign({},n),{init:null!==(e=null==n?void 0:n.init)&&void 0!==e?e:/\${([\w\d@_-]+)}/})),this.transformerJsonString=({value:n,data:e})=>{const r=new RegExp(this.init,"g"),t=n,o=t.match(new RegExp(`^${this.init.toString().slice(1,-1)}$`)),s=n=>{const t=n.matchAll(r),o=[];let i=t.next();if(i.done)return n;for(;!i.done;){const n=i.value,r=e[n[1]];null!=r&&o.push([n[0],s(r)]),i=t.next()}for(const e of o)n=n.replace(e[0],e[1]);return n};return null!=o?e[o[1]]:s(t)}}}e.JsonTransformerStringTemplate=o,e.default=o},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JsonTransformerStringTemplateFunctions=void 0;const t=r(1);class o extends t.JsonTransformer{constructor(n={}){var e;super(Object.assign(Object.assign({},n),{init:null!==(e=null==n?void 0:n.init)&&void 0!==e?e:/\${([\w\d@_-]+)(}|\([\s\w\d@_,:'"<>{}\[\]-]*\)})/})),this.transformerJsonString=({value:n,data:e})=>{const r=new RegExp(this.init,"g"),t=n,o=t.match(new RegExp(`^${this.init.toString().slice(1,-1)}$`)),s=(n,r)=>{var t;const o=null==n?null:e[n],s=null!==(t=null==r?void 0:r.slice(1,-2).replace(/'/g,'"'))&&void 0!==t?t:"";let i;if(r.length>1){try{i=JSON.parse(s)}catch(n){i=n.message}return[o,i]}return[o,null]};return((n,t)=>{var o;const i=n.matchAll(r),u=[];let a=i.next();if(a.done)return n;for(;!a.done;){const n=a.value,[r,l]=s(n[1],n[2]);if(null!=r){let s;if("function"==typeof r){const n=r({value:l,data:e,level:this.level});s=t&&"string"!=typeof n?JSON.stringify(n):n}else s=null!=l?n[0]:t?null!==(o=r)&&void 0!==o?o:"":r;u.push([n[0],s])}a=i.next()}if(t){for(const e of u)n=n.replace(e[0],e[1]);return n}return u[0][1]})(t,null==o||1==o.length)}}}e.JsonTransformerStringTemplateFunctions=o,e.default=o},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JsonFunctionArraySome=void 0;const t=r(0);function o({value:n}){const e=n.length;return 0===e||n[0]!==o.init?n:1===e?null:n[Math.floor(Math.random()*(e-1))+1]}e.JsonFunctionArraySome=o,o.type=t.EJsonType.Array,o.init="$some",e.default=o},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JsonFunctionArrayCount=void 0;const t=r(0);function o({value:n}){return 0===n.length||n[0]!==o.init?n:n.length-1}e.JsonFunctionArrayCount=o,o.type=t.EJsonType.Array,o.init="$count",e.default=o},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JsonFunctionArraySum=void 0;const t=r(0);function o({value:n}){return 0===n.length||n[0]!==o.init?n:n.slice(1).reduce((n,e)=>n+e,0)}e.JsonFunctionArraySum=o,o.type=t.EJsonType.Array,o.init="$sum",e.default=o},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JsonFunctionArrayMin=void 0;const t=r(0);function o({value:n}){return 0===n.length||n[0]!==o.init?n:n.slice(1).reduce((n,e)=>Math.min(n,e),1/0)}e.JsonFunctionArrayMin=o,o.type=t.EJsonType.Array,o.init="$min",e.default=o},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JsonFunctionArrayMax=void 0;const t=r(0);function o({value:n}){return 0===n.length||n[0]!==o.init?n:n.slice(1).reduce((n,e)=>Math.max(n,e),-1/0)}e.JsonFunctionArrayMax=o,o.type=t.EJsonType.Array,o.init="$max",e.default=o},function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JsonFunctionStringLevel=void 0;const t=r(0);function o({value:n,level:e}){return n===o.init?e:n}e.JsonFunctionStringLevel=o,o.type=t.EJsonType.String,o.init="$level",e.default=o}]);