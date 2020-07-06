"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionUnnest = exports.unnest = void 0;
const types_1 = require("../types");
function unnest(value, begin = 0) {
    const c_length = value.length, c_result = [];
    for (let i = begin; i < c_length; i++) {
        const l_value = value[i];
        if (Array.isArray(l_value)) {
            for (let j of l_value) {
                c_result.push(j);
            }
        }
        else {
            c_result.push(l_value);
        }
    }
    return c_result;
}
exports.unnest = unnest;
function JsonFunctionUnnest({ value }) {
    return (value.length === 0 || value[0] !== JsonFunctionUnnest.init.function)
        ? value
        : unnest(value, 1);
}
exports.JsonFunctionUnnest = JsonFunctionUnnest;
JsonFunctionUnnest.type = types_1.JsonType.Array;
JsonFunctionUnnest.init = { function: "$unnest" };
exports.default = JsonFunctionUnnest;
//# sourceMappingURL=array_unnest.js.map