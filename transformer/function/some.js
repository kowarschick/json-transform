"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionSome = exports.some = void 0;
const types_1 = require("../types");
function some({ value }, begin = 0) {
    const c_length = value.length;
    return (c_length === begin)
        ? null
        : value[Math.floor(Math.random() * (c_length - begin)) + begin];
}
exports.some = some;
exports.JsonFunctionSome = { name: '$some',
    type: types_1.JsonType.Array,
    function: some,
};
exports.default = exports.JsonFunctionSome;
//# sourceMappingURL=some.js.map