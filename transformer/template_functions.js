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
exports.JsonTransformerTemplateFunctions = void 0;
const transformer_1 = require("./transformer");
class JsonTransformerTemplateFunctions extends transformer_1.JsonTransformer {
    constructor(_a = {}) {
        var { init = /\${([\w\d@_-]+)(}|\([\s\w\d@_,:'"<>{}\[\]-]*\)})/ } = _a, _ = __rest(_a, ["init"]);
        super(Object.assign({ init }, _));
        this.transformerJsonString = ({ value, data }) => {
            const c_regexp = this.init, c_value = value, c_match = c_value.match(new RegExp(`^${c_regexp.toString().slice(1, -1)}$`)), f_split_placeholder = (p_name, p_arguments) => {
                var _a;
                const c_name = p_name == null ? null : data === null || data === void 0 ? void 0 : data[p_name], c_arguments = (_a = p_arguments === null || p_arguments === void 0 ? void 0 : p_arguments.slice(1, -2).replace(/'/g, '"')) !== null && _a !== void 0 ? _a : '';
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
                var _a;
                const c_placeholders = p_value.matchAll(new RegExp(c_regexp, 'g')), c_replacers = [];
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
                                : (p_string_cast ? ((_a = c_data) !== null && _a !== void 0 ? _a : '') : c_data);
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
        this.initialize();
    }
}
exports.JsonTransformerTemplateFunctions = JsonTransformerTemplateFunctions;
exports.default = JsonTransformerTemplateFunctions;
//# sourceMappingURL=template_functions.js.map