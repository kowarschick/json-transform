"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerRandom = void 0;
const transformer_1 = require("./transformer");
class JsonTransformerRandom extends transformer_1.JsonTransformer {
    constructor(_ = {}) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        super(Object.assign(Object.assign({}, _), { init: { functionAttr: (_b = (_a = _ === null || _ === void 0 ? void 0 : _.init) === null || _a === void 0 ? void 0 : _a.functionAttr) !== null && _b !== void 0 ? _b : "$function",
                function: (_d = (_c = _ === null || _ === void 0 ? void 0 : _.init) === null || _c === void 0 ? void 0 : _c.function) !== null && _d !== void 0 ? _d : "$random",
                minAttr: (_f = (_e = _ === null || _ === void 0 ? void 0 : _.init) === null || _e === void 0 ? void 0 : _e.minAttr) !== null && _f !== void 0 ? _f : "$min",
                min: (_h = (_g = _ === null || _ === void 0 ? void 0 : _.init) === null || _g === void 0 ? void 0 : _g.min) !== null && _h !== void 0 ? _h : 0,
                maxAttr: (_k = (_j = _ === null || _ === void 0 ? void 0 : _.init) === null || _j === void 0 ? void 0 : _j.maxAttr) !== null && _k !== void 0 ? _k : "$max",
                max: (_m = (_l = _ === null || _ === void 0 ? void 0 : _.init) === null || _l === void 0 ? void 0 : _l.max) !== null && _m !== void 0 ? _m : 1,
                isIntegerAttr: (_p = (_o = _ === null || _ === void 0 ? void 0 : _.init) === null || _o === void 0 ? void 0 : _o.isIntegerAttr) !== null && _p !== void 0 ? _p : "$isInteger",
                isInteger: (_r = (_q = _ === null || _ === void 0 ? void 0 : _.init) === null || _q === void 0 ? void 0 : _q.isInteger) !== null && _r !== void 0 ? _r : false,
                scaleAttr: (_t = (_s = _ === null || _ === void 0 ? void 0 : _.init) === null || _s === void 0 ? void 0 : _s.scale) !== null && _t !== void 0 ? _t : "$scale",
                scale: (_v = (_u = _ === null || _ === void 0 ? void 0 : _.init) === null || _u === void 0 ? void 0 : _u.scale) !== null && _v !== void 0 ? _v : null,
                gzpAttr: (_x = (_w = _ === null || _ === void 0 ? void 0 : _.init) === null || _w === void 0 ? void 0 : _w.gzp) !== null && _x !== void 0 ? _x : "$gzp",
                gzp: (_z = (_y = _ === null || _ === void 0 ? void 0 : _.init) === null || _y === void 0 ? void 0 : _y.gzp) !== null && _z !== void 0 ? _z : 1,
            } }));
        this.transformerJsonObject = ({ value, data }) => {
            var _a, _b, _c, _d, _e;
            const c_init = this.init, c_min = (_a = value === null || value === void 0 ? void 0 : value[c_init.minAttr]) !== null && _a !== void 0 ? _a : c_init.min, c_max = (_b = value === null || value === void 0 ? void 0 : value[c_init.maxAttr]) !== null && _b !== void 0 ? _b : c_init.max;
            if ((value === null || value === void 0 ? void 0 : value[c_init.functionAttr]) !== c_init.function
                || !Number.isFinite(c_min)
                || !Number.isFinite(c_max))
                return value;
            {
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
        };
    }
}
exports.JsonTransformerRandom = JsonTransformerRandom;
exports.default = JsonTransformerRandom;
//# sourceMappingURL=random.js.map