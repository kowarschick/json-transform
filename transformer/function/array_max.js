"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionArrayMax = void 0;
const interfaces_1 = require("../interfaces");
function JsonFunctionArrayMax({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionArrayMax.init) {
        return value;
    }
    return value.slice(1).reduce((m, v) => Math.max(m, v), -Infinity);
}
exports.JsonFunctionArrayMax = JsonFunctionArrayMax;
JsonFunctionArrayMax.type = interfaces_1.EnumJsonFunctionType.JsonArray;
JsonFunctionArrayMax.init = "$max";
exports.default = JsonFunctionArrayMax;
//# sourceMappingURL=array_max.js.map