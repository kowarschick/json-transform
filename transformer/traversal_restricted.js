"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerTraversalRestricted = void 0;
const traversal_1 = require("./traversal");
class JsonTransformerTraversalRestricted extends traversal_1.JsonTransformerTraversal {
    constructor(options = {}) {
        var _a, _b, _c, _d;
        super(Object.assign(Object.assign({}, options), { init: { minLevel: (_b = (_a = options === null || options === void 0 ? void 0 : options.init) === null || _a === void 0 ? void 0 : _a.minLevel) !== null && _b !== void 0 ? _b : 0,
                maxLevel: (_d = (_c = options === null || options === void 0 ? void 0 : options.init) === null || _c === void 0 ? void 0 : _c.maxLevel) !== null && _d !== void 0 ? _d : Infinity,
            } }));
    }
    transformerPipe(_) {
        return (this.init.minLevel <= _.level && _.level <= this.init.maxLevel)
            ? super.transformerPipe(_)
            : _.value;
    }
}
exports.JsonTransformerTraversalRestricted = JsonTransformerTraversalRestricted;
exports.default = JsonTransformerTraversalRestricted;
//# sourceMappingURL=traversal_restricted.js.map