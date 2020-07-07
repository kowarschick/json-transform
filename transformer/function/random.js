"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionRandom = exports.random = void 0;
const types_1 = require("../types");
const MIN = '$min', MAX = '$max', IS_INTEGER = "$isInteger", SCALE = "$scale", GZP = "$gzp";
function random({ value, data, init, rename = name => name }) {
    var _a, _b, _c, _d;
    const c_init = init, c_min = ((_a = value === null || value === void 0 ? void 0 : value[rename(MIN)]) !== null && _a !== void 0 ? _a : c_init.min), c_max = ((_b = value === null || value === void 0 ? void 0 : value[rename(MAX)]) !== null && _b !== void 0 ? _b : c_init.max);
    const c_is_integer = ((_c = value === null || value === void 0 ? void 0 : value[rename(IS_INTEGER)]) !== null && _c !== void 0 ? _c : c_init.isInteger), c_gzp = ((_d = value === null || value === void 0 ? void 0 : value[rename(GZP)]) !== null && _d !== void 0 ? _d : c_init.gzp), c_scale_aux = data === null || data === void 0 ? void 0 : data[(value === null || value === void 0 ? void 0 : value[rename(SCALE)])], c_scale = types_1.isJsonNumber(c_scale_aux) ? c_scale_aux : c_init.scale, c_random = Math.random();
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
    return types_1.isJsonNumber(c_scale) ? l_result * c_scale : l_result;
}
exports.random = random;
exports.JsonFunctionRandom = { name: '$random',
    type: types_1.JsonType.Object,
    function: random,
    init: { min: 0,
        max: 1,
        isInteger: false,
        scale: null,
        gzp: 1,
    }
};
exports.default = exports.JsonFunctionRandom;
//# sourceMappingURL=random.js.map