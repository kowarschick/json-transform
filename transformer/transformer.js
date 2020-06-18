"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformer = void 0;
;
;
class JsonTransformer {
    constructor({ init = undefined, data = {}, level = 0, } = {}) {
        this._pipe_transformers = [];
        Object.assign(this, { init, data, level });
        this._root = this;
    }
    get root() { return this._root; }
    ;
    transformerPipe(_) {
        let l_value = _.value;
        for (const t of this._pipe_transformers) {
            l_value = t.transform({ value: l_value, data: _.data, level: _.level });
        }
        ;
        return l_value;
    }
    transform({ value, data = {}, level = 0 }) {
        const c_data = Object.assign({}, data);
        Object.setPrototypeOf(c_data, this.data);
        let l_value = value;
        for (const [c_key, c_test] of Object.entries(c_transformer_tests)) {
            const c_transformer = this[c_key];
            if (c_transformer != null && c_test(l_value)) {
                l_value = c_transformer({ value: value, data: c_data, level });
            }
        }
        l_value = this.transformerPipe({ value: l_value, data: c_data, level });
        return l_value;
    }
    pipe(...transformers) {
        if (transformers.length === 0) {
            this._pipe_transformers = [];
            return this;
        }
        for (const t of transformers) {
            Object.setPrototypeOf(t.data, this.data);
            t._root = this._root;
        }
        this._pipe_transformers = transformers;
        return transformers[0];
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