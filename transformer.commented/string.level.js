/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { JsonTransformer } from './root';
export class JsonTransformerStringLevel extends JsonTransformer {
    constructor(options = {}) {
        var _a;
        super(Object.assign(Object.assign({}, options), { init: (_a = options === null || options === void 0 ? void 0 : options.init) !== null && _a !== void 0 ? _a : '$level' }));
        this.transformStringBefore = ({ value, level }) => { return (value === this.init) ? level : value; };
    }
}
export default JsonTransformerStringLevel;
//# sourceMappingURL=string.level.js.map