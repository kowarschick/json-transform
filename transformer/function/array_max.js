"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionArrayMax = void 0;
const types_1 = require("../types");
function JsonFunctionArrayMax({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionArrayMax.init.function) {
        return value;
    }
    return value.slice(1).reduce((m, v) => Math.max(m, v), -Infinity);
}
exports.JsonFunctionArrayMax = JsonFunctionArrayMax;
JsonFunctionArrayMax.type = types_1.JsonType.Array;
JsonFunctionArrayMax.init = { function: "$max" };
exports.default = JsonFunctionArrayMax;
//# sourceMappingURL=array_max.js.map