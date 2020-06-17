!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=5)}([function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=r(1);Object.defineProperty(n,"JsonType",{enumerable:!0,get:function(){return t.JsonType}}),Object.defineProperty(n,"DoIt",{enumerable:!0,get:function(){return t.DoIt}});var o=r(2);Object.defineProperty(n,"JsonTransformer",{enumerable:!0,get:function(){return o.JsonTransformer}});var s=r(6);Object.defineProperty(n,"JsonTransformerFunction",{enumerable:!0,get:function(){return s.JsonTransformerFunction}});var i=r(4);Object.defineProperty(n,"JsonTransformerTraversal",{enumerable:!0,get:function(){return i.JsonTransformerTraversal}});var l=r(7);Object.defineProperty(n,"JsonTransformerTraversalRestricted",{enumerable:!0,get:function(){return l.JsonTransformerTraversalRestricted}});var a=r(8);Object.defineProperty(n,"JsonTransformerArraySome",{enumerable:!0,get:function(){return a.JsonTransformerArraySome}});var u=r(9);Object.defineProperty(n,"JsonTransformerStringLevel",{enumerable:!0,get:function(){return u.JsonTransformerStringLevel}});var c=r(10);Object.defineProperty(n,"JsonTransformerStringTemplate",{enumerable:!0,get:function(){return c.JsonTransformerStringTemplate}});var f=r(11);Object.defineProperty(n,"JsonTransformerStringTemplateFunctions",{enumerable:!0,get:function(){return f.JsonTransformerStringTemplateFunctions}});var v=r(12);Object.defineProperty(n,"JsonFunctionArraySome",{enumerable:!0,get:function(){return v.JsonFunctionArraySome}});var m=r(13);Object.defineProperty(n,"JsonFunctionArrayCount",{enumerable:!0,get:function(){return m.JsonFunctionArrayCount}});var d=r(14);Object.defineProperty(n,"JsonFunctionArraySum",{enumerable:!0,get:function(){return d.JsonFunctionArraySum}});var p=r(15);Object.defineProperty(n,"JsonFunctionArrayMin",{enumerable:!0,get:function(){return p.JsonFunctionArrayMin}});var y=r(16);Object.defineProperty(n,"JsonFunctionArrayMax",{enumerable:!0,get:function(){return y.JsonFunctionArrayMax}});var J=r(17);Object.defineProperty(n,"JsonFunctionStringLevel",{enumerable:!0,get:function(){return J.JsonFunctionStringLevel}})},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.DoIt=n.JsonType=void 0,function(e){e[e.Primitive=1]="Primitive",e[e.Array=2]="Array",e[e.Object=3]="Object",e[e.String=4]="String",e[e.Number=5]="Number",e[e.Boolean=6]="Boolean",e[e.Null=7]="Null"}(n.JsonType||(n.JsonType={})),function(e){e[e.Before=1]="Before",e[e.After=2]="After",e[e.Twice=3]="Twice"}(n.DoIt||(n.DoIt={}))},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformer=void 0;const t=r(1);class o{constructor({init:e,data:n={},level:r=0,transformer:o,doit:s=t.DoIt.Before}={}){Object.assign(this,{init:e,data:n,level:r,transformer:o,doit:s}),this._root=this,null!=o&&Object.setPrototypeOf(this.transformer.data,this.data)}get root(){return this._root}transformerPipe(e){var n,r;return null!==(r=null===(n=this.transformer)||void 0===n?void 0:n.transform(e))&&void 0!==r?r:e.value}transform({value:e,data:n={},level:r=0}){const o=Object.assign({},n);Object.setPrototypeOf(o,this.data);const i=()=>{for(const[n,t]of Object.entries(s)){const s=this[n];null!=s&&t(l)&&(l=s({value:e,data:o,level:r}))}};let l=e;return this.doit!==t.DoIt.Before&&this.doit!==t.DoIt.Twice||i(),l=this.transformerPipe({value:l,data:o,level:r}),this.doit!==t.DoIt.After&&this.doit!==t.DoIt.Twice||i(),l}pipe(e){const n=e.data;return Object.setPrototypeOf(n,this.data),e._root=this._root,this.transformer=e,e}static isJsonPrimitive(e){const n=typeof e;return null==n||"string"===n||"number"===n||"boolean"===n}static isJsonArray(e){return Array.isArray(e)}static isJsonObject(e){return null!=e&&"object"==typeof e&&!Array.isArray(e)}static isJsonString(e){return"string"==typeof e}static isJsonNumber(e){return"number"==typeof e}static isJsonBoolean(e){return"boolean"==typeof e}static isJsonNull(e){return null==e}}n.JsonTransformer=o;const s={transformerJsonPrimitive:o.isJsonPrimitive,transformerJsonArray:o.isJsonArray,transformerJsonObject:o.isJsonObject,transformerJsonString:o.isJsonString,transformerJsonNumber:o.isJsonNumber,transformerJsonBoolean:o.isJsonBoolean,transformerJsonNull:o.isJsonNull};n.default=o},function(e,n){e.exports=require("util")},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerTraversal=void 0;const t=r(2);class o extends t.JsonTransformer{constructor(e={}){super(e),this.transformerJsonPrimitive=({value:e})=>e,this.transformerJsonArray=({value:e,data:n,level:r})=>{const t=r+1,o=[];for(const r of e)o.push(this.transform({value:r,data:n,level:t}));return o},this.transformerJsonObject=({value:e,data:n,level:r})=>{const t=r+1,o={};for(const[r,s]of Object.entries(e))o[this.transform({value:r,data:n,level:t})]=this.transform({value:s,data:n,level:t});return o}}}n.JsonTransformerTraversal=o,n.default=o},function(e,n,r){e.exports=r(18)},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerFunction=void 0;const t=r(1),o=r(2);class s extends o.JsonTransformer{constructor(e={}){var n,r,o;if(super(Object.assign(Object.assign({},e),{init:Object.assign(Object.assign({},e.init),{functionAttribute:null!==(r=null===(n=null==e?void 0:e.init)||void 0===n?void 0:n.functionAttribute)&&void 0!==r?r:"$function"})})),this.v_functions={[t.JsonType.Array]:{},[t.JsonType.Object]:{},[t.JsonType.String]:{}},this.transformerJsonArray=e=>{if(0===e.value.length)return e.value;const n=this.v_functions_before[t.JsonType.Array][e.value[0]];return null==n?e.value:n(e)},this.transformerJsonObject=e=>{var n;const r=null!==(n=e.value[this.init.functionAttribute])&&void 0!==n?n:"";if("string"==typeof r&&null!=e.value[r]){const n=this.v_functions[t.JsonType.Object][r];return null==n?e.value:n(e)}return e.value},this.transformerJsonString=e=>{const n=this.v_functions[t.JsonType.String][e.value];return null==n?e.value:n(e)},Array.isArray(null===(o=null==e?void 0:e.init)||void 0===o?void 0:o.functions))for(const n of e.init.functions)null!=n.type&&(this.v_functions[n.type][n.init]=n)}}n.JsonTransformerFunction=s,n.default=s},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerTraversalRestricted=void 0;const t=r(4);class o extends t.JsonTransformerTraversal{constructor(e={}){var n,r,t,o;super(Object.assign(Object.assign({},e),{init:{minLevel:null!==(r=null===(n=null==e?void 0:e.init)||void 0===n?void 0:n.minLevel)&&void 0!==r?r:0,maxLevel:null!==(o=null===(t=null==e?void 0:e.init)||void 0===t?void 0:t.maxLevel)&&void 0!==o?o:1/0}}))}transformerPipe(e){return this.init.minLevel<=e.level&&e.level<=this.init.maxLevel?super.transformerPipe(e):e.value}}n.JsonTransformerTraversalRestricted=o,n.default=o},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerArraySome=void 0;const t=r(2);class o extends t.JsonTransformer{constructor(e={}){var n;super(Object.assign(Object.assign({},e),{init:null!==(n=null==e?void 0:e.init)&&void 0!==n?n:"$some"})),this.transformerJsonArray=({value:e})=>{const n=e.length;return 0===n||e[0]!==this.init?e:1===n?null:e[Math.floor(Math.random()*(n-1))+1]}}}n.JsonTransformerArraySome=o,n.default=o},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerStringLevel=void 0;const t=r(2);class o extends t.JsonTransformer{constructor(e={}){var n;super(Object.assign(Object.assign({},e),{init:null!==(n=null==e?void 0:e.init)&&void 0!==n?n:"$level"})),this.transformerJsonString=({value:e,level:n})=>e===this.init?n:e}}n.JsonTransformerStringLevel=o,n.default=o},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerStringTemplate=void 0;const t=r(2);class o extends t.JsonTransformer{constructor(e={}){var n;super(Object.assign(Object.assign({},e),{init:null!==(n=null==e?void 0:e.init)&&void 0!==n?n:/\${([\w\d@_-]+)}/})),this.transformerJsonString=({value:e,data:n})=>{const r=new RegExp(this.init,"g"),t=e,o=t.match(new RegExp(`^${this.init.toString().slice(1,-1)}$`)),s=e=>{const t=e.matchAll(r),o=[];let i=t.next();if(i.done)return e;for(;!i.done;){const e=i.value,r=n[e[1]];null!=r&&o.push([e[0],s(r)]),i=t.next()}for(const n of o)e=e.replace(n[0],n[1]);return e};return null!=o?n[o[1]]:s(t)}}}n.JsonTransformerStringTemplate=o,n.default=o},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonTransformerStringTemplateFunctions=void 0;const t=r(2);class o extends t.JsonTransformer{constructor(e={}){var n;super(Object.assign(Object.assign({},e),{init:null!==(n=null==e?void 0:e.init)&&void 0!==n?n:/\${([\w\d@_-]+)(}|\([\s\w\d@_,:'"<>{}\[\]-]*\)})/})),this.transformerJsonString=({value:e,data:n})=>{const r=new RegExp(this.init,"g"),t=e,o=t.match(new RegExp(`^${this.init.toString().slice(1,-1)}$`)),s=(e,r)=>{var t;const o=null==e?null:n[e],s=null!==(t=null==r?void 0:r.slice(1,-2).replace(/'/g,'"'))&&void 0!==t?t:"";let i;if(r.length>1){try{i=JSON.parse(s)}catch(e){i=e.message}return[o,i]}return[o,null]};return((e,t)=>{var o;const i=e.matchAll(r),l=[];let a=i.next();if(a.done)return e;for(;!a.done;){const e=a.value,[r,u]=s(e[1],e[2]);if(null!=r){let s;if("function"==typeof r){const e=r({value:u,data:n,level:this.level});s=t&&"string"!=typeof e?JSON.stringify(e):e}else s=null!=u?e[0]:t?null!==(o=r)&&void 0!==o?o:"":r;l.push([e[0],s])}a=i.next()}if(t){for(const n of l)e=e.replace(n[0],n[1]);return e}return l[0][1]})(t,null==o||1==o.length)}}}n.JsonTransformerStringTemplateFunctions=o,n.default=o},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionArraySome=void 0;const t=r(1);function o({value:e}){const n=e.length;return 0===n||e[0]!==o.init?e:1===n?null:e[Math.floor(Math.random()*(n-1))+1]}n.JsonFunctionArraySome=o,o.type=t.JsonType.Array,o.init="$some",n.default=o},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionArrayCount=void 0;const t=r(1);function o({value:e}){return 0===e.length||e[0]!==o.init?e:e.length-1}n.JsonFunctionArrayCount=o,o.type=t.JsonType.Array,o.init="$count",n.default=o},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionArraySum=void 0;const t=r(1);function o({value:e}){return 0===e.length||e[0]!==o.init?e:e.slice(1).reduce((e,n)=>e+n,0)}n.JsonFunctionArraySum=o,o.type=t.JsonType.Array,o.init="$sum",n.default=o},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionArrayMin=void 0;const t=r(1);function o({value:e}){return 0===e.length||e[0]!==o.init?e:e.slice(1).reduce((e,n)=>Math.min(e,n),1/0)}n.JsonFunctionArrayMin=o,o.type=t.JsonType.Array,o.init="$min",n.default=o},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionArrayMax=void 0;const t=r(1);function o({value:e}){return 0===e.length||e[0]!==o.init?e:e.slice(1).reduce((e,n)=>Math.max(e,n),-1/0)}n.JsonFunctionArrayMax=o,o.type=t.JsonType.Array,o.init="$max",n.default=o},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.JsonFunctionStringLevel=void 0;const t=r(1);function o({value:e,level:n}){return e===o.init?n:e}n.JsonFunctionStringLevel=o,o.type=t.JsonType.String,o.init="$level",n.default=o},function(e,n,r){"use strict";r.r(n);var t=r(0),o=r(3),s=r.n(o);
/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
const i={compact:!0,depth:10,breakLength:80,colors:!0};var l=function(e){console.log("============================================================================================"),console.log("== "+e),console.log("============================================================================================"),console.group(),console.log("------------------------------------------------------------------------------------------")},a=function(e,n){console.log(s.a.inspect(n,i).replace(/'/g,'"')),console.log("→"),console.log(s.a.inspect(e.transform({value:n}),i).replace(/'/g,'"')),console.log("------------------------------------------------------------------------------------------")},u=function(){console.groupEnd(),console.log()};
/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */const c=(new t.JsonTransformerTraversal).pipe(new t.JsonTransformerArraySome).root;l("String: $level (es6)"),a(c,["$some"]),a(c,["$some",5]);for(let e=0;e<5;e++)a(c,["$some",5,7,9]);const f=(new t.JsonTransformerTraversal).pipe(new t.JsonTransformerStringLevel).pipe(new t.JsonTransformerArraySome).root;for(let e=0;e<3;e++)a(f,["$some","$level",["$level"],[["$level"]]]);for(let e=0;e<3;e++)a(f,{someValue:["$some","$level",["$level"],[["$level"]]]});u();
/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
const v=(new t.JsonTransformerTraversal).pipe(new t.JsonTransformerStringLevel).root;l("String: $level (es6)"),a(v,"$level"),a(v,["$level",{level:"$level"},["$level",["$level"]]]),a(v,["$level",{level:"$level"},["$level",["$level",["$level",{level:"$level"},["$level",["$level"]]]]]]),u();
/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
const m=new t.JsonTransformerTraversal({data:{abc:123,hello:"Hallo",name:"Wolfgang"}}).pipe(new t.JsonTransformerStringLevel).pipe(new t.JsonTransformerStringTemplate).root;l("String: Templates with Placeholders ${name} (es6))"),a(m,"${abc}"),a(m,"${hello}, ${name}!"),a(m,"${hello}, ${name}! ${HowAreYou}"),a(m,[["${abc}"],{abc:"${abc}","${abc}":"abc"},"${name}"]),u();
/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
const d=new t.JsonTransformerTraversal({data:{abc:123,hello:"Hallo",name:"Wolfgang",fps:50,vpf:({value:e,data:n})=>[e.x/n.fps,e.y/n.fps],def:()=>123}}).pipe(new t.JsonTransformerStringLevel).pipe(new t.JsonTransformerStringTemplateFunctions).root;l("String: Templates with Placeholders ${name(...)} and Function Calls (csj)"),a(d,"${abc}"),a(d,"${hello}, ${name}!"),a(d,"${hello}, ${name}! ${HowAreYou}"),a(d,[["${abc}"],{abc:"${abc}","${abc}":"abc"},"${name}"]),a(d,"${vpf({'x':100, 'y':200})}"),a(d,"{v: ${vpf({'x':100, 'y':200})}}"),a(d,{v:"${vpf({'x':100, 'y':200})}"}),a(d,[{v:"${vpf({'x':100, 'y':200})}"},{a:"${vpf({'x':200, 'y':400})}"}]),a(d,"${def()}"),u()}]);