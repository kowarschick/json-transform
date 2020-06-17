"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformer = void 0;
const interfaces_1 = require("./interfaces");
;
;
class JsonTransformer {
    constructor({ init = undefined, data = {}, level = 0, transformer = undefined, doit = interfaces_1.DoIt.Before, } = {}) {
        Object.assign(this, { init, data, level, transformer, doit });
        this._root = this;
        if (transformer != null) {
            Object.setPrototypeOf(this.transformer.data, this.data);
        }
        ;
    }
    get root() { return this._root; }
    ;
    transformerPipe(_) { var _a, _b; return (_b = (_a = this.transformer) === null || _a === void 0 ? void 0 : _a.transform(_)) !== null && _b !== void 0 ? _b : _.value; }
    transform({ value, data = {}, level = 0 }) {
        const c_data = Object.assign({}, data);
        Object.setPrototypeOf(c_data, this.data);
        const f_apply_functions = () => {
            for (const [c_key, c_test] of Object.entries(c_transformer_tests)) {
                const c_transformer = this[c_key];
                if (c_transformer != null && c_test(l_value)) {
                    l_value = c_transformer({ value: value, data: c_data, level });
                }
            }
        };
        let l_value = value;
        if (this.doit === interfaces_1.DoIt.Before || this.doit === interfaces_1.DoIt.Twice)
            f_apply_functions();
        l_value = this.transformerPipe({ value: l_value, data: c_data, level });
        if (this.doit === interfaces_1.DoIt.After || this.doit === interfaces_1.DoIt.Twice)
            f_apply_functions();
        return l_value;
    }
    pipe(transformer) {
        const c_data = transformer.data;
        Object.setPrototypeOf(c_data, this.data);
        transformer._root = this._root;
        this.transformer = transformer;
        return transformer;
    }
    static isJsonPrimitive(value) {
        const t = typeof value;
        return t == null || t === 'string' || t === 'number' || t === 'boolean';
    }
    static isJsonArray(value) { return Array.isArray(value); }
    static isJsonObject(value) { return value != null && typeof value === 'object' && !Array.isArray(value); }
    static isJsonString(value) { return typeof value === 'string'; }
    static isJsonNumber(value) { return typeof value === 'number'; }
    static isJsonBoolean(value) { return typeof value === 'boolean'; }
    static isJsonNull(value) { return value == null; }
}
exports.JsonTransformer = JsonTransformer;
const c_transformer_tests = { transformerJsonPrimitive: JsonTransformer.isJsonPrimitive,
    transformerJsonArray: JsonTransformer.isJsonArray,
    transformerJsonObject: JsonTransformer.isJsonObject,
    transformerJsonString: JsonTransformer.isJsonString,
    transformerJsonNumber: JsonTransformer.isJsonNumber,
    transformerJsonBoolean: JsonTransformer.isJsonBoolean,
    transformerJsonNull: JsonTransformer.isJsonNull,
};
exports.default = JsonTransformer;
//# sourceMappingURL=transformer.js.map