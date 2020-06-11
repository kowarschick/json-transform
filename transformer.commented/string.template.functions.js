"use strict";
/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerStringTemplateFunctions = void 0;
const root_1 = require("./root");
class JsonTransformerStringTemplateFunctions extends root_1.JsonTransformer {
    constructor(options = {}) {
        super({ ...options, init: options?.init ?? /\${([\w\d@_-]+)(}|\([\s\w\d@_,:'"<>{}\[\]-]*\)})/ });
        this.transformStringBefore = ({ value, data }) => {
            const c_regexp = new RegExp(this.init, 'g'), c_value = value, c_match = c_value.match(new RegExp(`^${this.init.toString().slice(1, -1)}$`)), f_split_placeholder = (p_name, p_arguments) => {
                const c_name = p_name == null ? null : data[p_name], c_arguments = p_arguments?.slice(1, -2).replace(/'/g, '"') ?? '';
                let l_json_value;
                if (p_arguments.length > 1) {
                    try {
                        l_json_value = JSON.parse(c_arguments);
                    }
                    catch (e) {
                        l_json_value = e.message;
                    }
                    return [c_name, l_json_value];
                }
                else {
                    return [c_name, null];
                }
            }, f_replace_placeholders = (p_value, p_string_cast) => {
                const c_placeholders = p_value.matchAll(c_regexp), c_replacers = []; // these are not sugar replacers :-)
                let l_result = c_placeholders.next();
                if (l_result.done) {
                    return p_value;
                }
                while (!l_result.done) {
                    const c_match = l_result.value, [c_data, c_json_value] = f_split_placeholder(c_match[1], c_match[2]);
                    if (c_data != null) {
                        let l_data;
                        if (typeof c_data === 'function') {
                            const c_data_computed = c_data({ value: c_json_value, data, level: this.level });
                            l_data = (!p_string_cast || typeof c_data_computed === 'string')
                                ? c_data_computed
                                : JSON.stringify(c_data_computed);
                        }
                        else {
                            l_data = (c_json_value != null)
                                ? c_match[0]
                                : (p_string_cast ? (c_data ?? '') : c_data);
                        }
                        c_replacers.push([c_match[0], l_data]);
                    }
                    l_result = c_placeholders.next();
                }
                if (p_string_cast) {
                    for (const r of c_replacers) {
                        p_value = p_value.replace(r[0], r[1]);
                    }
                    return p_value;
                }
                return c_replacers[0][1];
            };
            return f_replace_placeholders(c_value, c_match == null || c_match.length == 1);
        };
    }
}
exports.JsonTransformerStringTemplateFunctions = JsonTransformerStringTemplateFunctions;
exports.default = JsonTransformerStringTemplateFunctions;