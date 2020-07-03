"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionMax = void 0;
const types_1 = require("../types");
function JsonFunctionMax({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionMax.init.function) {
        return value;
    }
    return value.slice(1).reduce((m, v) => Math.max(m, v), JsonFunctionMax.init.default);
}
exports.JsonFunctionMax = JsonFunctionMax;
JsonFunctionMax.type = types_1.JsonType.Array;
JsonFunctionMax.init = { function: "$max",
    default: -Infinity
};
exports.default = JsonFunctionMax;
//# sourceMappingURL=array_max.js.map