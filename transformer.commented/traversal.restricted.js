/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { JsonTransformerTraversal } from './traversal';
export class JsonTransformerTraversalRestricted extends JsonTransformerTraversal {
    constructor(options = {}) {
        var _a, _b, _c, _d;
        super(Object.assign(Object.assign({}, options), { init: { minLevel: (_b = (_a = options === null || options === void 0 ? void 0 : options.init) === null || _a === void 0 ? void 0 : _a.minLevel) !== null && _b !== void 0 ? _b : 0,
                maxLevel: (_d = (_c = options === null || options === void 0 ? void 0 : options.init) === null || _c === void 0 ? void 0 : _c.maxLevel) !== null && _d !== void 0 ? _d : Infinity,
            } }));
    }
    transformPipe(_) {
        return (this.init.minLevel <= _.level && _.level <= this.init.maxLevel)
            ? super.transformPipe(_)
            : _.value;
    }
}
export default JsonTransformerTraversalRestricted;
//# sourceMappingURL=traversal.restricted.js.map