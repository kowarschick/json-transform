"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionSum = void 0;
const types_1 = require("../types");
function JsonFunctionSum({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionSum.init.function) {
        return value;
    }
    return value.slice(1).reduce((s, v) => s + v, 0);
}
exports.JsonFunctionSum = JsonFunctionSum;
JsonFunctionSum.type = types_1.JsonType.Array;
JsonFunctionSum.init = { function: "$sum" };
exports.default = JsonFunctionSum;
//# sourceMappingURL=sum.js.map