"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionSome = void 0;
const interfaces_1 = require("../interfaces");
function JsonFunctionSome({ value }) {
    const c_length = value.length;
    if (c_length === 0 || value[0] !== JsonFunctionSome.init) {
        return value;
    }
    return (c_length === 1)
        ? null
        : value[Math.floor(Math.random() * (c_length - 1)) + 1];
}
exports.JsonFunctionSome = JsonFunctionSome;
JsonFunctionSome.type = interfaces_1.JsonType.Array;
JsonFunctionSome.init = "$some";
exports.default = JsonFunctionSome;
//# sourceMappingURL=some.js.map