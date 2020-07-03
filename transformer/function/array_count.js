"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionCount = void 0;
const types_1 = require("../types");
function JsonFunctionCount({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionCount.init.function) {
        return value;
    }
    return value.length - 1;
}
exports.JsonFunctionCount = JsonFunctionCount;
JsonFunctionCount.type = types_1.JsonType.Array;
JsonFunctionCount.init = { function: "$count" };
exports.default = JsonFunctionCount;
//# sourceMappingURL=array_count.js.map