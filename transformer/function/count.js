"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionCount = void 0;
const interfaces_1 = require("../interfaces");
function JsonFunctionCount({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionCount.init) {
        return value;
    }
    return value.length - 1;
}
exports.JsonFunctionCount = JsonFunctionCount;
JsonFunctionCount.type = interfaces_1.JsonType.Array;
JsonFunctionCount.init = "$count";
exports.default = JsonFunctionCount;
//# sourceMappingURL=count.js.map