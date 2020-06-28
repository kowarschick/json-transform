"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerTemplate = void 0;
const transformer_1 = require("./transformer");
class JsonTransformerTemplate extends transformer_1.JsonTransformer {
    constructor(_ = {}) {
        var _a;
        super(Object.assign(Object.assign({}, _), { init: (_a = _ === null || _ === void 0 ? void 0 : _.init) !== null && _a !== void 0 ? _a : { template: /\${([\w\d@_-]+)}/ } }));
        this.transformerJsonString = ({ value, data }) => {
            const c_regexp = this.init.template, c_value = value, c_match = c_value.match(new RegExp(`^${c_regexp.toString().slice(1, -1)}$`)), f_replace_placeholders = (p_value) => {
                const c_placeholders = p_value.matchAll(new RegExp(c_regexp, 'g')), c_replacers = [];
                let l_result = c_placeholders.next();
                if (l_result.done) {
                    return p_value;
                }
                while (!l_result.done) {
                    const c_match = l_result.value, c_data = data[c_match[1]], c_data_string = typeof c_data === 'string' ? c_data : JSON.stringify(c_data);
                    if (c_data != null) {
                        c_replacers.push([c_match[0], f_replace_placeholders(c_data_string)]);
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
exports.JsonTransformerTemplate = JsonTransformerTemplate;
exports.default = JsonTransformerTemplate;
//# sourceMappingURL=template.js.map