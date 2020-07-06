"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionDuplicate = void 0;
const types_1 = require("../types");
const traversal_1 = require("../traversal");
const function_1 = require("../function");
function JsonFunctionDuplicate({ value }) {
    var _a, _b, _c;
    const c_init = JsonFunctionDuplicate.init;
    if ((value === null || value === void 0 ? void 0 : value[function_1.JsonTransformerFunction.functionAttribute]) !== c_init.function) {
        return value;
    }
    const c_clone_transformer = new traversal_1.JsonTransformerTraversal(), c_value = (_a = value === null || value === void 0 ? void 0 : value[c_init.valueAttr]) !== null && _a !== void 0 ? _a : null, c_times = ((_b = value === null || value === void 0 ? void 0 : value[c_init.timesAttr]) !== null && _b !== void 0 ? _b : c_init.times), c_within_array = ((_c = value === null || value === void 0 ? void 0 : value[c_init.withinArrayAttr]) !== null && _c !== void 0 ? _c : c_init.withinArray), c_result = [];
    if (c_within_array && Array.isArray(c_value)) {
        for (let l_value of c_value) {
            for (let i = 0; i < c_times; i++) {
                c_result.push(c_clone_transformer.transform({ value: l_value }));
            }
        }
    }
    else {
        for (let i = 0; i < c_times; i++) {
            c_result.push(c_clone_transformer.transform({ value: c_value }));
        }
    }
    return c_result;
}
exports.JsonFunctionDuplicate = JsonFunctionDuplicate;
JsonFunctionDuplicate.type = types_1.JsonType.Object;
JsonFunctionDuplicate.init = { function: "$duplicate",
    valueAttr: "$value",
    timesAttr: "$times",
    times: 1,
    withinArrayAttr: "$withinArray",
    withinArray: false
};
exports.default = JsonFunctionDuplicate;
//# sourceMappingURL=object_duplicate.js.map