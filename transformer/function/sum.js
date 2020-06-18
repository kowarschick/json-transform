"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionSum = void 0;
const interfaces_1 = require("../interfaces");
function JsonFunctionSum({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionSum.init) {
        return value;
    }
    return value.slice(1).reduce((s, v) => s + v, 0);
}
exports.JsonFunctionSum = JsonFunctionSum;
JsonFunctionSum.type = interfaces_1.JsonType.Array;
JsonFunctionSum.init = "$sum";
exports.default = JsonFunctionSum;
//# sourceMappingURL=sum.js.map