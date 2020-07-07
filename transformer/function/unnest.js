"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionUnnest = exports.unnest = void 0;
const types_1 = require("../types");
function unnest({ value }, begin = 0) {
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
exports.JsonFunctionUnnest = { name: '$unnest',
    type: types_1.JsonType.Array,
    function: unnest,
};
exports.default = exports.JsonFunctionUnnest;
//# sourceMappingURL=unnest.js.map