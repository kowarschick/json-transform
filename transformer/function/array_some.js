"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionArraySome = void 0;
const interfaces_1 = require("../interfaces");
function JsonFunctionArraySome({ value }) {
    const c_length = value.length;
    if (c_length === 0 || value[0] !== JsonFunctionArraySome.init) {
        return value;
    }
    return (c_length === 1)
        ? null
        : value[Math.floor(Math.random() * (c_length - 1)) + 1];
}
exports.JsonFunctionArraySome = JsonFunctionArraySome;
JsonFunctionArraySome.type = interfaces_1.EJsonType.Array;
JsonFunctionArraySome.init = "$some";
exports.default = JsonFunctionArraySome;
//# sourceMappingURL=array_some.js.map