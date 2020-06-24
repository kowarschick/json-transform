"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionObjectShuffle = void 0;
const types_1 = require("../types");
const function_1 = require("../function");
const array_shuffle_1 = require("./array_shuffle");
function JsonFunctionObjectShuffle({ value }) {
    var _a;
    const c_init = JsonFunctionObjectShuffle.init, c_value = (_a = value === null || value === void 0 ? void 0 : value[c_init.valueAttr]) !== null && _a !== void 0 ? _a : null;
    return ((value === null || value === void 0 ? void 0 : value[function_1.JsonTransformerFunction.functionAttribute]) !== c_init.function
        || !Array.isArray(c_value))
        ? value
        : array_shuffle_1.shuffle(c_value);
}
exports.JsonFunctionObjectShuffle = JsonFunctionObjectShuffle;
JsonFunctionObjectShuffle.type = types_1.JsonType.Object;
JsonFunctionObjectShuffle.init = { function: "$shuffle",
    valueAttr: "$value"
};
exports.default = JsonFunctionObjectShuffle;
//# sourceMappingURL=object_shuffle.js.map