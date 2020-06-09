"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerTraversalRestricted = void 0;
const root_1 = require("./root");
class JsonTransformerTraversalRestricted extends root_1.JsonTransformer {
    constructor(options = {}) {
        var _a, _b, _c, _d;
        super(Object.assign(Object.assign({}, options), { init: { minLevel: (_b = (_a = options === null || options === void 0 ? void 0 : options.init) === null || _a === void 0 ? void 0 : _a.minLevel) !== null && _b !== void 0 ? _b : 0,
                maxLevel: (_d = (_c = options === null || options === void 0 ? void 0 : options.init) === null || _c === void 0 ? void 0 : _c.maxLevel) !== null && _d !== void 0 ? _d : Infinity,
            } }));
        this.transformArrayAfter = (value, data, level) => {
            const c_level = level + 1, c_result = [];
            for (const c_json_value of value) {
                c_result.push(this.transform(c_json_value, data, c_level));
            }
            return c_result;
        };
        this.transformMapAfter = (value, data, level) => {
            const c_level = level + 1, c_result = {};
            for (const [c_key, c_value] of Object.entries(value)) {
                c_result[this.transform(c_key, data, c_level)]
                    = this.transform(c_value, data, c_level);
            }
            return c_result;
        };
    }
    pipe(value, data, level) {
        return (this.init.minLevel <= level && level <= this.init.maxLevel)
            ? super.pipe(value, data, level)
            : value;
    }
}
exports.JsonTransformerTraversalRestricted = JsonTransformerTraversalRestricted;
exports.default = JsonTransformerTraversalRestricted;
//# sourceMappingURL=traversal.restricted.js.map