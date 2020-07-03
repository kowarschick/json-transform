"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionMin = void 0;
const types_1 = require("../types");
function JsonFunctionMin({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionMin.init.function) {
        return value;
    }
    return value.slice(1).reduce((m, v) => Math.min(m, v), JsonFunctionMin.init.default);
}
exports.JsonFunctionMin = JsonFunctionMin;
JsonFunctionMin.type = types_1.JsonType.Array;
JsonFunctionMin.init = { function: "$min",
    default: Infinity
};
exports.default = JsonFunctionMin;
//# sourceMappingURL=array_min.js.map