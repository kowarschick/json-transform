"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionMin = void 0;
const interfaces_1 = require("../interfaces");
function JsonFunctionMin({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionMin.init) {
        return value;
    }
    return value.slice(1).reduce((m, v) => Math.min(m, v), Infinity);
}
exports.JsonFunctionMin = JsonFunctionMin;
JsonFunctionMin.type = interfaces_1.JsonType.Array;
JsonFunctionMin.init = "$min";
exports.default = JsonFunctionMin;
//# sourceMappingURL=min.js.map