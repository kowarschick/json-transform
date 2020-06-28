"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionObjectCount = void 0;
const types_1 = require("../types");
const function_1 = require("../function");
function JsonFunctionObjectCount({ value }) {
    var _a;
    const c_init = JsonFunctionObjectCount.init, c_value = (_a = value === null || value === void 0 ? void 0 : value[c_init.valueAttr]) !== null && _a !== void 0 ? _a : null;
    return ((value === null || value === void 0 ? void 0 : value[function_1.JsonTransformerFunction.functionAttribute]) !== c_init.function
        || !Array.isArray(c_value))
        ? value
        : c_value.length - 1;
}
exports.JsonFunctionObjectCount = JsonFunctionObjectCount;
JsonFunctionObjectCount.type = types_1.JsonType.Object;
JsonFunctionObjectCount.init = { function: "$count",
    valueAttr: "$value"
};
exports.default = JsonFunctionObjectCount;
//# sourceMappingURL=object_count.js.map