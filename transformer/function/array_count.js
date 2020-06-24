"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionArrayCount = void 0;
const types_1 = require("../types");
function JsonFunctionArrayCount({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionArrayCount.init.function) {
        return value;
    }
    return value.length - 1;
}
exports.JsonFunctionArrayCount = JsonFunctionArrayCount;
JsonFunctionArrayCount.type = types_1.JsonType.Array;
JsonFunctionArrayCount.init = { function: "$count" };
exports.default = JsonFunctionArrayCount;
//# sourceMappingURL=array_count.js.map