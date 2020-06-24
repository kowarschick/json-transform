"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionArrayMin = void 0;
const types_1 = require("../types");
function JsonFunctionArrayMin({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionArrayMin.init.function) {
        return value;
    }
    return value.slice(1).reduce((m, v) => Math.min(m, v), Infinity);
}
exports.JsonFunctionArrayMin = JsonFunctionArrayMin;
JsonFunctionArrayMin.type = types_1.JsonType.Array;
JsonFunctionArrayMin.init = { function: "$min" };
exports.default = JsonFunctionArrayMin;
//# sourceMappingURL=array_min.js.map