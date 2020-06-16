"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionArrayMin = void 0;
const interfaces_1 = require("../interfaces");
function JsonFunctionArrayMin({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionArrayMin.init) {
        return value;
    }
    return value.slice(1).reduce((m, v) => Math.min(m, v), Infinity);
}
exports.JsonFunctionArrayMin = JsonFunctionArrayMin;
JsonFunctionArrayMin.type = interfaces_1.EnumJsonFunctionType.JsonArray;
JsonFunctionArrayMin.init = "$min";
exports.default = JsonFunctionArrayMin;
//# sourceMappingURL=array_min.js.map