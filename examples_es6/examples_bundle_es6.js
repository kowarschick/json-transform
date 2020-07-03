/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples_es6/example_level_es6.js":
/*!*******************************************!*\
  !*** ./examples_es6/example_level_es6.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wljkowa/json-transformer */ \"./transformer/index.js\");\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _trace_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trace_es6 */ \"./examples_es6/trace_es6.js\");\n/**\n * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>\n * @copyright 2020 © Wolfgang L. J. Kowarschick\n * @license   MIT\n */\n\n// build and run\n//   npm run examples:prod && node examples_es6/examples_bundle_es6.js\n\n//import JsonTransformerTraversal from '@wljkowa/json-transformer/transformer/traversal.js';\n//import JsonTransformerLevel     from '@wljkowa/json-transformer/transformer/string_level.js';\n\n\n\n\n\nconst \n  transformer =  \n         new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]()\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerLevel\"]())\n    .root\n  ;\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title('$level (es6)');\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"$level\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [\"$level\", {\"level\": \"$level\"}, [\"$level\", [\"$level\"]]]);\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [\"$level\", {\"level\": \"$level\"}, [\"$level\", [\"$level\", [\"$level\", {\"level\": \"$level\"}, [\"$level\", [\"$level\"]]]]]]);\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].end();\n\n\n//# sourceURL=webpack:///./examples_es6/example_level_es6.js?");

/***/ }),

/***/ "./examples_es6/example_memory_es6.js":
/*!********************************************!*\
  !*** ./examples_es6/example_memory_es6.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wljkowa/json-transformer */ \"./transformer/index.js\");\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _trace_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trace_es6 */ \"./examples_es6/trace_es6.js\");\n/**\n * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>\n * @copyright 2020 © Wolfgang L. J. Kowarschick\n * @license   MIT\n */\n\n// build and run\n//   npm run examples:prod && node examples_es6/examples_bundle_es6.js\n\n\n\n\n\n\n\n\n\n\n\n\nconst \n  transformer =  \n    new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]({ data: { $noOfPairs: 10 } })\n          .pipe( new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerFunction\"]\n                 ({init:\n                   { functions:\n                     [ _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonFunctionObjectDuplicate\"],\n                       _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonFunctionObjectSequence\"],\n                       _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonFunctionObjectShuffle\"],\n                       _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonFunctionArrayUnnest\"],\n                     ]\n                   }\n                 })\n               )\n          .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerStringReplace\"]())\n          .root,\n\n  c_memory =\n  { cards: { \"$function\": \"$sequence\",\n             \"$max\":      \"$noOfPairs\",\n             \"$format\":   \"image\"  \n           },\n    board: { \"$function\": \"$shuffle\",\n             \"$value\":    { \"$function\":    \"$duplicate\",\n                            \"$value\":       { \"$function\": \"$sequence\",\n                                              \"$max\":      \"$noOfPairs\"\n                                            },\n                            \"$times\":       2,\n                            \"$withinArray\": true\n                          }\n           }\n  };\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title('Memory (es6)');\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform( transformer, c_memory, {$noOfPairs: 4} );\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform( transformer, c_memory );\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform( transformer, \n                 c_memory, \n                 { $noOfPairs: 20,\n                   image: i => 'bild'+('__'+i).slice(-3)\n                 }\n               );\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].end();\n\n\n//# sourceURL=webpack:///./examples_es6/example_memory_es6.js?");

/***/ }),

/***/ "./examples_es6/example_some_es6.js":
/*!******************************************!*\
  !*** ./examples_es6/example_some_es6.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wljkowa/json-transformer */ \"./transformer/index.js\");\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _trace_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trace_es6 */ \"./examples_es6/trace_es6.js\");\n/**\n * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>\n * @copyright 2020 © Wolfgang L. J. Kowarschick\n * @license   MIT\n */\n\n// build and run\n//   npm run examples:prod && node examples_es6/examples_bundle_es6.js\n\n//import { JsonTransformer }          from '@wljkowa/json-transformer/transformer/transformer';\n//import { JsonTransformerTraversal } from '@wljkowa/json-transformer/transformer/traversal';\n//import { JsonTransformerSome }      from '@wljkowa/json-transformer/transformer/some';\n//import { JsonTransformerLevel }     from '@wljkowa/json-transformer/transformer/level';\n\n\n\n\n\n\n\n\nconst \n  transformer =  \n         new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]()\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerSome\"]())\n    .root\n  ;\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title('$some (es6)');\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [\"$some\"]);\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [\"$some\", 5]);\nfor (let i = 0; i < 5; i++)\n{ _trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [\"$some\", 5, 7, 9]); }\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title('$level before $some (es6)');\n\nconst\n  transformer2 =\n          new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]()\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerLevel\"]())\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerSome\"]())\n    .root;\n\nfor (let i = 0; i < 3; i++)\n{ _trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer2, [\"$some\", \"$level\", [\"$level\"], [[\"$level\"]]] ); }\n\nfor (let i = 0; i < 3; i++)\n{ _trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer2, { someValue: [\"$some\", \"$level\", [\"$level\"], [[\"$level\"]]] }); }\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title('$some before $level (es6)');\n\nconst\n  transformer3 =   \n            new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformer\"]()\n      .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]().pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerSome\"]()).root,\n            new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]().pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerLevel\"]()).root, \n           )\n      .root;\n\nfor (let i = 0; i < 3; i++)\n{ _trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer3, [\"$some\", \"$level\", [\"$level\"], [[\"$level\"]]] ); }\n\nfor (let i = 0; i < 3; i++)\n{ _trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer3, { someValue: [\"$some\", \"$level\", [\"$level\"], [[\"$level\"]]] }); }      \n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].end();\n\n//# sourceURL=webpack:///./examples_es6/example_some_es6.js?");

/***/ }),

/***/ "./examples_es6/example_template_es6.js":
/*!**********************************************!*\
  !*** ./examples_es6/example_template_es6.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wljkowa/json-transformer */ \"./transformer/index.js\");\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _trace_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trace_es6 */ \"./examples_es6/trace_es6.js\");\n/**\n * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>\n * @copyright 2020 © Wolfgang L. J. Kowarschick\n * @license   MIT\n */\n\n// build and run\n//   npm run examples:prod && node examples_es6/examples_bundle_es6.js\n\n//import JsonTransformerTraversal from '@wljkowa/json-transformer/transformer/traversal.js';\n//import JsonTransformerLevel     from '@wljkowa/json-transformer/transformer/string_level.js';\n//import JsonTransformerTemplate  from '@wljkowa/json-transformer/transformer/string_template.js';\n\n\n\n\n \nconst\n  transformer =  \n         new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]({ data:            \n                                        { abc:   123,\n                                          hello: \"Hallo\",\n                                          name:  \"Wolfgang\",\n                                        }\n                                     })\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerLevel\"]())\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTemplate\"]())\n    .root\n  ;\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title('Templates with Placeholders ${name} (es6))');\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${abc}\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${hello}, ${name}!\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${hello}, ${name}! ${HowAreYou}\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [[\"${abc}\"], {abc: \"${abc}\", \"${abc}\": \"abc\"}, \"${name}\"]);\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].end();\n\n\n//# sourceURL=webpack:///./examples_es6/example_template_es6.js?");

/***/ }),

/***/ "./examples_es6/example_template_functions_es6.js":
/*!********************************************************!*\
  !*** ./examples_es6/example_template_functions_es6.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wljkowa/json-transformer */ \"./transformer/index.js\");\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _trace_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trace_es6 */ \"./examples_es6/trace_es6.js\");\n/**\n * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>\n * @copyright 2020 © Wolfgang L. J. Kowarschick\n * @license   MIT\n */\n\n// build and run\n//   npm run examples:prod && node examples_es6/examples_bundle_es6.js\n\n//import JsonTransformerTraversal         from '@wljkowa/json-transformer/transformer/traversal.js';\n//import JsonTransformerLevel             from '@wljkowa/json-transformer/transformer/string_level.js';\n//import JsonTransformerTemplateFunctions from '@wljkowa/json-transformer/transformer/string_template_functions.js';\n\n\n\n\n\n// run: \n //   node examples.cjs/example.string.template.functions.cjs.js\n\nconst\n  transformer =  \n         new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]\n             ({ data:            \n                { abc:   123, \n                  hello: \"Hallo\",\n                  name:  \"Wolfgang\",\n                  fps:    50, \n                  vpf:   ({value, data}) => \n                         [ value.x/data.fps,\n                           value.y/data.fps,\n                         ],\n                  def:   () => 123,\n                }\n             })\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerLevel\"]())\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTemplateFunctions\"]())\n    .root\n  ;\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title('Templates with Placeholders ${name(...)} and Function Calls (csj)');\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${abc}\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${hello}, ${name}!\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${hello}, ${name}! ${HowAreYou}\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [[\"${abc}\"], {abc: \"${abc}\", \"${abc}\": \"abc\"}, \"${name}\"]);\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${vpf({'x':100, 'y':200})}\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"{v: ${vpf({'x':100, 'y':200})}}\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, {v: \"${vpf({'x':100, 'y':200})}\"});\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [{v: \"${vpf({'x':100, 'y':200})}\"}, {a: \"${vpf({'x':200, 'y':400})}\"}]);\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${def()}\");\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].end();\n\n\n//# sourceURL=webpack:///./examples_es6/example_template_functions_es6.js?");

/***/ }),

/***/ "./examples_es6/examples_es6.js":
/*!**************************************!*\
  !*** ./examples_es6/examples_es6.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _example_some_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example_some_es6 */ \"./examples_es6/example_some_es6.js\");\n/* harmony import */ var _example_level_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example_level_es6 */ \"./examples_es6/example_level_es6.js\");\n/* harmony import */ var _example_template_es6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example_template_es6 */ \"./examples_es6/example_template_es6.js\");\n/* harmony import */ var _example_template_functions_es6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example_template_functions_es6 */ \"./examples_es6/example_template_functions_es6.js\");\n/* harmony import */ var _example_memory_es6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example_memory_es6 */ \"./examples_es6/example_memory_es6.js\");\n/**\n * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg_de>\n * @copyright 2020 © Wolfgang L. J. Kowarschick\n * @license   MIT\n */\n\n// build and run\n//   npm run examples:prod && node examples_es6/examples_bundle_es6.js\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./examples_es6/examples_es6.js?");

/***/ }),

/***/ "./examples_es6/trace_es6.js":
/*!***********************************!*\
  !*** ./examples_es6/trace_es6.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>\n * @copyright 2020 © Wolfgang L. J. Kowarschick\n * @license   MIT\n */\n\n\n\nconst inspectConfig = {compact: true, depth: 10, breakLength: 80, colors: true};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ title: \n    function(p_title)\n    { console.log('============================================================================================');\n      console.log(`== ${p_title}`);\n      console.log('============================================================================================');\n      console.group();\n      console.log('------------------------------------------------------------------------------------------');\n    },\n  \n  transform: \n    function(p_transform, p_json, p_data={})\n    { console.log(util__WEBPACK_IMPORTED_MODULE_0___default.a.inspect(p_json, inspectConfig).replace(/'/g,'\"'));\n      console.log(\"→\");\n      console.log(util__WEBPACK_IMPORTED_MODULE_0___default.a.inspect( p_transform.transform({ value: p_json, data: p_data }), \n                                inspectConfig\n                              ).replace(/'/g,'\"'));\n      console.log('------------------------------------------------------------------------------------------');\n    },  \n  \n  end:\n    function()\n    { console.groupEnd(); \n      console.log();\n    }\n});\n\n//# sourceURL=webpack:///./examples_es6/trace_es6.js?");

/***/ }),

/***/ "./transformer/function.js":
/*!*********************************!*\
  !*** ./transformer/function.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerFunction = void 0;\nconst types_1 = __webpack_require__(/*! ./types */ \"./transformer/types.js\");\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerFunction extends transformer_1.JsonTransformer {\n    constructor(_ = {}) {\n        var _a;\n        super(_);\n        this.a_functions = { [types_1.JsonType.Array]: {},\n            [types_1.JsonType.Object]: {},\n            [types_1.JsonType.String]: {},\n        };\n        this.transformerJsonArray = (_) => {\n            if (_.value.length === 0) {\n                return _.value;\n            }\n            const f = this.a_functions[types_1.JsonType.Array][_.value[0]];\n            return f == null ? _.value : f(_);\n        };\n        this.transformerJsonObject = (_) => {\n            var _a;\n            const c_function_name = (_a = _.value[JsonTransformerFunction.functionAttribute]) !== null && _a !== void 0 ? _a : '';\n            if (typeof c_function_name === 'string') {\n                const f = this.a_functions[types_1.JsonType.Object][c_function_name];\n                return f == null ? _.value : f(_);\n            }\n            else {\n                return _.value;\n            }\n        };\n        this.transformerJsonString = (_) => {\n            const f = this.a_functions[types_1.JsonType.String][_.value];\n            return f == null ? _.value : f(_);\n        };\n        if (Array.isArray((_a = _ === null || _ === void 0 ? void 0 : _.init) === null || _a === void 0 ? void 0 : _a.functions)) {\n            for (const c_function of _.init.functions)\n                if (c_function.type != null) {\n                    this.a_functions[c_function.type][c_function.init.function] = c_function;\n                }\n        }\n    }\n}\nexports.JsonTransformerFunction = JsonTransformerFunction;\nJsonTransformerFunction.functionAttribute = '$function';\nexports.default = JsonTransformerFunction;\n//# sourceMappingURL=function.js.map\n\n//# sourceURL=webpack:///./transformer/function.js?");

/***/ }),

/***/ "./transformer/function/array_count.js":
/*!*********************************************!*\
  !*** ./transformer/function/array_count.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionCount = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nfunction JsonFunctionCount({ value }) {\n    if (value.length === 0 || value[0] !== JsonFunctionCount.init.function) {\n        return value;\n    }\n    return value.length - 1;\n}\nexports.JsonFunctionCount = JsonFunctionCount;\nJsonFunctionCount.type = types_1.JsonType.Array;\nJsonFunctionCount.init = { function: \"$count\" };\nexports.default = JsonFunctionCount;\n//# sourceMappingURL=array_count.js.map\n\n//# sourceURL=webpack:///./transformer/function/array_count.js?");

/***/ }),

/***/ "./transformer/function/array_max.js":
/*!*******************************************!*\
  !*** ./transformer/function/array_max.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionMax = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nfunction JsonFunctionMax({ value }) {\n    if (value.length === 0 || value[0] !== JsonFunctionMax.init.function) {\n        return value;\n    }\n    return value.slice(1).reduce((m, v) => Math.max(m, v), -Infinity);\n}\nexports.JsonFunctionMax = JsonFunctionMax;\nJsonFunctionArrayMax.type = types_1.JsonType.Array;\nJsonFunctionArrayMax.init = { function: \"$max\" };\nexports.default = JsonFunctionMax;\n//# sourceMappingURL=array_max.js.map\n\n//# sourceURL=webpack:///./transformer/function/array_max.js?");

/***/ }),

/***/ "./transformer/function/array_min.js":
/*!*******************************************!*\
  !*** ./transformer/function/array_min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionMin = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nfunction JsonFunctionMin({ value }) {\n    if (value.length === 0 || value[0] !== JsonFunctionMin.init.function) {\n        return value;\n    }\n    return value.slice(1).reduce((m, v) => Math.min(m, v), Infinity);\n}\nexports.JsonFunctionMin = JsonFunctionMin;\nJsonFunctionArrayMin.type = types_1.JsonType.Array;\nJsonFunctionArrayMin.init = { function: \"$min\" };\nexports.default = JsonFunctionMin;\n//# sourceMappingURL=array_min.js.map\n\n//# sourceURL=webpack:///./transformer/function/array_min.js?");

/***/ }),

/***/ "./transformer/function/array_shuffle.js":
/*!***********************************************!*\
  !*** ./transformer/function/array_shuffle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionArrayShuffle = exports.shuffle = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nfunction shuffle(value, begin = 0) {\n    const c_value = value.slice(begin);\n    for (let i = c_value.length - 1; i > 0; i--) {\n        const j = Math.floor(Math.random() * (i + 1));\n        if (i !== j) {\n            [c_value[i], c_value[j]] = [c_value[j], c_value[i]];\n        }\n        ;\n    }\n    return c_value;\n}\nexports.shuffle = shuffle;\nfunction JsonFunctionArrayShuffle({ value }) {\n    return (value.length === 0 || value[0] !== JsonFunctionArrayShuffle.init.function)\n        ? value\n        : shuffle(value, 1);\n}\nexports.JsonFunctionArrayShuffle = JsonFunctionArrayShuffle;\nJsonFunctionArrayShuffle.type = types_1.JsonType.Array;\nJsonFunctionArrayShuffle.init = { function: \"$shuffle\" };\nexports.default = JsonFunctionArrayShuffle;\n//# sourceMappingURL=array_shuffle.js.map\n\n//# sourceURL=webpack:///./transformer/function/array_shuffle.js?");

/***/ }),

/***/ "./transformer/function/array_some.js":
/*!********************************************!*\
  !*** ./transformer/function/array_some.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionSome = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nfunction JsonFunctionSome({ value }) {\n    const c_length = value.length;\n    if (c_length === 0 || value[0] !== JsonFunctionSome.init.function) {\n        return value;\n    }\n    return (c_length === 1)\n        ? null\n        : value[Math.floor(Math.random() * (c_length - 1)) + 1];\n}\nexports.JsonFunctionSome = JsonFunctionSome;\nJsonFunctionSome.type = types_1.JsonType.Array;\nJsonFunctionSome.init = { function: \"$some\" };\nexports.default = JsonFunctionSome;\n//# sourceMappingURL=array_some.js.map\n\n//# sourceURL=webpack:///./transformer/function/array_some.js?");

/***/ }),

/***/ "./transformer/function/array_sum.js":
/*!*******************************************!*\
  !*** ./transformer/function/array_sum.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionArraySum = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nfunction JsonFunctionArraySum({ value }) {\n    if (value.length === 0 || value[0] !== JsonFunctionArraySum.init.function) {\n        return value;\n    }\n    return value.slice(1).reduce((s, v) => s + v, 0);\n}\nexports.JsonFunctionArraySum = JsonFunctionArraySum;\nJsonFunctionArraySum.type = types_1.JsonType.Array;\nJsonFunctionArraySum.init = { function: \"$sum\" };\nexports.default = JsonFunctionArraySum;\n//# sourceMappingURL=array_sum.js.map\n\n//# sourceURL=webpack:///./transformer/function/array_sum.js?");

/***/ }),

/***/ "./transformer/function/array_unnest.js":
/*!**********************************************!*\
  !*** ./transformer/function/array_unnest.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionArrayUnnest = exports.unnest = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nfunction unnest(value, begin = 0) {\n    const c_length = value.length, c_result = [];\n    for (let i = begin; i < c_length; i++) {\n        const l_value = value[i];\n        if (Array.isArray(l_value)) {\n            for (let j of l_value) {\n                c_result.push(j);\n            }\n        }\n        else {\n            c_result.push(l_value);\n        }\n    }\n    return c_result;\n}\nexports.unnest = unnest;\nfunction JsonFunctionArrayUnnest({ value }) {\n    return (value.length === 0 || value[0] !== JsonFunctionArrayUnnest.init.function)\n        ? value\n        : unnest(value, 1);\n}\nexports.JsonFunctionArrayUnnest = JsonFunctionArrayUnnest;\nJsonFunctionArrayUnnest.type = types_1.JsonType.Array;\nJsonFunctionArrayUnnest.init = { function: \"$unnest\" };\nexports.default = JsonFunctionArrayUnnest;\n//# sourceMappingURL=array_unnest.js.map\n\n//# sourceURL=webpack:///./transformer/function/array_unnest.js?");

/***/ }),

/***/ "./transformer/function/object_duplicate.js":
/*!**************************************************!*\
  !*** ./transformer/function/object_duplicate.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionObjectDuplicate = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nconst traversal_1 = __webpack_require__(/*! ../traversal */ \"./transformer/traversal.js\");\nconst function_1 = __webpack_require__(/*! ../function */ \"./transformer/function.js\");\nfunction JsonFunctionObjectDuplicate({ value }) {\n    var _a, _b, _c;\n    const c_init = JsonFunctionObjectDuplicate.init;\n    if ((value === null || value === void 0 ? void 0 : value[function_1.JsonTransformerFunction.functionAttribute]) !== c_init.function) {\n        return value;\n    }\n    const c_clone_transformer = new traversal_1.JsonTransformerTraversal(), c_value = (_a = value === null || value === void 0 ? void 0 : value[c_init.valueAttr]) !== null && _a !== void 0 ? _a : null, c_times = ((_b = value === null || value === void 0 ? void 0 : value[c_init.timesAttr]) !== null && _b !== void 0 ? _b : c_init.times), c_within_array = ((_c = value === null || value === void 0 ? void 0 : value[c_init.withinArrayAttr]) !== null && _c !== void 0 ? _c : c_init.withinArray), c_result = [];\n    if (c_within_array && Array.isArray(c_value)) {\n        for (let l_value of c_value) {\n            for (let i = 0; i < c_times; i++) {\n                c_result.push(c_clone_transformer.transform({ value: l_value }));\n            }\n        }\n    }\n    else {\n        for (let i = 0; i < c_times; i++) {\n            c_result.push(c_clone_transformer.transform({ value: c_value }));\n        }\n    }\n    return c_result;\n}\nexports.JsonFunctionObjectDuplicate = JsonFunctionObjectDuplicate;\nJsonFunctionObjectDuplicate.type = types_1.JsonType.Object;\nJsonFunctionObjectDuplicate.init = { function: \"$duplicate\",\n    valueAttr: \"$value\",\n    timesAttr: \"$times\",\n    times: 1,\n    withinArrayAttr: \"$withinArray\",\n    withinArray: false\n};\nexports.default = JsonFunctionObjectDuplicate;\n//# sourceMappingURL=object_duplicate.js.map\n\n//# sourceURL=webpack:///./transformer/function/object_duplicate.js?");

/***/ }),

/***/ "./transformer/function/object_random.js":
/*!***********************************************!*\
  !*** ./transformer/function/object_random.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionObjectRandom = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nconst function_1 = __webpack_require__(/*! ../function */ \"./transformer/function.js\");\nfunction JsonFunctionObjectRandom({ value, data }) {\n    var _a, _b, _c, _d, _e;\n    const c_init = JsonFunctionObjectRandom.init, c_min = ((_a = value === null || value === void 0 ? void 0 : value[c_init.minAttr]) !== null && _a !== void 0 ? _a : c_init.min), c_max = ((_b = value === null || value === void 0 ? void 0 : value[c_init.maxAttr]) !== null && _b !== void 0 ? _b : c_init.max);\n    if ((value === null || value === void 0 ? void 0 : value[function_1.JsonTransformerFunction.functionAttribute]) !== c_init.function\n        || !Number.isFinite(c_min)\n        || !Number.isFinite(c_max)) {\n        return value;\n    }\n    const c_is_integer = (_c = value === null || value === void 0 ? void 0 : value[c_init.isIntegerAttr]) !== null && _c !== void 0 ? _c : c_init.isInteger, c_gzp = (_d = value === null || value === void 0 ? void 0 : value[c_init.gzpAttr]) !== null && _d !== void 0 ? _d : c_init.gzp, c_scale = data[(_e = value === null || value === void 0 ? void 0 : value[c_init.scaleAttr]) !== null && _e !== void 0 ? _e : c_init.scale], c_random = Math.random();\n    let l_result;\n    if (c_is_integer) {\n        l_result = Math.floor(c_min + c_random * (c_max + 1 - c_min));\n    }\n    else {\n        l_result = c_min + c_random * (c_max - c_min);\n    }\n    if (Number.isFinite(c_gzp) && 0 <= c_gzp && c_gzp < 1) {\n        l_result *= (Math.random() >= c_gzp) ? 1 : -1;\n    }\n    return Number.isFinite(c_scale) ? l_result * c_scale : l_result;\n}\nexports.JsonFunctionObjectRandom = JsonFunctionObjectRandom;\nJsonFunctionObjectRandom.type = types_1.JsonType.Object;\nJsonFunctionObjectRandom.init = { function: \"$random\",\n    minAttr: \"$min\",\n    min: 0,\n    maxAttr: \"$max\",\n    max: 1,\n    isIntegerAttr: \"$isInteger\",\n    isInteger: false,\n    scaleAttr: \"$scale\",\n    scale: null,\n    gzpAttr: \"$gzp\",\n    gzp: 1,\n};\nexports.default = JsonFunctionObjectRandom;\n//# sourceMappingURL=object_random.js.map\n\n//# sourceURL=webpack:///./transformer/function/object_random.js?");

/***/ }),

/***/ "./transformer/function/object_sequence.js":
/*!*************************************************!*\
  !*** ./transformer/function/object_sequence.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionObjectSequence = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nconst function_1 = __webpack_require__(/*! ../function */ \"./transformer/function.js\");\nfunction JsonFunctionObjectSequence({ value, data }) {\n    var _a, _b, _c;\n    const c_init = JsonFunctionObjectSequence.init;\n    if ((value === null || value === void 0 ? void 0 : value[function_1.JsonTransformerFunction.functionAttribute]) !== c_init.function) {\n        return value;\n    }\n    const c_min = ((_a = value === null || value === void 0 ? void 0 : value[c_init.minAttr]) !== null && _a !== void 0 ? _a : c_init.min), c_max = ((_b = value === null || value === void 0 ? void 0 : value[c_init.maxAttr]) !== null && _b !== void 0 ? _b : c_init.max), c_format = ((_c = value === null || value === void 0 ? void 0 : value[c_init.formatAttr]) !== null && _c !== void 0 ? _c : c_init.format), c_format_string = (typeof c_format === 'string') ? c_format : '', c_format_function = (typeof c_format === 'function') ? c_format : null, c_result = [];\n    for (let i = c_min; i <= c_max; i++) {\n        c_result.push(typeof c_format_function === 'function'\n            ? c_format_function(i)\n            : (c_format_string !== '')\n                ? c_format_string + i\n                : i);\n    }\n    return c_result;\n}\nexports.JsonFunctionObjectSequence = JsonFunctionObjectSequence;\nJsonFunctionObjectSequence.type = types_1.JsonType.Object;\nJsonFunctionObjectSequence.init = { function: \"$sequence\",\n    minAttr: \"$min\",\n    min: 1,\n    maxAttr: \"$max\",\n    max: 1,\n    formatAttr: \"$format\",\n    format: null\n};\nexports.default = JsonFunctionObjectSequence;\n//# sourceMappingURL=object_sequence.js.map\n\n//# sourceURL=webpack:///./transformer/function/object_sequence.js?");

/***/ }),

/***/ "./transformer/function/object_shuffle.js":
/*!************************************************!*\
  !*** ./transformer/function/object_shuffle.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionObjectShuffle = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nconst function_1 = __webpack_require__(/*! ../function */ \"./transformer/function.js\");\nconst array_shuffle_1 = __webpack_require__(/*! ./array_shuffle */ \"./transformer/function/array_shuffle.js\");\nfunction JsonFunctionObjectShuffle({ value }) {\n    var _a;\n    const c_init = JsonFunctionObjectShuffle.init, c_value = (_a = value === null || value === void 0 ? void 0 : value[c_init.valueAttr]) !== null && _a !== void 0 ? _a : null;\n    return ((value === null || value === void 0 ? void 0 : value[function_1.JsonTransformerFunction.functionAttribute]) !== c_init.function\n        || !Array.isArray(c_value))\n        ? value\n        : array_shuffle_1.shuffle(c_value);\n}\nexports.JsonFunctionObjectShuffle = JsonFunctionObjectShuffle;\nJsonFunctionObjectShuffle.type = types_1.JsonType.Object;\nJsonFunctionObjectShuffle.init = { function: \"$shuffle\",\n    valueAttr: \"$value\"\n};\nexports.default = JsonFunctionObjectShuffle;\n//# sourceMappingURL=object_shuffle.js.map\n\n//# sourceURL=webpack:///./transformer/function/object_shuffle.js?");

/***/ }),

/***/ "./transformer/function/object_unnest.js":
/*!***********************************************!*\
  !*** ./transformer/function/object_unnest.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionObjectUnnest = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nconst function_1 = __webpack_require__(/*! ../function */ \"./transformer/function.js\");\nconst array_unnest_1 = __webpack_require__(/*! ./array_unnest */ \"./transformer/function/array_unnest.js\");\nfunction JsonFunctionObjectUnnest({ value }) {\n    const c_init = JsonFunctionObjectUnnest.init, c_value = value === null || value === void 0 ? void 0 : value[c_init.valueAttr];\n    return ((value === null || value === void 0 ? void 0 : value[function_1.JsonTransformerFunction.functionAttribute]) !== c_init.function\n        || !Array.isArray(c_value))\n        ? value\n        : array_unnest_1.unnest(c_value);\n}\nexports.JsonFunctionObjectUnnest = JsonFunctionObjectUnnest;\nJsonFunctionObjectUnnest.type = types_1.JsonType.Object;\nJsonFunctionObjectUnnest.init = { function: \"$unnest\",\n    valueAttr: \"$value\"\n};\nexports.default = JsonFunctionObjectUnnest;\n//# sourceMappingURL=object_unnest.js.map\n\n//# sourceURL=webpack:///./transformer/function/object_unnest.js?");

/***/ }),

/***/ "./transformer/function/string_level.js":
/*!**********************************************!*\
  !*** ./transformer/function/string_level.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionStringLevel = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nfunction JsonFunctionStringLevel({ value, level }) { return (value === JsonFunctionStringLevel.init.function) ? level : value; }\nexports.JsonFunctionStringLevel = JsonFunctionStringLevel;\nJsonFunctionStringLevel.type = types_1.JsonType.String;\nJsonFunctionStringLevel.init = { function: \"$level\" };\nexports.default = JsonFunctionStringLevel;\n//# sourceMappingURL=string_level.js.map\n\n//# sourceURL=webpack:///./transformer/function/string_level.js?");

/***/ }),

/***/ "./transformer/index.js":
/*!******************************!*\
  !*** ./transformer/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar types_1 = __webpack_require__(/*! ./types */ \"./transformer/types.js\");\nObject.defineProperty(exports, \"JsonType\", { enumerable: true, get: function () { return types_1.JsonType; } });\nvar transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nObject.defineProperty(exports, \"JsonTransformer\", { enumerable: true, get: function () { return transformer_1.JsonTransformer; } });\nvar function_1 = __webpack_require__(/*! ./function */ \"./transformer/function.js\");\nObject.defineProperty(exports, \"JsonTransformerFunction\", { enumerable: true, get: function () { return function_1.JsonTransformerFunction; } });\nvar traversal_1 = __webpack_require__(/*! ./traversal */ \"./transformer/traversal.js\");\nObject.defineProperty(exports, \"JsonTransformerTraversal\", { enumerable: true, get: function () { return traversal_1.JsonTransformerTraversal; } });\nvar traversal_breadth_first_1 = __webpack_require__(/*! ./traversal_breadth_first */ \"./transformer/traversal_breadth_first.js\");\nObject.defineProperty(exports, \"JsonTransformerTraversalBreadthFirst\", { enumerable: true, get: function () { return traversal_breadth_first_1.JsonTransformerTraversalBreadthFirst; } });\nvar traversal_restricted_1 = __webpack_require__(/*! ./traversal_restricted */ \"./transformer/traversal_restricted.js\");\nObject.defineProperty(exports, \"JsonTransformerTraversalRestricted\", { enumerable: true, get: function () { return traversal_restricted_1.JsonTransformerTraversalRestricted; } });\nvar null_1 = __webpack_require__(/*! ./null */ \"./transformer/null.js\");\nObject.defineProperty(exports, \"JsonTransformerNull\", { enumerable: true, get: function () { return null_1.JsonTransformerNull; } });\nvar some_1 = __webpack_require__(/*! ./some */ \"./transformer/some.js\");\nObject.defineProperty(exports, \"JsonTransformerSome\", { enumerable: true, get: function () { return some_1.JsonTransformerSome; } });\nvar random_1 = __webpack_require__(/*! ./random */ \"./transformer/random.js\");\nObject.defineProperty(exports, \"JsonTransformerRandom\", { enumerable: true, get: function () { return random_1.JsonTransformerRandom; } });\nvar level_1 = __webpack_require__(/*! ./level */ \"./transformer/level.js\");\nObject.defineProperty(exports, \"JsonTransformerLevel\", { enumerable: true, get: function () { return level_1.JsonTransformerLevel; } });\nvar string_replace_1 = __webpack_require__(/*! ./string_replace */ \"./transformer/string_replace.js\");\nObject.defineProperty(exports, \"JsonTransformerStringReplace\", { enumerable: true, get: function () { return string_replace_1.JsonTransformerStringReplace; } });\nvar template_1 = __webpack_require__(/*! ./template */ \"./transformer/template.js\");\nObject.defineProperty(exports, \"JsonTransformerTemplate\", { enumerable: true, get: function () { return template_1.JsonTransformerTemplate; } });\nvar template_functions_1 = __webpack_require__(/*! ./template_functions */ \"./transformer/template_functions.js\");\nObject.defineProperty(exports, \"JsonTransformerTemplateFunctions\", { enumerable: true, get: function () { return template_functions_1.JsonTransformerTemplateFunctions; } });\nvar array_count_1 = __webpack_require__(/*! ./function/array_count */ \"./transformer/function/array_count.js\");\nObject.defineProperty(exports, \"JsonFunctionCount\", { enumerable: true, get: function () { return array_count_1.JsonFunctionCount; } });\nvar array_min_1 = __webpack_require__(/*! ./function/array_min */ \"./transformer/function/array_min.js\");\nObject.defineProperty(exports, \"JsonFunctionMin\", { enumerable: true, get: function () { return array_min_1.JsonFunctionMin; } });\nvar array_max_1 = __webpack_require__(/*! ./function/array_max */ \"./transformer/function/array_max.js\");\nObject.defineProperty(exports, \"JsonFunctionMax\", { enumerable: true, get: function () { return array_max_1.JsonFunctionMax; } });\nvar array_shuffle_1 = __webpack_require__(/*! ./function/array_shuffle */ \"./transformer/function/array_shuffle.js\");\nObject.defineProperty(exports, \"JsonFunctionArrayShuffle\", { enumerable: true, get: function () { return array_shuffle_1.JsonFunctionArrayShuffle; } });\nvar array_some_1 = __webpack_require__(/*! ./function/array_some */ \"./transformer/function/array_some.js\");\nObject.defineProperty(exports, \"JsonFunctionSome\", { enumerable: true, get: function () { return array_some_1.JsonFunctionSome; } });\nvar array_sum_1 = __webpack_require__(/*! ./function/array_sum */ \"./transformer/function/array_sum.js\");\nObject.defineProperty(exports, \"JsonFunctionArraySum\", { enumerable: true, get: function () { return array_sum_1.JsonFunctionArraySum; } });\nvar array_unnest_1 = __webpack_require__(/*! ./function/array_unnest */ \"./transformer/function/array_unnest.js\");\nObject.defineProperty(exports, \"JsonFunctionArrayUnnest\", { enumerable: true, get: function () { return array_unnest_1.JsonFunctionArrayUnnest; } });\nvar object_duplicate_1 = __webpack_require__(/*! ./function/object_duplicate */ \"./transformer/function/object_duplicate.js\");\nObject.defineProperty(exports, \"JsonFunctionObjectDuplicate\", { enumerable: true, get: function () { return object_duplicate_1.JsonFunctionObjectDuplicate; } });\nvar object_random_1 = __webpack_require__(/*! ./function/object_random */ \"./transformer/function/object_random.js\");\nObject.defineProperty(exports, \"JsonFunctionObjectRandom\", { enumerable: true, get: function () { return object_random_1.JsonFunctionObjectRandom; } });\nvar object_sequence_1 = __webpack_require__(/*! ./function/object_sequence */ \"./transformer/function/object_sequence.js\");\nObject.defineProperty(exports, \"JsonFunctionObjectSequence\", { enumerable: true, get: function () { return object_sequence_1.JsonFunctionObjectSequence; } });\nvar object_shuffle_1 = __webpack_require__(/*! ./function/object_shuffle */ \"./transformer/function/object_shuffle.js\");\nObject.defineProperty(exports, \"JsonFunctionObjectShuffle\", { enumerable: true, get: function () { return object_shuffle_1.JsonFunctionObjectShuffle; } });\nvar object_unnest_1 = __webpack_require__(/*! ./function/object_unnest */ \"./transformer/function/object_unnest.js\");\nObject.defineProperty(exports, \"JsonFunctionObjectUnnest\", { enumerable: true, get: function () { return object_unnest_1.JsonFunctionObjectUnnest; } });\nvar string_level_1 = __webpack_require__(/*! ./function/string_level */ \"./transformer/function/string_level.js\");\nObject.defineProperty(exports, \"JsonFunctionStringLevel\", { enumerable: true, get: function () { return string_level_1.JsonFunctionStringLevel; } });\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./transformer/index.js?");

/***/ }),

/***/ "./transformer/level.js":
/*!******************************!*\
  !*** ./transformer/level.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerLevel = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerLevel extends transformer_1.JsonTransformer {\n    constructor(_ = {}) {\n        var _a;\n        super(Object.assign(Object.assign({}, _), { init: (_a = _ === null || _ === void 0 ? void 0 : _.init) !== null && _a !== void 0 ? _a : '$level' }));\n        this.transformerJsonString = ({ value, level }) => { return (value === this.init) ? level : value; };\n    }\n}\nexports.JsonTransformerLevel = JsonTransformerLevel;\nexports.default = JsonTransformerLevel;\n//# sourceMappingURL=level.js.map\n\n//# sourceURL=webpack:///./transformer/level.js?");

/***/ }),

/***/ "./transformer/null.js":
/*!*****************************!*\
  !*** ./transformer/null.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerNull = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerNull extends transformer_1.JsonTransformer {\n    constructor(_ = {}) {\n        super(_);\n        this.transformerJsonNull = ({ value, level }) => { return null; };\n    }\n}\nexports.JsonTransformerNull = JsonTransformerNull;\nexports.default = JsonTransformerNull;\n//# sourceMappingURL=null.js.map\n\n//# sourceURL=webpack:///./transformer/null.js?");

/***/ }),

/***/ "./transformer/random.js":
/*!*******************************!*\
  !*** ./transformer/random.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerRandom = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerRandom extends transformer_1.JsonTransformer {\n    constructor(_ = {}) {\n        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;\n        super(Object.assign(Object.assign({}, _), { init: { functionAttr: (_b = (_a = _ === null || _ === void 0 ? void 0 : _.init) === null || _a === void 0 ? void 0 : _a.functionAttr) !== null && _b !== void 0 ? _b : \"$function\",\n                function: (_d = (_c = _ === null || _ === void 0 ? void 0 : _.init) === null || _c === void 0 ? void 0 : _c.function) !== null && _d !== void 0 ? _d : \"$random\",\n                minAttr: (_f = (_e = _ === null || _ === void 0 ? void 0 : _.init) === null || _e === void 0 ? void 0 : _e.minAttr) !== null && _f !== void 0 ? _f : \"$min\",\n                min: (_h = (_g = _ === null || _ === void 0 ? void 0 : _.init) === null || _g === void 0 ? void 0 : _g.min) !== null && _h !== void 0 ? _h : 0,\n                maxAttr: (_k = (_j = _ === null || _ === void 0 ? void 0 : _.init) === null || _j === void 0 ? void 0 : _j.maxAttr) !== null && _k !== void 0 ? _k : \"$max\",\n                max: (_m = (_l = _ === null || _ === void 0 ? void 0 : _.init) === null || _l === void 0 ? void 0 : _l.max) !== null && _m !== void 0 ? _m : 1,\n                isIntegerAttr: (_p = (_o = _ === null || _ === void 0 ? void 0 : _.init) === null || _o === void 0 ? void 0 : _o.isIntegerAttr) !== null && _p !== void 0 ? _p : \"$isInteger\",\n                isInteger: (_r = (_q = _ === null || _ === void 0 ? void 0 : _.init) === null || _q === void 0 ? void 0 : _q.isInteger) !== null && _r !== void 0 ? _r : false,\n                scaleAttr: (_t = (_s = _ === null || _ === void 0 ? void 0 : _.init) === null || _s === void 0 ? void 0 : _s.scale) !== null && _t !== void 0 ? _t : \"$scale\",\n                scale: (_v = (_u = _ === null || _ === void 0 ? void 0 : _.init) === null || _u === void 0 ? void 0 : _u.scale) !== null && _v !== void 0 ? _v : null,\n                gzpAttr: (_x = (_w = _ === null || _ === void 0 ? void 0 : _.init) === null || _w === void 0 ? void 0 : _w.gzp) !== null && _x !== void 0 ? _x : \"$gzp\",\n                gzp: (_z = (_y = _ === null || _ === void 0 ? void 0 : _.init) === null || _y === void 0 ? void 0 : _y.gzp) !== null && _z !== void 0 ? _z : 1,\n            } }));\n        this.transformerJsonObject = ({ value, data }) => {\n            var _a, _b, _c, _d, _e;\n            const c_init = this.init, c_min = (_a = value === null || value === void 0 ? void 0 : value[c_init.minAttr]) !== null && _a !== void 0 ? _a : c_init.min, c_max = (_b = value === null || value === void 0 ? void 0 : value[c_init.maxAttr]) !== null && _b !== void 0 ? _b : c_init.max;\n            if ((value === null || value === void 0 ? void 0 : value[c_init.functionAttr]) !== c_init.function\n                || !Number.isFinite(c_min)\n                || !Number.isFinite(c_max)) {\n                return value;\n            }\n            const c_is_integer = (_c = value === null || value === void 0 ? void 0 : value[c_init.isIntegerAttr]) !== null && _c !== void 0 ? _c : c_init.isInteger, c_gzp = (_d = value === null || value === void 0 ? void 0 : value[c_init.gzpAttr]) !== null && _d !== void 0 ? _d : c_init.gzp, c_scale = data[(_e = value === null || value === void 0 ? void 0 : value[c_init.scaleAttr]) !== null && _e !== void 0 ? _e : c_init.scale], c_random = Math.random();\n            let l_result;\n            if (c_is_integer) {\n                l_result = Math.floor(c_min + c_random * (c_max + 1 - c_min));\n            }\n            else {\n                l_result = c_min + c_random * (c_max - c_min);\n            }\n            if (Number.isFinite(c_gzp) && 0 <= c_gzp && c_gzp < 1) {\n                l_result *= (Math.random() >= c_gzp) ? 1 : -1;\n            }\n            return Number.isFinite(c_scale) ? l_result * c_scale : l_result;\n        };\n    }\n}\nexports.JsonTransformerRandom = JsonTransformerRandom;\nexports.default = JsonTransformerRandom;\n//# sourceMappingURL=random.js.map\n\n//# sourceURL=webpack:///./transformer/random.js?");

/***/ }),

/***/ "./transformer/some.js":
/*!*****************************!*\
  !*** ./transformer/some.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerSome = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerSome extends transformer_1.JsonTransformer {\n    constructor(_ = {}) {\n        var _a;\n        super(Object.assign(Object.assign({}, _), { init: (_a = _ === null || _ === void 0 ? void 0 : _.init) !== null && _a !== void 0 ? _a : '$some' }));\n        this.transformerJsonArray = ({ value }) => {\n            const c_length = value.length;\n            if (c_length === 0 || value[0] !== this.init) {\n                return value;\n            }\n            return (c_length === 1)\n                ? null\n                : value[Math.floor(Math.random() * (c_length - 1)) + 1];\n        };\n    }\n}\nexports.JsonTransformerSome = JsonTransformerSome;\nexports.default = JsonTransformerSome;\n//# sourceMappingURL=some.js.map\n\n//# sourceURL=webpack:///./transformer/some.js?");

/***/ }),

/***/ "./transformer/string_replace.js":
/*!***************************************!*\
  !*** ./transformer/string_replace.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerStringReplace = exports.JsonFunctionStringReplace = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nfunction JsonFunctionStringReplace({ value, data }) {\n    const c_value = data[value];\n    return c_value != null ? c_value : value;\n}\nexports.JsonFunctionStringReplace = JsonFunctionStringReplace;\nclass JsonTransformerStringReplace extends transformer_1.JsonTransformer {\n    constructor(_ = {}) {\n        super(_);\n        this.transformerJsonString = ({ value, data }) => {\n            const c_value = data[value];\n            return c_value != null ? c_value : value;\n        };\n    }\n}\nexports.JsonTransformerStringReplace = JsonTransformerStringReplace;\nexports.default = JsonTransformerStringReplace;\n//# sourceMappingURL=string_replace.js.map\n\n//# sourceURL=webpack:///./transformer/string_replace.js?");

/***/ }),

/***/ "./transformer/template.js":
/*!*********************************!*\
  !*** ./transformer/template.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerTemplate = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerTemplate extends transformer_1.JsonTransformer {\n    constructor(_ = {}) {\n        var _a;\n        super(Object.assign(Object.assign({}, _), { init: (_a = _ === null || _ === void 0 ? void 0 : _.init) !== null && _a !== void 0 ? _a : /\\${([\\w\\d@_-]+)}/ }));\n        this.transformerJsonString = ({ value, data }) => {\n            const c_regexp = new RegExp(this.init, 'g'), c_value = value, c_match = c_value.match(new RegExp(`^${this.init.toString().slice(1, -1)}$`)), f_replace_placeholders = (p_value) => {\n                const c_placeholders = p_value.matchAll(c_regexp), c_replacers = [];\n                let l_result = c_placeholders.next();\n                if (l_result.done) {\n                    return p_value;\n                }\n                while (!l_result.done) {\n                    const c_match = l_result.value, c_data = data[c_match[1]], c_data_string = typeof c_data === 'string' ? c_data : JSON.stringify(c_data);\n                    if (c_data != null) {\n                        c_replacers.push([c_match[0], f_replace_placeholders(c_data_string)]);\n                    }\n                    l_result = c_placeholders.next();\n                }\n                for (const r of c_replacers) {\n                    p_value = p_value.replace(r[0], r[1]);\n                }\n                return p_value;\n            };\n            return c_match != null\n                ? data[c_match[1]]\n                : f_replace_placeholders(c_value);\n        };\n    }\n}\nexports.JsonTransformerTemplate = JsonTransformerTemplate;\nexports.default = JsonTransformerTemplate;\n//# sourceMappingURL=template.js.map\n\n//# sourceURL=webpack:///./transformer/template.js?");

/***/ }),

/***/ "./transformer/template_functions.js":
/*!*******************************************!*\
  !*** ./transformer/template_functions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerTemplateFunctions = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerTemplateFunctions extends transformer_1.JsonTransformer {\n    constructor(_ = {}) {\n        var _a;\n        super(Object.assign(Object.assign({}, _), { init: (_a = _ === null || _ === void 0 ? void 0 : _.init) !== null && _a !== void 0 ? _a : /\\${([\\w\\d@_-]+)(}|\\([\\s\\w\\d@_,:'\"<>{}\\[\\]-]*\\)})/ }));\n        this.transformerJsonString = ({ value, data }) => {\n            const c_regexp = new RegExp(this.init, 'g'), c_value = value, c_match = c_value.match(new RegExp(`^${this.init.toString().slice(1, -1)}$`)), f_split_placeholder = (p_name, p_arguments) => {\n                var _a;\n                const c_name = p_name == null ? null : data[p_name], c_arguments = (_a = p_arguments === null || p_arguments === void 0 ? void 0 : p_arguments.slice(1, -2).replace(/'/g, '\"')) !== null && _a !== void 0 ? _a : '';\n                let l_json_value;\n                if (p_arguments.length > 1) {\n                    try {\n                        l_json_value = JSON.parse(c_arguments);\n                    }\n                    catch (e) {\n                        l_json_value = e.message;\n                    }\n                    return [c_name, l_json_value];\n                }\n                else {\n                    return [c_name, null];\n                }\n            }, f_replace_placeholders = (p_value, p_string_cast) => {\n                var _a;\n                const c_placeholders = p_value.matchAll(c_regexp), c_replacers = [];\n                let l_result = c_placeholders.next();\n                if (l_result.done) {\n                    return p_value;\n                }\n                while (!l_result.done) {\n                    const c_match = l_result.value, [c_data, c_json_value] = f_split_placeholder(c_match[1], c_match[2]);\n                    if (c_data != null) {\n                        let l_data;\n                        if (typeof c_data === 'function') {\n                            const c_data_computed = c_data({ value: c_json_value, data, level: this.level });\n                            l_data = (!p_string_cast || typeof c_data_computed === 'string')\n                                ? c_data_computed\n                                : JSON.stringify(c_data_computed);\n                        }\n                        else {\n                            l_data = (c_json_value != null)\n                                ? c_match[0]\n                                : (p_string_cast ? ((_a = c_data) !== null && _a !== void 0 ? _a : '') : c_data);\n                        }\n                        c_replacers.push([c_match[0], l_data]);\n                    }\n                    l_result = c_placeholders.next();\n                }\n                if (p_string_cast) {\n                    for (const r of c_replacers) {\n                        p_value = p_value.replace(r[0], r[1]);\n                    }\n                    return p_value;\n                }\n                return c_replacers[0][1];\n            };\n            return f_replace_placeholders(c_value, c_match == null || c_match.length == 1);\n        };\n    }\n}\nexports.JsonTransformerTemplateFunctions = JsonTransformerTemplateFunctions;\nexports.default = JsonTransformerTemplateFunctions;\n//# sourceMappingURL=template_functions.js.map\n\n//# sourceURL=webpack:///./transformer/template_functions.js?");

/***/ }),

/***/ "./transformer/transformer.js":
/*!************************************!*\
  !*** ./transformer/transformer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformer = void 0;\n;\n;\nclass JsonTransformer {\n    constructor({ init = undefined, data = {}, level = 0, } = {}) {\n        this._pipe_transformers = [];\n        Object.assign(this, { init, data, level });\n        this._root = this;\n    }\n    get root() { return this._root; }\n    ;\n    transformerPipe(_) {\n        let l_value = _.value;\n        for (const t of this._pipe_transformers) {\n            l_value = t.transform({ value: l_value, data: _.data, level: _.level });\n        }\n        ;\n        return l_value;\n    }\n    transform({ value, data = {}, level = 0 }) {\n        const c_data = Object.assign({}, data);\n        Object.setPrototypeOf(c_data, this.data);\n        let l_value = value;\n        for (const [c_key, c_test] of Object.entries(c_transformer_tests)) {\n            const c_transformer = this[c_key];\n            if (c_transformer != null && c_test(l_value)) {\n                l_value = c_transformer({ value: value, data: c_data, level });\n            }\n        }\n        l_value = this.transformerPipe({ value: l_value, data: c_data, level });\n        return l_value;\n    }\n    pipe(...transformers) {\n        if (transformers.length === 0) {\n            this._pipe_transformers = [];\n            return this;\n        }\n        for (const t of transformers) {\n            Object.setPrototypeOf(t.data, this.data);\n            t._root = this._root;\n        }\n        this._pipe_transformers = transformers;\n        return transformers[0];\n    }\n    static isJsonPrimitive(value) {\n        const t = typeof value;\n        return t == null || t === 'string' || t === 'number' || t === 'boolean';\n    }\n    static isJsonArray(value) { return Array.isArray(value); }\n    static isJsonObject(value) { return value != null && typeof value === 'object' && !Array.isArray(value); }\n    static isJsonString(value) { return typeof value === 'string'; }\n    static isJsonNumber(value) { return typeof value === 'number'; }\n    static isJsonBoolean(value) { return typeof value === 'boolean'; }\n    static isJsonNull(value) { return value == null; }\n}\nexports.JsonTransformer = JsonTransformer;\nconst c_transformer_tests = { transformerJsonPrimitive: JsonTransformer.isJsonPrimitive,\n    transformerJsonArray: JsonTransformer.isJsonArray,\n    transformerJsonObject: JsonTransformer.isJsonObject,\n    transformerJsonString: JsonTransformer.isJsonString,\n    transformerJsonNumber: JsonTransformer.isJsonNumber,\n    transformerJsonBoolean: JsonTransformer.isJsonBoolean,\n    transformerJsonNull: JsonTransformer.isJsonNull,\n};\nexports.default = JsonTransformer;\n//# sourceMappingURL=transformer.js.map\n\n//# sourceURL=webpack:///./transformer/transformer.js?");

/***/ }),

/***/ "./transformer/traversal.js":
/*!**********************************!*\
  !*** ./transformer/traversal.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerTraversal = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerTraversal extends transformer_1.JsonTransformer {\n    constructor(options = {}) {\n        super(options);\n        this.transformerJsonPrimitive = ({ value }) => value;\n        this.transformerJsonArray = ({ value, data, level }) => {\n            const c_level = level + 1, c_result = [];\n            for (const c_json_value of value) {\n                c_result.push(this.transform({ value: c_json_value, data, level: c_level }));\n            }\n            return c_result;\n        };\n        this.transformerJsonObject = ({ value, data, level }) => {\n            const c_level = level + 1, c_result = {};\n            for (const [c_key, c_value] of Object.entries(value)) {\n                c_result[this.transform({ value: c_key, data, level: c_level })]\n                    = this.transform({ value: c_value, data, level: c_level });\n            }\n            return c_result;\n        };\n    }\n}\nexports.JsonTransformerTraversal = JsonTransformerTraversal;\nexports.default = JsonTransformerTraversal;\n//# sourceMappingURL=traversal.js.map\n\n//# sourceURL=webpack:///./transformer/traversal.js?");

/***/ }),

/***/ "./transformer/traversal_breadth_first.js":
/*!************************************************!*\
  !*** ./transformer/traversal_breadth_first.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerTraversalBreadthFirst = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerTraversalBreadthFirst extends transformer_1.JsonTransformer {\n    constructor(options = {}) {\n        super(options);\n        this.transformerJsonPrimitive = ({ value }) => value;\n        this.transformerJsonArray = ({ value, data, level }) => {\n            const c_level = level + 1;\n            let l_result = [];\n            for (const c_json_result of value) {\n                l_result.push(this.transform({ value: c_json_result, data, level: c_level }));\n            }\n            return super.transformerPipe({ value: l_result, data, level: c_level });\n        };\n        this.transformerJsonObject = ({ value, data, level }) => {\n            const c_level = level + 1;\n            let l_result = {};\n            for (const [c_key, c_result] of Object.entries(value)) {\n                l_result[this.transform({ value: c_key, data, level: c_level })]\n                    = this.transform({ value: c_result, data, level: c_level });\n            }\n            return super.transformerPipe({ value: l_result, data, level: c_level });\n        };\n    }\n    transformerPipe({ value }) { return value; }\n}\nexports.JsonTransformerTraversalBreadthFirst = JsonTransformerTraversalBreadthFirst;\nexports.default = JsonTransformerTraversalBreadthFirst;\n//# sourceMappingURL=traversal_breadth_first.js.map\n\n//# sourceURL=webpack:///./transformer/traversal_breadth_first.js?");

/***/ }),

/***/ "./transformer/traversal_restricted.js":
/*!*********************************************!*\
  !*** ./transformer/traversal_restricted.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerTraversalRestricted = void 0;\nconst traversal_1 = __webpack_require__(/*! ./traversal */ \"./transformer/traversal.js\");\nclass JsonTransformerTraversalRestricted extends traversal_1.JsonTransformerTraversal {\n    constructor(_ = {}) {\n        var _a, _b, _c, _d;\n        super(Object.assign(Object.assign({}, _), { init: { minLevel: (_b = (_a = _ === null || _ === void 0 ? void 0 : _.init) === null || _a === void 0 ? void 0 : _a.minLevel) !== null && _b !== void 0 ? _b : 0,\n                maxLevel: (_d = (_c = _ === null || _ === void 0 ? void 0 : _.init) === null || _c === void 0 ? void 0 : _c.maxLevel) !== null && _d !== void 0 ? _d : Infinity,\n            } }));\n    }\n    transformerPipe(_) {\n        return (this.init.minLevel <= _.level && _.level <= this.init.maxLevel)\n            ? super.transformerPipe(_)\n            : _.value;\n    }\n}\nexports.JsonTransformerTraversalRestricted = JsonTransformerTraversalRestricted;\nexports.default = JsonTransformerTraversalRestricted;\n//# sourceMappingURL=traversal_restricted.js.map\n\n//# sourceURL=webpack:///./transformer/traversal_restricted.js?");

/***/ }),

/***/ "./transformer/types.js":
/*!******************************!*\
  !*** ./transformer/types.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonType = void 0;\nvar JsonType;\n(function (JsonType) {\n    JsonType[JsonType[\"Primitive\"] = 1] = \"Primitive\";\n    JsonType[JsonType[\"Array\"] = 2] = \"Array\";\n    JsonType[JsonType[\"Object\"] = 3] = \"Object\";\n    JsonType[JsonType[\"String\"] = 4] = \"String\";\n    JsonType[JsonType[\"Number\"] = 5] = \"Number\";\n    JsonType[JsonType[\"Boolean\"] = 6] = \"Boolean\";\n    JsonType[JsonType[\"Null\"] = 7] = \"Null\";\n})(JsonType = exports.JsonType || (exports.JsonType = {}));\n;\n//# sourceMappingURL=types.js.map\n\n//# sourceURL=webpack:///./transformer/types.js?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./examples_es6/examples_es6.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /data/web/wljkowa-json-transform/examples_es6/examples_es6.js */\"./examples_es6/examples_es6.js\");\n\n\n//# sourceURL=webpack:///multi_./examples_es6/examples_es6.js?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ })

/******/ });