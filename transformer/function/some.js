"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionSome = exports.some = void 0;
const types_1 = require("../types");
function some(value, begin = 0) {
    const c_length = value.length;
    return (c_length === begin)
        ? null
        : value[Math.floor(Math.random() * (c_length - begin)) + begin];
}
exports.some = some;
function JsonFunctionSome({ value, init }) {
    if (value.length === 0 || value[0] !== (init === null || init === void 0 ? void 0 : init.name)) {
        return value;
    }
    return some(value, 1);
}
exports.JsonFunctionSome = JsonFunctionSome;
JsonFunctionSome.type = types_1.JsonType.Array;
JsonFunctionSome.name = "$some";
Object.freeze(JsonFunctionSome);
exports.default = JsonFunctionSome;
//# sourceMappingURL=some.js.map