"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionObjectUnnest = void 0;
const types_1 = require("../types");
const function_1 = require("../function");
const array_unnest_1 = require("./array_unnest");
function JsonFunctionObjectUnnest({ value }) {
    const c_init = JsonFunctionObjectUnnest.init, c_value = value === null || value === void 0 ? void 0 : value[c_init.valueAttr];
    return ((value === null || value === void 0 ? void 0 : value[function_1.JsonTransformerFunction.functionAttribute]) !== c_init.function
        || !Array.isArray(c_value))
        ? value
        : array_unnest_1.unnest(c_value);
}
exports.JsonFunctionObjectUnnest = JsonFunctionObjectUnnest;
JsonFunctionObjectUnnest.type = types_1.JsonType.Object;
JsonFunctionObjectUnnest.init = { function: "$unnest",
    valueAttr: "$value"
};
exports.default = JsonFunctionObjectUnnest;
//# sourceMappingURL=object_unnest.js.map