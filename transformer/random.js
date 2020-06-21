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
                isIntegerAttr: (_p = (_o = _ === null || _ === void 0 ? void 0 : _.init) === null || _o === void 0 ? void 0 : _o.isInteger) !== null && _p !== void 0 ? _p : "$isInteger",
                isInteger: (_r = (_q = _ === null || _ === void 0 ? void 0 : _.init) === null || _q === void 0 ? void 0 : _q.isInteger) !== null && _r !== void 0 ? _r : false,
                sacleAttr: (_t = (_s = _ === null || _ === void 0 ? void 0 : _.init) === null || _s === void 0 ? void 0 : _s.sacle) !== null && _t !== void 0 ? _t : "$sacle",
                sacle: (_v = (_u = _ === null || _ === void 0 ? void 0 : _.init) === null || _u === void 0 ? void 0 : _u.sacle) !== null && _v !== void 0 ? _v : null,
                gzpAttr: (_x = (_w = _ === null || _ === void 0 ? void 0 : _.init) === null || _w === void 0 ? void 0 : _w.gzp) !== null && _x !== void 0 ? _x : "$gzp",
                gzp: (_z = (_y = _ === null || _ === void 0 ? void 0 : _.init) === null || _y === void 0 ? void 0 : _y.gzp) !== null && _z !== void 0 ? _z : 1,
            } }));
        this.transformerJsonObject = ({ value }) => {
            var _a;
            const c_init = this.init;
            if (((_a = this.value) === null || _a === void 0 ? void 0 : _a[c_init.functionAttr]) !== c_init.function
                || !Number.isFinite(c_init.min)
                || !Number.isFinite(c_init.max))
                return value;
            {
                const c_min = c_init.min, c_max = c_init.max, c_is_integer = c_init.isInteger, c_scale = this.data[c_init === null || c_init === void 0 ? void 0 : c_init.scale], c_gzp = c_init.gzp;
                let l_result;
                if (c_is_integer === true) {
                    l_result = Math.floor(c_min + Math.random() * (c_max + 1 - c_min));
                }
                else {
                    l_result = c_min + Math.random() * (c_max - c_min);
                }
                if (Number.isFinite(c_gzp) && 0 <= c_gzp && c_gzp < 1) {
                    l_result *= (Math.random() >= c_gzp) ? 1 : -1;
                }
                return Number.isFinite(c_scale) ? l_result * c_scale : l_result;
            }
            return value;
        };
    }
}
exports.JsonTransformerRandom = JsonTransformerRandom;
exports.default = JsonTransformerSome;
//# sourceMappingURL=random.js.map