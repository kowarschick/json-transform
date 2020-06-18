"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionMax = void 0;
const interfaces_1 = require("../interfaces");
function JsonFunctionMax({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionMax.init) {
        return value;
    }
    return value.slice(1).reduce((m, v) => Math.max(m, v), -Infinity);
}
exports.JsonFunctionMax = JsonFunctionMax;
JsonFunctionMax.type = interfaces_1.JsonType.Array;
JsonFunctionMax.init = "$max";
exports.default = JsonFunctionMax;
//# sourceMappingURL=max.js.map