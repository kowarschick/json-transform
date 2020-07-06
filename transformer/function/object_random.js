"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionRandom = void 0;
const types_1 = require("../types");
const function_1 = require("../function");
function JsonFunctionRandom({ value, data }) {
    var _a, _b, _c, _d, _e;
    const c_init = JsonFunctionRandom.init, c_min = ((_a = value === null || value === void 0 ? void 0 : value[c_init.minAttr]) !== null && _a !== void 0 ? _a : c_init.min), c_max = ((_b = value === null || value === void 0 ? void 0 : value[c_init.maxAttr]) !== null && _b !== void 0 ? _b : c_init.max);
    if ((value === null || value === void 0 ? void 0 : value[function_1.JsonTransformerFunction.functionAttribute]) !== c_init.function
        || !Number.isFinite(c_min)
        || !Number.isFinite(c_max)) {
        return value;
    }
    const c_is_integer = (_c = value === null || value === void 0 ? void 0 : value[c_init.isIntegerAttr]) !== null && _c !== void 0 ? _c : c_init.isInteger, c_gzp = (_d = value === null || value === void 0 ? void 0 : value[c_init.gzpAttr]) !== null && _d !== void 0 ? _d : c_init.gzp, c_scale = data[(_e = value === null || value === void 0 ? void 0 : value[c_init.scaleAttr]) !== null && _e !== void 0 ? _e : c_init.scale], c_random = Math.random();
    let l_result;
    if (c_is_integer) {
        l_result = Math.floor(c_min + c_random * (c_max + 1 - c_min));
    }
    else {
        l_result = c_min + c_random * (c_max - c_min);
    }
    if (Number.isFinite(c_gzp) && 0 <= c_gzp && c_gzp < 1) {
        l_result *= (Math.random() >= c_gzp) ? 1 : -1;
    }
    return Number.isFinite(c_scale) ? l_result * c_scale : l_result;
}
exports.JsonFunctionRandom = JsonFunctionRandom;
JsonFunctionRandom.type = types_1.JsonType.Object;
JsonFunctionRandom.init = { function: "$random",
    minAttr: "$min",
    min: 0,
    maxAttr: "$max",
    max: 1,
    isIntegerAttr: "$isInteger",
    isInteger: false,
    scaleAttr: "$scale",
    scale: null,
    gzpAttr: "$gzp",
    gzp: 1,
};
exports.default = JsonFunctionRandom;
//# sourceMappingURL=object_random.js.map