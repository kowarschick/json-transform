"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerRandom = void 0;
const types_1 = require("./types");
const transformer_1 = require("./transformer");
const RANDOM = '$random', MIN = '$min', MAX = '$max', IS_INTEGER = "$isInteger", SCALE = "$scale", GZP = "$gzp";
class JsonTransformerRandom extends transformer_1.JsonTransformer {
    constructor(_a = {}) {
        var { init = { min: 0,
            max: 1,
            isInteger: false,
            scale: null,
            gzp: 1,
        } } = _a, _ = __rest(_a, ["init"]);
        super(Object.assign({ init }, _));
        this.transformerJsonObject = ({ value, data }) => {
            var _a, _b, _c, _d;
            const c_init = this.init, c_min = ((_a = value === null || value === void 0 ? void 0 : value[this.rename(MIN)]) !== null && _a !== void 0 ? _a : c_init.min), c_max = ((_b = value === null || value === void 0 ? void 0 : value[this.rename(MAX)]) !== null && _b !== void 0 ? _b : c_init.max);
            if (!this.isFunctionName(RANDOM, value)
                || !Number.isFinite(c_min)
                || !Number.isFinite(c_max)) {
                return value;
            }
            const c_is_integer = ((_c = value === null || value === void 0 ? void 0 : value[this.rename(IS_INTEGER)]) !== null && _c !== void 0 ? _c : c_init.isInteger), c_gzp = ((_d = value === null || value === void 0 ? void 0 : value[this.rename(GZP)]) !== null && _d !== void 0 ? _d : c_init.gzp), c_scale_aux = data === null || data === void 0 ? void 0 : data[(value === null || value === void 0 ? void 0 : value[this.rename(SCALE)])], c_scale = types_1.isJsonNumber(c_scale_aux) ? c_scale_aux : c_init.scale, c_random = Math.random();
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
        };
        this.initialize();
    }
}
exports.JsonTransformerRandom = JsonTransformerRandom;
exports.default = JsonTransformerRandom;
//# sourceMappingURL=random.js.map