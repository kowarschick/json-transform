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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wljkowa/json-transformer */ \"./transformer/index.js\");\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _trace_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trace_es6 */ \"./examples_es6/trace_es6.js\");\n/**\n * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>\n * @copyright 2020 © Wolfgang L. J. Kowarschick\n * @license   MIT\n */\n\n// build and run\n//   npm run examples:prod && node examples_es6/examples_bundle_es6.js\n\n//import JsonTransformerTraversal from '@wljkowa/json-transformer/transformer/traversal.js';\n//import JsonTransformerLevel     from '@wljkowa/json-transformer/transformer/level.js';\n\n\n\n\n\nconst \n  transformer =  \n         new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]()\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerLevel\"]())\n  ;\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title('$level (es6)');\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"$level\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [\"$level\", {\"level\": \"$level\"}, [\"$level\", [\"$level\"]]]);\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [\"$level\", {\"level\": \"$level\"}, [\"$level\", [\"$level\", [\"$level\", {\"level\": \"$level\"}, [\"$level\", [\"$level\"]]]]]]);\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].end();\n\n\n//# sourceURL=webpack:///./examples_es6/example_level_es6.js?");

/***/ }),

/***/ "./examples_es6/example_memory_es6.js":
/*!********************************************!*\
  !*** ./examples_es6/example_memory_es6.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wljkowa/json-transformer */ \"./transformer/index.js\");\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _trace_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trace_es6 */ \"./examples_es6/trace_es6.js\");\n/**\n * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>\n * @copyright 2020 © Wolfgang L. J. Kowarschick\n * @license   MIT\n */\n\n// build and run\n//   npm run examples:prod && node examples_es6/examples_bundle_es6.js\n\n\n\n\n\n\n\n\n\n\n\n\nconst \n  transformer =  \n          new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]\n              ({ data: { \"@noOfPairs\": 10,\n                         \"@image\":     i => 'image'+i\n                       }\n              })\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerFunction\"]\n              ({ init:\n                 [ _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonFunctionDuplicate\"],\n                   _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonFunctionSequence\"],\n                   _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonFunctionShuffle\"],\n                   _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonFunctionUnnest\"],\n                 ] \n              }) \n         )\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerStringReplace\"]()),\n\n  memory =\n  { cards: { \"$function\": \"$sequence\",\n             \"$last\":     \"@noOfPairs\",\n             \"$format\":   \"@image\"  \n           },\n    board: { \"$function\": \"$shuffle\", \n             \"$value\":    { \"$function\": \"$duplicate\", \n                            \"$value\":    { \"$function\": \"$sequence\", \n                                           \"$last\":     \"@noOfPairs\" \n                                         }, \n                            \"$times\":    2,\n                            \"$flatten\":  true\n                          }\n           }\n  };\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title('Memory (es6)');\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform( transformer, memory, {\"@noOfPairs\": 4} );\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform( transformer, memory );\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform( transformer, \n                 memory, \n                 { \"@noOfPairs\": 11,\n                   \"@image\":     i => 'bild'+('__'+i).slice(-3)\n                 }\n               );\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].end();\n\n\n//# sourceURL=webpack:///./examples_es6/example_memory_es6.js?");

/***/ }),

/***/ "./examples_es6/example_some_es6.js":
/*!******************************************!*\
  !*** ./examples_es6/example_some_es6.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wljkowa/json-transformer */ \"./transformer/index.js\");\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _trace_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trace_es6 */ \"./examples_es6/trace_es6.js\");\n/**\n * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>\n * @copyright 2020 © Wolfgang L. J. Kowarschick\n * @license   MIT\n */\n\n// build and run\n//   npm run examples:prod && node examples_es6/examples_bundle_es6.js\n\n\n\n\n\n\n\n\nconst \n  transformer =  \n          new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]()\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerSome\"]())\n  ;\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title('$some (es6)');\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [\"$some\"]);\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [\"$some\", 5]);\nfor (let i = 0; i < 5; i++)\n{ _trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [\"$some\", 5, 7, 9]); }\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title('$level before $some (es6)');\n\nconst\n  transformer2 =\n          new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]()\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerLevel\"]())\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerSome\"]());\n\nfor (let i = 0; i < 3; i++)\n{ _trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer2, [\"$some\", \"$level\", [\"$level\"], [[\"$level\"]]] ); }\n\nfor (let i = 0; i < 3; i++)\n{ _trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer2, { someValue: [\"$some\", \"$level\", [\"$level\"], [[\"$level\"]]] }); }\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title('$some before $level (es6)');\n\nconst\n  transformer3 =   \n            new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformer\"]()\n      .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]().pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerSome\"]()),\n            new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]().pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerLevel\"]()), \n           );\n\nfor (let i = 0; i < 3; i++)\n{ _trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer3, [\"$some\", \"$level\", [\"$level\"], [[\"$level\"]]] ); }\n\nfor (let i = 0; i < 3; i++)\n{ _trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer3, { someValue: [\"$some\", \"$level\", [\"$level\"], [[\"$level\"]]] }); }      \n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].end();\n\n//# sourceURL=webpack:///./examples_es6/example_some_es6.js?");

/***/ }),

/***/ "./examples_es6/example_template_es6.js":
/*!**********************************************!*\
  !*** ./examples_es6/example_template_es6.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wljkowa/json-transformer */ \"./transformer/index.js\");\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _trace_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trace_es6 */ \"./examples_es6/trace_es6.js\");\n/**\n * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>\n * @copyright 2020 © Wolfgang L. J. Kowarschick\n * @license   MIT\n */\n\n// build and run\n//   npm run examples:prod && node examples_es6/examples_bundle_es6.js\n\n\n\n\n \nconst\n  transformer =  \n         new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]({ data:            \n                                        { abc:   123,\n                                          hello: \"Hallo\",\n                                          name:  \"Wolfgang\",\n                                        }\n                                     })\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerLevel\"]())\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTemplate\"]());\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title('Templates with Placeholders ${name} (es6))');\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${abc}\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${hello}, ${name}!\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${hello}, ${name}! ${HowAreYou}\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [[\"${abc}\"], {abc: \"${abc}\", \"${abc}\": \"abc\"}, \"${name}\"]);\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].end();\n\n\n//# sourceURL=webpack:///./examples_es6/example_template_es6.js?");

/***/ }),

/***/ "./examples_es6/example_template_functions_es6.js":
/*!********************************************************!*\
  !*** ./examples_es6/example_template_functions_es6.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wljkowa/json-transformer */ \"./transformer/index.js\");\n/* harmony import */ var _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _trace_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trace_es6 */ \"./examples_es6/trace_es6.js\");\n/**\n * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>\n * @copyright 2020 © Wolfgang L. J. Kowarschick\n * @license   MIT\n */\n\n// build and run\n//   npm run examples:prod && node examples_es6/examples_bundle_es6.js\n\n\n\n\n\n// run: \n //   node examples.cjs/example.string.template.functions.cjs.js\n\nconst\n  transformer =  \n         new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTraversal\"]\n             ({ data:            \n                { abc:   123, \n                  hello: \"Hallo\",\n                  name:  \"Wolfgang\",\n                  fps:    50, \n                  vpf:   ({value, data}) => \n                         [ value.x/data.fps,\n                           value.y/data.fps,\n                         ],\n                  def:   () => 123,\n                }\n             })\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerLevel\"]())\n    .pipe(new _wljkowa_json_transformer__WEBPACK_IMPORTED_MODULE_0__[\"JsonTransformerTemplateFunctions\"]());\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title('Templates with Placeholders ${name(...)} and Function Calls (csj)');\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${abc}\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${hello}, ${name}!\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${hello}, ${name}! ${HowAreYou}\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [[\"${abc}\"], {abc: \"${abc}\", \"${abc}\": \"abc\"}, \"${name}\"]);\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${vpf({'x':100, 'y':200})}\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"{v: ${vpf({'x':100, 'y':200})}}\");\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, {v: \"${vpf({'x':100, 'y':200})}\"});\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, [{v: \"${vpf({'x':100, 'y':200})}\"}, {a: \"${vpf({'x':200, 'y':400})}\"}]);\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].transform(transformer, \"${def()}\");\n\n_trace_es6__WEBPACK_IMPORTED_MODULE_1__[\"default\"].end();\n\n\n//# sourceURL=webpack:///./examples_es6/example_template_functions_es6.js?");

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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerFunction = void 0;\nconst types_1 = __webpack_require__(/*! ./types */ \"./transformer/types.js\");\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerFunction extends transformer_1.JsonTransformer {\n    constructor(_ = {}) {\n        super(_);\n        this.descriptors = { [types_1.JsonType.Array]: {},\n            [types_1.JsonType.Object]: {},\n            [types_1.JsonType.String]: {},\n        };\n        this.transformerJsonArray = (_) => {\n            const c_value = _.value;\n            if (c_value.length === 0) {\n                return c_value;\n            }\n            const c_name = this.functionName(c_value);\n            if (c_name == null) {\n                return c_value;\n            }\n            const c_d = this.descriptors[types_1.JsonType.Array][c_name];\n            return c_d == null ? c_value : c_d.function(Object.assign(Object.assign({}, _), { init: c_d.init, rename: this.rename.bind(this) }), 1);\n        };\n        this.transformerJsonObject = (_) => {\n            const c_value = _.value, c_function_name = this.functionName(c_value);\n            if (c_function_name != null) {\n                const c_do = this.descriptors[types_1.JsonType.Object][c_function_name];\n                if (c_do != null) {\n                    return c_do.function(Object.assign(Object.assign({}, _), { init: c_do.init, rename: this.rename.bind(this) }));\n                }\n                const c_da = this.descriptors[types_1.JsonType.Array][c_function_name], c_a = this.arrayFunctionValue(c_function_name, c_value);\n                return c_a == null ? c_value : c_da.function(Object.assign(Object.assign({}, _), { value: c_a, init: c_da.init, rename: this.rename.bind(this) }), 0);\n            }\n            else {\n                return c_value;\n            }\n        };\n        this.transformerJsonString = (_) => {\n            const c_d = this.descriptors[types_1.JsonType.String][_.value];\n            return c_d == null ? _.value : c_d.function(Object.assign(Object.assign({}, _), { init: c_d.init, rename: this.rename.bind(this) }));\n        };\n        this.initialize();\n        if (Array.isArray(_.init)) {\n            let l_descriptor;\n            for (const c_function of _.init) {\n                l_descriptor = c_function;\n                this.descriptors[l_descriptor.type][l_descriptor.name] = l_descriptor;\n            }\n        }\n    }\n}\nexports.JsonTransformerFunction = JsonTransformerFunction;\nexports.default = JsonTransformerFunction;\n//# sourceMappingURL=function.js.map\n\n//# sourceURL=webpack:///./transformer/function.js?");

/***/ }),

/***/ "./transformer/function/aggregate.js":
/*!*******************************************!*\
  !*** ./transformer/function/aggregate.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionAverage = exports.JsonFunctionProduct = exports.JsonFunctionSum = exports.JsonFunctionMaxString = exports.JsonFunctionMinString = exports.JsonFunctionMax = exports.JsonFunctionMin = exports.aggregate = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nfunction aggregate({ value, init }, begin = 0) {\n    var _a;\n    const c_init = init, c_default = c_init.default, c_begin = (((_a = c_init.begin) !== null && _a !== void 0 ? _a : 0) + begin), c_initialize = c_init.initialize, c_aggregate = c_init.aggregate, c_finalize = c_init.finalize;\n    if (typeof c_aggregate === 'function') {\n        let l_aggregation = (c_initialize != null)\n            ? c_initialize(value, c_begin, c_default)\n            : c_default;\n        for (let i = c_begin, n = value.length; i < n; i++) {\n            l_aggregation = c_aggregate(l_aggregation, value[i], value, c_begin, i);\n        }\n        if (c_finalize != null) {\n            l_aggregation = c_finalize(l_aggregation, value, c_begin);\n        }\n        return l_aggregation;\n    }\n    else {\n        return c_default;\n    }\n}\nexports.aggregate = aggregate;\nexports.JsonFunctionMin = { name: '$min',\n    type: types_1.JsonType.Array,\n    function: aggregate, init: { default: Infinity, aggregate: (a, b) => Math.min(a, b)\n    }\n};\nexports.JsonFunctionMax = { name: '$max',\n    type: types_1.JsonType.Array,\n    function: aggregate, init: { default: -Infinity, aggregate: (a, b) => Math.max(a, b)\n    }\n};\nexports.JsonFunctionMinString = { name: '$min_string',\n    type: types_1.JsonType.Array,\n    function: aggregate, init: { default: null,\n        begin: 1, initialize: (array, begin) => (array.length > begin) ? array[begin] : null,\n        aggregate: (a, b) => (a.toString().localeCompare(b) < 0) ? a : b\n    }\n};\nexports.JsonFunctionMaxString = { name: '$max_string',\n    type: types_1.JsonType.Array,\n    function: aggregate, init: { default: null,\n        begin: 1, initialize: (array, begin) => (array.length > begin) ? array[begin] : null,\n        aggregate: (a, b) => (a.toString().localeCompare(b) > 0) ? a : b\n    }\n};\nexports.JsonFunctionSum = { name: '$sum',\n    type: types_1.JsonType.Array,\n    function: aggregate, init: { default: 0, aggregate: (a, b) => a + b\n    }\n};\nexports.JsonFunctionProduct = { name: '$product',\n    type: types_1.JsonType.Array,\n    function: aggregate, init: { default: 1, aggregate: (a, b) => a * b\n    }\n};\nexports.JsonFunctionAverage = { name: '$average',\n    type: types_1.JsonType.Array,\n    function: aggregate, init: { default: 0, aggregate: (a, b) => a + b,\n        finalize: (aggregation, array, begin) => aggregation / (array.length - begin)\n    }\n};\nexports.default = exports.JsonFunctionMin;\n//# sourceMappingURL=aggregate.js.map\n\n//# sourceURL=webpack:///./transformer/function/aggregate.js?");

/***/ }),

/***/ "./transformer/function/count.js":
/*!***************************************!*\
  !*** ./transformer/function/count.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionCount = exports.count = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nfunction count({ value }, begin = 0) { return value.length - begin; }\nexports.count = count;\nexports.JsonFunctionCount = { name: '$count',\n    type: types_1.JsonType.Array,\n    function: count,\n};\nexports.default = exports.JsonFunctionCount;\n//# sourceMappingURL=count.js.map\n\n//# sourceURL=webpack:///./transformer/function/count.js?");

/***/ }),

/***/ "./transformer/function/duplicate.js":
/*!*******************************************!*\
  !*** ./transformer/function/duplicate.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionDuplicate = exports.duplicate = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nconst traversal_1 = __webpack_require__(/*! ../traversal */ \"./transformer/traversal.js\");\nconst VALUE = '$value', TIMES = '$times', FLATTEN = '$flatten';\nfunction duplicate({ value, init, rename = name => name }) {\n    var _a, _b, _c;\n    const c_clone_transformer = new traversal_1.JsonTransformerTraversal(), c_init = init, c_value = ((_a = value === null || value === void 0 ? void 0 : value[rename(VALUE)]) !== null && _a !== void 0 ? _a : null), c_times = ((_b = value === null || value === void 0 ? void 0 : value[rename(TIMES)]) !== null && _b !== void 0 ? _b : c_init.times), c_flatten = ((_c = value === null || value === void 0 ? void 0 : value[rename(FLATTEN)]) !== null && _c !== void 0 ? _c : c_init.flatten), c_result = [];\n    if (c_flatten && Array.isArray(c_value)) {\n        for (let l_value of c_value) {\n            for (let i = 0; i < c_times; i++) {\n                c_result.push(c_clone_transformer.transform({ value: l_value }));\n            }\n        }\n    }\n    else {\n        for (let i = 0; i < c_times; i++) {\n            c_result.push(c_clone_transformer.transform({ value: c_value }));\n        }\n    }\n    return c_result;\n}\nexports.duplicate = duplicate;\nexports.JsonFunctionDuplicate = { name: '$duplicate',\n    type: types_1.JsonType.Object,\n    function: duplicate,\n    init: { times: 1,\n        withinArray: false\n    }\n};\nexports.default = exports.JsonFunctionDuplicate;\n//# sourceMappingURL=duplicate.js.map\n\n//# sourceURL=webpack:///./transformer/function/duplicate.js?");

/***/ }),

/***/ "./transformer/function/level.js":
/*!***************************************!*\
  !*** ./transformer/function/level.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionLevel = exports.level = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nfunction level({ level }) { return level; }\nexports.level = level;\nexports.JsonFunctionLevel = { name: '$level',\n    type: types_1.JsonType.String,\n    function: level,\n};\nexports.default = exports.JsonFunctionLevel;\n//# sourceMappingURL=level.js.map\n\n//# sourceURL=webpack:///./transformer/function/level.js?");

/***/ }),

/***/ "./transformer/function/random.js":
/*!****************************************!*\
  !*** ./transformer/function/random.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionRandom = exports.random = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nconst MIN = '$min', MAX = '$max', IS_INTEGER = \"$isInteger\", SCALE = \"$scale\", GZP = \"$gzp\";\nfunction random({ value, data, init, rename = name => name }) {\n    var _a, _b, _c, _d;\n    const c_init = init, c_min = ((_a = value === null || value === void 0 ? void 0 : value[rename(MIN)]) !== null && _a !== void 0 ? _a : c_init.min), c_max = ((_b = value === null || value === void 0 ? void 0 : value[rename(MAX)]) !== null && _b !== void 0 ? _b : c_init.max);\n    const c_is_integer = ((_c = value === null || value === void 0 ? void 0 : value[rename(IS_INTEGER)]) !== null && _c !== void 0 ? _c : c_init.isInteger), c_gzp = ((_d = value === null || value === void 0 ? void 0 : value[rename(GZP)]) !== null && _d !== void 0 ? _d : c_init.gzp), c_scale_aux = data === null || data === void 0 ? void 0 : data[(value === null || value === void 0 ? void 0 : value[rename(SCALE)])], c_scale = types_1.isJsonNumber(c_scale_aux) ? c_scale_aux : c_init.scale, c_random = Math.random();\n    let l_result;\n    if (c_is_integer) {\n        l_result = Math.floor(c_min + c_random * (c_max + 1 - c_min));\n    }\n    else {\n        l_result = c_min + c_random * (c_max - c_min);\n    }\n    if (Number.isFinite(c_gzp) && 0 <= c_gzp && c_gzp < 1) {\n        l_result *= (Math.random() >= c_gzp) ? 1 : -1;\n    }\n    return types_1.isJsonNumber(c_scale) ? l_result * c_scale : l_result;\n}\nexports.random = random;\nexports.JsonFunctionRandom = { name: '$random',\n    type: types_1.JsonType.Object,\n    function: random,\n    init: { min: 0,\n        max: 1,\n        isInteger: false,\n        scale: null,\n        gzp: 1,\n    }\n};\nexports.default = exports.JsonFunctionRandom;\n//# sourceMappingURL=random.js.map\n\n//# sourceURL=webpack:///./transformer/function/random.js?");

/***/ }),

/***/ "./transformer/function/sequence.js":
/*!******************************************!*\
  !*** ./transformer/function/sequence.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionSequence = exports.sequence = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nconst FIRST = '$first', LAST = '$last', PREFIX = '$prefix', FORMAT = '$format';\nfunction sequence({ value, data, init, rename = name => name }) {\n    var _a, _b, _c, _d;\n    const c_init = init, c_first = ((_a = value === null || value === void 0 ? void 0 : value[rename(FIRST)]) !== null && _a !== void 0 ? _a : c_init.first), c_last = ((_b = value === null || value === void 0 ? void 0 : value[rename(LAST)]) !== null && _b !== void 0 ? _b : c_init.last), c_prefix = ((_c = value === null || value === void 0 ? void 0 : value[rename(PREFIX)]) !== null && _c !== void 0 ? _c : c_init.prefix), c_format_data = ((_d = value === null || value === void 0 ? void 0 : value[rename(FORMAT)]) !== null && _d !== void 0 ? _d : c_init.format), c_format = ((typeof c_format_data === 'string') ? data[c_format_data] : c_format_data), c_result = [];\n    for (let i = c_first; i <= c_last; i++) {\n        let l_result = i;\n        if (c_prefix != null) {\n            l_result = c_prefix + l_result;\n        }\n        if (c_format != null) {\n            if (c_format != null) {\n                l_result = c_format(l_result);\n            }\n        }\n        c_result.push(l_result);\n    }\n    return c_result;\n}\nexports.sequence = sequence;\nexports.JsonFunctionSequence = { name: '$sequence',\n    type: types_1.JsonType.Object,\n    function: sequence,\n    init: { first: 1,\n        last: 1,\n        prefix: null,\n        format: null\n    }\n};\nexports.default = exports.JsonFunctionSequence;\n//# sourceMappingURL=sequence.js.map\n\n//# sourceURL=webpack:///./transformer/function/sequence.js?");

/***/ }),

/***/ "./transformer/function/shuffle.js":
/*!*****************************************!*\
  !*** ./transformer/function/shuffle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionShuffle = exports.shuffle = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nfunction shuffle({ value }, begin = 0) {\n    const c_value = value.slice(begin);\n    for (let i = c_value.length - 1; i > 0; i--) {\n        const j = Math.floor(Math.random() * (i + 1));\n        if (i !== j) {\n            [c_value[i], c_value[j]] = [c_value[j], c_value[i]];\n        }\n        ;\n    }\n    return c_value;\n}\nexports.shuffle = shuffle;\nexports.JsonFunctionShuffle = { name: '$shuffle',\n    type: types_1.JsonType.Array,\n    function: shuffle,\n};\nexports.default = exports.JsonFunctionShuffle;\n//# sourceMappingURL=shuffle.js.map\n\n//# sourceURL=webpack:///./transformer/function/shuffle.js?");

/***/ }),

/***/ "./transformer/function/some.js":
/*!**************************************!*\
  !*** ./transformer/function/some.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionSome = exports.some = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nfunction some({ value }, begin = 0) {\n    const c_length = value.length;\n    return (c_length === begin)\n        ? null\n        : value[Math.floor(Math.random() * (c_length - begin)) + begin];\n}\nexports.some = some;\nexports.JsonFunctionSome = { name: '$some',\n    type: types_1.JsonType.Array,\n    function: some,\n};\nexports.default = exports.JsonFunctionSome;\n//# sourceMappingURL=some.js.map\n\n//# sourceURL=webpack:///./transformer/function/some.js?");

/***/ }),

/***/ "./transformer/function/unnest.js":
/*!****************************************!*\
  !*** ./transformer/function/unnest.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonFunctionUnnest = exports.unnest = void 0;\nconst types_1 = __webpack_require__(/*! ../types */ \"./transformer/types.js\");\nfunction unnest({ value }, begin = 0) {\n    const c_length = value.length, c_result = [];\n    for (let i = begin; i < c_length; i++) {\n        const l_value = value[i];\n        if (Array.isArray(l_value)) {\n            for (let j of l_value) {\n                c_result.push(j);\n            }\n        }\n        else {\n            c_result.push(l_value);\n        }\n    }\n    return c_result;\n}\nexports.unnest = unnest;\nexports.JsonFunctionUnnest = { name: '$unnest',\n    type: types_1.JsonType.Array,\n    function: unnest,\n};\nexports.default = exports.JsonFunctionUnnest;\n//# sourceMappingURL=unnest.js.map\n\n//# sourceURL=webpack:///./transformer/function/unnest.js?");

/***/ }),

/***/ "./transformer/index.js":
/*!******************************!*\
  !*** ./transformer/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./types */ \"./transformer/types.js\"), exports);\n__exportStar(__webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\"), exports);\n__exportStar(__webpack_require__(/*! ./null */ \"./transformer/null.js\"), exports);\n__exportStar(__webpack_require__(/*! ./function */ \"./transformer/function.js\"), exports);\n__exportStar(__webpack_require__(/*! ./traversal */ \"./transformer/traversal.js\"), exports);\n__exportStar(__webpack_require__(/*! ./traversal_breadth_first */ \"./transformer/traversal_breadth_first.js\"), exports);\n__exportStar(__webpack_require__(/*! ./traversal_restricted */ \"./transformer/traversal_restricted.js\"), exports);\n__exportStar(__webpack_require__(/*! ./string_replace */ \"./transformer/string_replace.js\"), exports);\n__exportStar(__webpack_require__(/*! ./template */ \"./transformer/template.js\"), exports);\n__exportStar(__webpack_require__(/*! ./template_functions */ \"./transformer/template_functions.js\"), exports);\n__exportStar(__webpack_require__(/*! ./function/count */ \"./transformer/function/count.js\"), exports);\n__exportStar(__webpack_require__(/*! ./function/aggregate */ \"./transformer/function/aggregate.js\"), exports);\n__exportStar(__webpack_require__(/*! ./function/shuffle */ \"./transformer/function/shuffle.js\"), exports);\n__exportStar(__webpack_require__(/*! ./function/some */ \"./transformer/function/some.js\"), exports);\n__exportStar(__webpack_require__(/*! ./function/unnest */ \"./transformer/function/unnest.js\"), exports);\n__exportStar(__webpack_require__(/*! ./function/duplicate */ \"./transformer/function/duplicate.js\"), exports);\n__exportStar(__webpack_require__(/*! ./function/random */ \"./transformer/function/random.js\"), exports);\n__exportStar(__webpack_require__(/*! ./function/sequence */ \"./transformer/function/sequence.js\"), exports);\n__exportStar(__webpack_require__(/*! ./function/level */ \"./transformer/function/level.js\"), exports);\n__exportStar(__webpack_require__(/*! ./some */ \"./transformer/some.js\"), exports);\n__exportStar(__webpack_require__(/*! ./random */ \"./transformer/random.js\"), exports);\n__exportStar(__webpack_require__(/*! ./level */ \"./transformer/level.js\"), exports);\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./transformer/index.js?");

/***/ }),

/***/ "./transformer/level.js":
/*!******************************!*\
  !*** ./transformer/level.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerLevel = void 0;\nconst LEVEL = '$level';\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerLevel extends transformer_1.JsonTransformer {\n    constructor(_ = {}) {\n        super(_);\n        this.transformerJsonString = ({ value, level }) => { return (value === this.rename(LEVEL)) ? level : value; };\n        this.initialize();\n    }\n}\nexports.JsonTransformerLevel = JsonTransformerLevel;\nexports.default = JsonTransformerLevel;\n//# sourceMappingURL=level.js.map\n\n//# sourceURL=webpack:///./transformer/level.js?");

/***/ }),

/***/ "./transformer/null.js":
/*!*****************************!*\
  !*** ./transformer/null.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerNull = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerNull extends transformer_1.JsonTransformer {\n    constructor(_ = {}) {\n        super(_);\n        this.transformerJsonNull = ({}) => { return null; };\n        this.initialize();\n    }\n}\nexports.JsonTransformerNull = JsonTransformerNull;\nexports.default = JsonTransformerNull;\n//# sourceMappingURL=null.js.map\n\n//# sourceURL=webpack:///./transformer/null.js?");

/***/ }),

/***/ "./transformer/random.js":
/*!*******************************!*\
  !*** ./transformer/random.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerRandom = void 0;\nconst types_1 = __webpack_require__(/*! ./types */ \"./transformer/types.js\");\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nconst RANDOM = '$random', MIN = '$min', MAX = '$max', IS_INTEGER = \"$isInteger\", SCALE = \"$scale\", GZP = \"$gzp\";\nclass JsonTransformerRandom extends transformer_1.JsonTransformer {\n    constructor(_a = {}) {\n        var { init = { min: 0,\n            max: 1,\n            isInteger: false,\n            scale: null,\n            gzp: 1,\n        } } = _a, _ = __rest(_a, [\"init\"]);\n        super(Object.assign({ init }, _));\n        this.transformerJsonObject = ({ value, data }) => {\n            var _a, _b, _c, _d;\n            const c_init = this.init, c_min = ((_a = value === null || value === void 0 ? void 0 : value[this.rename(MIN)]) !== null && _a !== void 0 ? _a : c_init.min), c_max = ((_b = value === null || value === void 0 ? void 0 : value[this.rename(MAX)]) !== null && _b !== void 0 ? _b : c_init.max);\n            if (!this.isFunctionName(RANDOM, value)\n                || !Number.isFinite(c_min)\n                || !Number.isFinite(c_max)) {\n                return value;\n            }\n            const c_is_integer = ((_c = value === null || value === void 0 ? void 0 : value[this.rename(IS_INTEGER)]) !== null && _c !== void 0 ? _c : c_init.isInteger), c_gzp = ((_d = value === null || value === void 0 ? void 0 : value[this.rename(GZP)]) !== null && _d !== void 0 ? _d : c_init.gzp), c_scale_aux = data === null || data === void 0 ? void 0 : data[(value === null || value === void 0 ? void 0 : value[this.rename(SCALE)])], c_scale = types_1.isJsonNumber(c_scale_aux) ? c_scale_aux : c_init.scale, c_random = Math.random();\n            let l_result;\n            if (c_is_integer) {\n                l_result = Math.floor(c_min + c_random * (c_max + 1 - c_min));\n            }\n            else {\n                l_result = c_min + c_random * (c_max - c_min);\n            }\n            if (Number.isFinite(c_gzp) && 0 <= c_gzp && c_gzp < 1) {\n                l_result *= (Math.random() >= c_gzp) ? 1 : -1;\n            }\n            return types_1.isJsonNumber(c_scale) ? l_result * c_scale : l_result;\n        };\n        this.initialize();\n    }\n}\nexports.JsonTransformerRandom = JsonTransformerRandom;\nexports.default = JsonTransformerRandom;\n//# sourceMappingURL=random.js.map\n\n//# sourceURL=webpack:///./transformer/random.js?");

/***/ }),

/***/ "./transformer/some.js":
/*!*****************************!*\
  !*** ./transformer/some.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerSome = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nconst SOME = '$some';\nclass JsonTransformerSome extends transformer_1.JsonTransformer {\n    constructor(_ = {}) {\n        super(_);\n        this.transformerJsonArray = ({ value }) => {\n            const c_length = value.length;\n            if (c_length === 0 || value[0] !== this.rename(SOME)) {\n                return value;\n            }\n            return (c_length === 1)\n                ? null\n                : value[Math.floor(Math.random() * (c_length - 1)) + 1];\n        };\n        this.transformerJsonObject = ({ value, data, level }) => {\n            const c_value = this.arrayFunctionValue(SOME, value);\n            return (c_value != null)\n                ? this.transformerJsonArray({ value: c_value, data, level })\n                : value;\n        };\n        this.initialize();\n    }\n}\nexports.JsonTransformerSome = JsonTransformerSome;\nexports.default = JsonTransformerSome;\n//# sourceMappingURL=some.js.map\n\n//# sourceURL=webpack:///./transformer/some.js?");

/***/ }),

/***/ "./transformer/string_replace.js":
/*!***************************************!*\
  !*** ./transformer/string_replace.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerStringReplace = void 0;\nconst types_1 = __webpack_require__(/*! ./types */ \"./transformer/types.js\");\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerStringReplace extends transformer_1.JsonTransformer {\n    constructor(_a = {}) {\n        var { init = { regexp: /^(@|\\${)/,\n            jsonOnly: true,\n        } } = _a, _ = __rest(_a, [\"init\"]);\n        super(Object.assign({ init }, _));\n        this.transformerJsonString = ({ value, data }) => {\n            var _a, _b;\n            const c_init = this.init, c_regexp = ((_a = c_init.regexp) !== null && _a !== void 0 ? _a : /^(@|\\${)/), c_json_only = ((_b = c_init.jsonOnly) !== null && _b !== void 0 ? _b : true), c_value = data[value];\n            return c_value != null\n                && value.match(c_regexp)\n                && (!c_json_only || types_1.isJsonValue(c_value))\n                ? c_value\n                : value;\n        };\n        this.initialize();\n    }\n}\nexports.JsonTransformerStringReplace = JsonTransformerStringReplace;\nexports.default = JsonTransformerStringReplace;\n//# sourceMappingURL=string_replace.js.map\n\n//# sourceURL=webpack:///./transformer/string_replace.js?");

/***/ }),

/***/ "./transformer/template.js":
/*!*********************************!*\
  !*** ./transformer/template.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerTemplate = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerTemplate extends transformer_1.JsonTransformer {\n    constructor(_a = {}) {\n        var { init = /\\${([\\w\\d@_-]+)}/ } = _a, _ = __rest(_a, [\"init\"]);\n        super(Object.assign({ init }, _));\n        this.transformerJsonString = ({ value, data }) => {\n            const c_regexp = this.init, c_value = value, c_match = c_value.match(new RegExp(`^${c_regexp.toString().slice(1, -1)}$`)), f_replace_placeholders = (p_value) => {\n                const c_placeholders = p_value.matchAll(new RegExp(c_regexp, 'g')), c_replacers = [];\n                let l_result = c_placeholders.next();\n                if (l_result.done) {\n                    return p_value;\n                }\n                while (!l_result.done) {\n                    const c_match = l_result.value, c_data = data[c_match[1]], c_data_string = typeof c_data === 'string' ? c_data : JSON.stringify(c_data);\n                    if (c_data != null) {\n                        c_replacers.push([c_match[0], f_replace_placeholders(c_data_string)]);\n                    }\n                    l_result = c_placeholders.next();\n                }\n                for (const r of c_replacers) {\n                    p_value = p_value.replace(r[0], r[1]);\n                }\n                return p_value;\n            };\n            return c_match != null\n                ? data[c_match[1]]\n                : f_replace_placeholders(c_value);\n        };\n        this.initialize();\n    }\n}\nexports.JsonTransformerTemplate = JsonTransformerTemplate;\nexports.default = JsonTransformerTemplate;\n//# sourceMappingURL=template.js.map\n\n//# sourceURL=webpack:///./transformer/template.js?");

/***/ }),

/***/ "./transformer/template_functions.js":
/*!*******************************************!*\
  !*** ./transformer/template_functions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerTemplateFunctions = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerTemplateFunctions extends transformer_1.JsonTransformer {\n    constructor(_a = {}) {\n        var { init = /\\${([\\w\\d@_-]+)(}|\\([\\s\\w\\d@_,:'\"<>{}\\[\\]-]*\\)})/ } = _a, _ = __rest(_a, [\"init\"]);\n        super(Object.assign({ init }, _));\n        this.transformerJsonString = ({ value, data }) => {\n            const c_regexp = this.init, c_value = value, c_match = c_value.match(new RegExp(`^${c_regexp.toString().slice(1, -1)}$`)), f_split_placeholder = (p_name, p_arguments) => {\n                var _a;\n                const c_name = p_name == null ? null : data === null || data === void 0 ? void 0 : data[p_name], c_arguments = (_a = p_arguments === null || p_arguments === void 0 ? void 0 : p_arguments.slice(1, -2).replace(/'/g, '\"')) !== null && _a !== void 0 ? _a : '';\n                let l_json_value;\n                if (p_arguments.length > 1) {\n                    try {\n                        l_json_value = JSON.parse(c_arguments);\n                    }\n                    catch (e) {\n                        l_json_value = e.message;\n                    }\n                    return [c_name, l_json_value];\n                }\n                else {\n                    return [c_name, null];\n                }\n            }, f_replace_placeholders = (p_value, p_string_cast) => {\n                var _a;\n                const c_placeholders = p_value.matchAll(new RegExp(c_regexp, 'g')), c_replacers = [];\n                let l_result = c_placeholders.next();\n                if (l_result.done) {\n                    return p_value;\n                }\n                while (!l_result.done) {\n                    const c_match = l_result.value, [c_data, c_json_value] = f_split_placeholder(c_match[1], c_match[2]);\n                    if (c_data != null) {\n                        let l_data;\n                        if (typeof c_data === 'function') {\n                            const c_data_computed = c_data({ value: c_json_value, data, level: this.level });\n                            l_data = (!p_string_cast || typeof c_data_computed === 'string')\n                                ? c_data_computed\n                                : JSON.stringify(c_data_computed);\n                        }\n                        else {\n                            l_data = (c_json_value != null)\n                                ? c_match[0]\n                                : (p_string_cast ? ((_a = c_data) !== null && _a !== void 0 ? _a : '') : c_data);\n                        }\n                        c_replacers.push([c_match[0], l_data]);\n                    }\n                    l_result = c_placeholders.next();\n                }\n                if (p_string_cast) {\n                    for (const r of c_replacers) {\n                        p_value = p_value.replace(r[0], r[1]);\n                    }\n                    return p_value;\n                }\n                return c_replacers[0][1];\n            };\n            return f_replace_placeholders(c_value, c_match == null || c_match.length == 1);\n        };\n        this.initialize();\n    }\n}\nexports.JsonTransformerTemplateFunctions = JsonTransformerTemplateFunctions;\nexports.default = JsonTransformerTemplateFunctions;\n//# sourceMappingURL=template_functions.js.map\n\n//# sourceURL=webpack:///./transformer/template_functions.js?");

/***/ }),

/***/ "./transformer/transformer.js":
/*!************************************!*\
  !*** ./transformer/transformer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformer = void 0;\nconst FUNCTION = '$function', VALUE = '$value';\nconst types_1 = __webpack_require__(/*! ./types */ \"./transformer/types.js\");\nconst c_transformer_tests = [['transformerJsonPrimitive', types_1.isJsonPrimitive],\n    ['transformerJsonArray', types_1.isJsonArray],\n    ['transformerJsonObject', types_1.isJsonObject],\n    ['transformerJsonString', types_1.isJsonString],\n    ['transformerJsonNull', types_1.isJsonNull],\n    ['transformerJsonNumber', types_1.isJsonNumber],\n    ['transformerJsonBoolean', types_1.isJsonBoolean],\n];\nclass JsonTransformer {\n    constructor({ init = {}, data = {}, rename = {} } = {}) {\n        this.v_init_root = {};\n        this.v_data = {};\n        this.v_rename_reverse = {};\n        this.v_transformer_tests = [];\n        this._pipe_tail = null;\n        this._pipe_transformers = [];\n        this.transformerJsonPrimitive = null;\n        this.transformerJsonArray = null;\n        this.transformerJsonObject = null;\n        this.transformerJsonString = null;\n        this.transformerJsonNumber = null;\n        this.transformerJsonBoolean = null;\n        this.transformerJsonNull = null;\n        this.v_root = this;\n        this.v_name = this.constructor.name;\n        this.init = init;\n        this.merge({ [this.v_name]: this.init }, this.v_init_root);\n        this.v_data = data;\n        this.v_rename = rename;\n        for (const [k, v] of Object.entries(rename)) {\n            this.v_rename_reverse[v] = k;\n        }\n    }\n    initialize() {\n        if (this.v_transformer_tests.length === 0)\n            for (const [c_name, c_test] of c_transformer_tests) {\n                const c_method = this[c_name];\n                if (c_method != null) {\n                    this.v_transformer_tests.push([c_test, c_method]);\n                }\n            }\n    }\n    merge(initNew, initOld) {\n        for (let [key_new, value_new] of Object.entries(initNew)) {\n            const value_old = initOld[key_new];\n            if (value_old == null) {\n                initOld[key_new] = value_new;\n            }\n            else if (types_1.isJsonObject(value_old) && types_1.isJsonObject(value_new)) {\n                this.merge(value_new, value_old);\n            }\n        }\n    }\n    rename(name) { var _a; return (_a = this.v_root.v_rename[name]) !== null && _a !== void 0 ? _a : name; }\n    rerename(name) { var _a; return (_a = this.v_root.v_rename_reverse[name]) !== null && _a !== void 0 ? _a : name; }\n    functionName(value) {\n        const f_name = (name) => types_1.isJsonString(name)\n            ? (this.v_rename_reverse[name] != null\n                ? this.rerename(name)\n                : (this.v_rename[name] != null\n                    ? null\n                    : name))\n            : null;\n        if (types_1.isJsonArray(value)) {\n            return value.length > 0 ? f_name(value[0]) : null;\n        }\n        else {\n            return f_name(value[this.rename(FUNCTION)]);\n        }\n    }\n    isFunctionName(name, value) { return (this.functionName(value) === name); }\n    arrayFunctionValue(name, value) {\n        const c_name = this.functionName(value);\n        if (c_name === name) {\n            const c_value = value[this.rename(VALUE)];\n            return types_1.isJsonArray(c_value) ? c_value : null;\n        }\n        return null;\n    }\n    pipe(...transformers) {\n        if (transformers.length === 0) {\n            return this;\n        }\n        if (this._pipe_tail == null) {\n            this._pipe_transformers = transformers;\n            for (const c_transformer of transformers) {\n                Object.setPrototypeOf(c_transformer.v_data, this.v_data);\n                c_transformer.v_root = this;\n                this.merge({ [c_transformer.v_name]: c_transformer.init }, this.v_init_root);\n                this.merge(c_transformer.v_rename, this.v_rename);\n                c_transformer.init = this.v_init_root[c_transformer.v_name];\n            }\n        }\n        else {\n            this._pipe_tail.pipe(...transformers);\n        }\n        this._pipe_tail = this._pipe_transformers[0];\n        return this;\n    }\n    transformerPipe(_) {\n        let l_value = _.value;\n        for (const c_transformer of this._pipe_transformers) {\n            l_value = c_transformer.transform({ value: l_value, data: _.data, level: _.level });\n        }\n        return l_value;\n    }\n    transform({ value, data = {}, level = 0 }) {\n        const c_data = Object.assign({}, data);\n        Object.setPrototypeOf(c_data, this.v_data);\n        let l_value = value;\n        for (const [c_test, c_transformer] of this.v_transformer_tests) {\n            if (c_test(value)) {\n                l_value = c_transformer({ value: value, data: c_data, level });\n                break;\n            }\n        }\n        l_value = this.transformerPipe({ value: l_value, data: c_data, level });\n        return l_value;\n    }\n}\nexports.JsonTransformer = JsonTransformer;\nexports.default = JsonTransformer;\n//# sourceMappingURL=transformer.js.map\n\n//# sourceURL=webpack:///./transformer/transformer.js?");

/***/ }),

/***/ "./transformer/traversal.js":
/*!**********************************!*\
  !*** ./transformer/traversal.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerTraversal = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerTraversal extends transformer_1.JsonTransformer {\n    constructor(_ = {}) {\n        super(_);\n        this.transformerJsonPrimitive = ({ value }) => value;\n        this.transformerJsonArray = ({ value, data, level }) => {\n            const c_level = level + 1, c_result = [];\n            for (const c_json_value of value) {\n                c_result.push(this.transform({ value: c_json_value, data, level: c_level }));\n            }\n            return c_result;\n        };\n        this.transformerJsonObject = ({ value, data, level }) => {\n            const c_level = level + 1, c_result = {};\n            for (const [c_key, c_value] of Object.entries(value)) {\n                c_result[this.transform({ value: c_key, data, level: c_level })]\n                    = this.transform({ value: c_value, data, level: c_level });\n            }\n            return c_result;\n        };\n        this.initialize();\n    }\n}\nexports.JsonTransformerTraversal = JsonTransformerTraversal;\nexports.default = JsonTransformerTraversal;\n//# sourceMappingURL=traversal.js.map\n\n//# sourceURL=webpack:///./transformer/traversal.js?");

/***/ }),

/***/ "./transformer/traversal_breadth_first.js":
/*!************************************************!*\
  !*** ./transformer/traversal_breadth_first.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerTraversalBreadthFirst = void 0;\nconst transformer_1 = __webpack_require__(/*! ./transformer */ \"./transformer/transformer.js\");\nclass JsonTransformerTraversalBreadthFirst extends transformer_1.JsonTransformer {\n    constructor(_ = {}) {\n        super(_);\n        this.transformerJsonPrimitive = (_) => super.transformerPipe(_);\n        this.transformerJsonArray = ({ value, data, level }) => {\n            const c_level = level + 1;\n            let l_result = [];\n            for (const c_json_result of value) {\n                l_result.push(this.transform({ value: c_json_result, data, level: c_level }));\n            }\n            return super.transformerPipe({ value: l_result, data, level: c_level });\n        };\n        this.transformerJsonObject = ({ value, data, level }) => {\n            const c_level = level + 1;\n            let l_result = {};\n            for (const [c_key, c_result] of Object.entries(value)) {\n                l_result[this.transform({ value: c_key, data, level: c_level })]\n                    = this.transform({ value: c_result, data, level: c_level });\n            }\n            return super.transformerPipe({ value: l_result, data, level: c_level });\n        };\n        this.initialize();\n    }\n    transformerPipe({ value }) { return value; }\n}\nexports.JsonTransformerTraversalBreadthFirst = JsonTransformerTraversalBreadthFirst;\nexports.default = JsonTransformerTraversalBreadthFirst;\n//# sourceMappingURL=traversal_breadth_first.js.map\n\n//# sourceURL=webpack:///./transformer/traversal_breadth_first.js?");

/***/ }),

/***/ "./transformer/traversal_restricted.js":
/*!*********************************************!*\
  !*** ./transformer/traversal_restricted.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JsonTransformerTraversalRestricted = void 0;\nconst traversal_1 = __webpack_require__(/*! ./traversal */ \"./transformer/traversal.js\");\nclass JsonTransformerTraversalRestricted extends traversal_1.JsonTransformerTraversal {\n    constructor(_a = {}) {\n        var { init = { minLevel: 0,\n            maxLevel: Infinity,\n        } } = _a, _ = __rest(_a, [\"init\"]);\n        super(Object.assign({ init }, _));\n        this.initialize();\n    }\n    transformerPipe(_) {\n        const c_init = this.init;\n        return (c_init.minLevel <= _.level\n            && _.level <= c_init.maxLevel)\n            ? super.transformerPipe(_)\n            : _.value;\n    }\n}\nexports.JsonTransformerTraversalRestricted = JsonTransformerTraversalRestricted;\nexports.default = JsonTransformerTraversalRestricted;\n//# sourceMappingURL=traversal_restricted.js.map\n\n//# sourceURL=webpack:///./transformer/traversal_restricted.js?");

/***/ }),

/***/ "./transformer/types.js":
/*!******************************!*\
  !*** ./transformer/types.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.isInitMap = exports.isRegExp = exports.isJsonFunction = exports.isJsonValue = exports.isJsonObject = exports.isJsonArray = exports.isJsonPrimitive = exports.isJsonNull = exports.isJsonBoolean = exports.isJsonNumber = exports.isJsonString = exports.JsonType = void 0;\nvar JsonType;\n(function (JsonType) {\n    JsonType[JsonType[\"Primitive\"] = 1] = \"Primitive\";\n    JsonType[JsonType[\"Array\"] = 2] = \"Array\";\n    JsonType[JsonType[\"Object\"] = 3] = \"Object\";\n    JsonType[JsonType[\"String\"] = 4] = \"String\";\n    JsonType[JsonType[\"Number\"] = 5] = \"Number\";\n    JsonType[JsonType[\"Boolean\"] = 6] = \"Boolean\";\n    JsonType[JsonType[\"Null\"] = 7] = \"Null\";\n})(JsonType = exports.JsonType || (exports.JsonType = {}));\nfunction isJsonString(value) { return typeof value === 'string'; }\nexports.isJsonString = isJsonString;\nfunction isJsonNumber(value) { return Number.isFinite(value); }\nexports.isJsonNumber = isJsonNumber;\nfunction isJsonBoolean(value) { return typeof value === 'boolean'; }\nexports.isJsonBoolean = isJsonBoolean;\nfunction isJsonNull(value) { return value == null; }\nexports.isJsonNull = isJsonNull;\nfunction isJsonPrimitive(value) {\n    const t = typeof value;\n    return t == null || t === 'string' || t === 'number' || t === 'boolean';\n}\nexports.isJsonPrimitive = isJsonPrimitive;\nfunction isJsonArray(value) { return Array.isArray(value); }\nexports.isJsonArray = isJsonArray;\nfunction isJsonObject(value) { return value != null && typeof value === 'object' && !Array.isArray(value); }\nexports.isJsonObject = isJsonObject;\nfunction isJsonValue(value) { return value != null && typeof value !== 'function'; }\nexports.isJsonValue = isJsonValue;\nfunction isJsonFunction(value) { return value != null && typeof value === 'function'; }\nexports.isJsonFunction = isJsonFunction;\nfunction isRegExp(value) { return value instanceof RegExp; }\nexports.isRegExp = isRegExp;\nfunction isInitMap(value) { return value != null && typeof value === 'object' && !Array.isArray(value); }\nexports.isInitMap = isInitMap;\n//# sourceMappingURL=types.js.map\n\n//# sourceURL=webpack:///./transformer/types.js?");

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