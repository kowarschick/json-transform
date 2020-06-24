"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionArraySome = void 0;
const types_1 = require("../types");
function JsonFunctionArraySome({ value }) {
    const c_length = value.length;
    if (c_length === 0 || value[0] !== JsonFunctionArraySome.init.function) {
        return value;
    }
    return (c_length === 1)
        ? null
        : value[Math.floor(Math.random() * (c_length - 1)) + 1];
}
exports.JsonFunctionArraySome = JsonFunctionArraySome;
JsonFunctionArraySome.type = types_1.JsonType.Array;
JsonFunctionArraySome.init = { function: "$some" };
exports.default = JsonFunctionArraySome;
//# sourceMappingURL=array_some.js.map