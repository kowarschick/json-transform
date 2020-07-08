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
exports.JsonTransformerStringReplace = void 0;
const types_1 = require("./types");
const transformer_1 = require("./transformer");
class JsonTransformerStringReplace extends transformer_1.JsonTransformer {
    constructor(_a = {}) {
        var { init = { regexp: /^(@|\${)/,
            jsonOnly: true,
        } } = _a, _ = __rest(_a, ["init"]);
        super(Object.assign({ init }, _));
        this.transformerJsonString = ({ value, data }) => {
            var _a, _b;
            const c_init = this.init, c_regexp = ((_a = c_init.regexp) !== null && _a !== void 0 ? _a : /^(@|\${)/), c_json_only = ((_b = c_init.jsonOnly) !== null && _b !== void 0 ? _b : true), c_value = data[value];
            return c_value != null
                && value.match(c_regexp)
                && (!c_json_only || types_1.isJsonValue(c_value))
                ? c_value
                : value;
        };
        this.initialize();
    }
}
exports.JsonTransformerStringReplace = JsonTransformerStringReplace;
exports.default = JsonTransformerStringReplace;
//# sourceMappingURL=string_replace.js.map