"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionArraySum = void 0;
const types_1 = require("../types");
function JsonFunctionArraySum({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionArraySum.init.function) {
        return value;
    }
    return value.slice(1).reduce((s, v) => s + v, 0);
}
exports.JsonFunctionArraySum = JsonFunctionArraySum;
JsonFunctionArraySum.type = types_1.JsonType.Array;
JsonFunctionArraySum.init = { function: "$sum" };
exports.default = JsonFunctionArraySum;
//# sourceMappingURL=array_sum.js.map