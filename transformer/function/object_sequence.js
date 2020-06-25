"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionObjectSequence = void 0;
const types_1 = require("../types");
const function_1 = require("../function");
function JsonFunctionObjectSequence({ value, data }) {
    var _a, _b, _c;
    const c_init = JsonFunctionObjectSequence.init;
    if ((value === null || value === void 0 ? void 0 : value[function_1.JsonTransformerFunction.functionAttribute]) !== c_init.function) {
        return value;
    }
    const c_min = ((_a = value === null || value === void 0 ? void 0 : value[c_init.minAttr]) !== null && _a !== void 0 ? _a : c_init.min), c_max = ((_b = value === null || value === void 0 ? void 0 : value[c_init.maxAttr]) !== null && _b !== void 0 ? _b : c_init.max), c_format = ((_c = value === null || value === void 0 ? void 0 : value[c_init.formatAttr]) !== null && _c !== void 0 ? _c : c_init.format), c_format_string = (typeof c_format === 'string') ? c_format : '', c_format_function = (typeof c_format === 'function') ? c_format : null, c_result = [];
    for (let i = c_min; i <= c_max; i++) {
        c_result.push(typeof c_format_function === 'function'
            ? c_format_function(i)
            : (c_format_string !== '')
                ? c_format_string + i
                : i);
    }
    return c_result;
}
exports.JsonFunctionObjectSequence = JsonFunctionObjectSequence;
JsonFunctionObjectSequence.type = types_1.JsonType.Object;
JsonFunctionObjectSequence.init = { function: "$sequence",
    minAttr: "$min",
    min: 1,
    maxAttr: "$max",
    max: 1,
    formatAttr: "$format",
    format: null
};
exports.default = JsonFunctionObjectSequence;
//# sourceMappingURL=object_sequence.js.map