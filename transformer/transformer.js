"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformer = void 0;
const types_1 = require("./types");
const c_transformer_tests = { transformerJsonPrimitive: types_1.isJsonPrimitive,
    transformerJsonArray: types_1.isJsonArray,
    transformerJsonObject: types_1.isJsonObject,
    transformerJsonString: types_1.isJsonString,
    transformerJsonNumber: types_1.isJsonNumber,
    transformerJsonBoolean: types_1.isJsonBoolean,
    transformerJsonNull: types_1.isJsonNull,
};
;
;
class JsonTransformer {
    constructor({ init = {}, data = {}, level = 0, } = {}) {
        this._pipe_transformers = [];
        Object.assign(this, { init, data, level });
        this._root = this;
        for (let [l_key, l_value] of Object.entries(init)) {
            if (this.init[l_key] == null) {
                this.init[l_key] = l_value;
            }
        }
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
}
exports.JsonTransformer = JsonTransformer;
exports.default = JsonTransformer;
//# sourceMappingURL=transformer.js.map