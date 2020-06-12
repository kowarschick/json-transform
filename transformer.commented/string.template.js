/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { JsonTransformer } from './root';
export class JsonTransformerStringTemplate extends JsonTransformer {
    constructor(options = {}) {
        var _a;
        super(Object.assign(Object.assign({}, options), { init: (_a = options === null || options === void 0 ? void 0 : options.init) !== null && _a !== void 0 ? _a : /\${([\w\d@_-]+)}/ }));
        this.transformStringBefore = ({ value, data }) => {
            const c_regexp = new RegExp(this.init, 'g'), c_value = value, c_match = c_value.match(new RegExp(`^${this.init.toString().slice(1, -1)}$`)), f_replace_placeholders = (p_value) => {
                const c_placeholders = p_value.matchAll(c_regexp), c_replacers = []; // these are not sugar replacers :-)
                let l_result = c_placeholders.next();
                if (l_result.done) {
                    return p_value;
                }
                while (!l_result.done) {
                    const c_match = l_result.value, c_data = data[c_match[1]];
                    if (c_data != null) {
                        c_replacers.push([c_match[0], f_replace_placeholders(c_data)]);
                    }
                    l_result = c_placeholders.next();
                }
                for (const r of c_replacers) {
                    p_value = p_value.replace(r[0], r[1]);
                }
                return p_value;
            };
            return c_match != null
                ? data[c_match[1]]
                : f_replace_placeholders(c_value);
        };
    }
}
export default JsonTransformerStringTemplate;
//# sourceMappingURL=string.template.js.map