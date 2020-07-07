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
exports.JsonTransformerTraversalRestricted = void 0;
const traversal_1 = require("./traversal");
class JsonTransformerTraversalRestricted extends traversal_1.JsonTransformerTraversal {
    constructor(_a = {}) {
        var { init = { minLevel: 0,
            maxLevel: Infinity,
        } } = _a, _ = __rest(_a, ["init"]);
        super(Object.assign({ init }, _));
        this.initialize();
    }
    transformerPipe(_) {
        const c_init = this.init;
        return (c_init.minLevel <= _.level
            && _.level <= c_init.maxLevel)
            ? super.transformerPipe(_)
            : _.value;
    }
}
exports.JsonTransformerTraversalRestricted = JsonTransformerTraversalRestricted;
exports.default = JsonTransformerTraversalRestricted;
//# sourceMappingURL=traversal_restricted.js.map