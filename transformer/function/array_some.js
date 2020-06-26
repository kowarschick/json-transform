"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionSome = void 0;
const types_1 = require("../types");
function JsonFunctionSome({ value }) {
    const c_length = value.length;
    if (c_length === 0 || value[0] !== JsonFunctionSome.init.function) {
        return value;
    }
    return (c_length === 1)
        ? null
        : value[Math.floor(Math.random() * (c_length - 1)) + 1];
}
exports.JsonFunctionSome = JsonFunctionSome;
JsonFunctionSome.type = types_1.JsonType.Array;
JsonFunctionSome.init = { function: "$some" };
exports.default = JsonFunctionSome;
//# sourceMappingURL=array_some.js.map