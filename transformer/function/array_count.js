"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionArrayCount = void 0;
const interfaces_1 = require("../interfaces");
function JsonFunctionArrayCount({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionArrayCount.init) {
        return value;
    }
    return value.length - 1;
}
exports.JsonFunctionArrayCount = JsonFunctionArrayCount;
JsonFunctionArrayCount.type = interfaces_1.EJsonType.Array;
JsonFunctionArrayCount.init = "$count";
exports.default = JsonFunctionArrayCount;
//# sourceMappingURL=array_count.js.map