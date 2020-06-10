"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionArraySum = void 0;
const interfaces_1 = require("~/interfaces");
function JsonFunctionArraySum({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionArraySum.init) {
        return value;
    }
    return value.slice(1).reduce((s, v) => s + v, 0);
}
exports.JsonFunctionArraySum = JsonFunctionArraySum;
JsonFunctionArraySum.type = interfaces_1.EnumJsonFunctionType.Array;
JsonFunctionArraySum.init = "$sum";
exports.default = JsonFunctionArraySum;
//# sourceMappingURL=array.sum.js.map