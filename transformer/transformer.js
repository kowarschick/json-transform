"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformer = void 0;
const FUNCTION = '$function', VALUE = '$value';
const types_1 = require("./types");
const c_transformer_tests = [['transformerJsonPrimitive', types_1.isJsonPrimitive],
    ['transformerJsonArray', types_1.isJsonArray],
    ['transformerJsonObject', types_1.isJsonObject],
    ['transformerJsonString', types_1.isJsonString],
    ['transformerJsonNull', types_1.isJsonNull],
    ['transformerJsonNumber', types_1.isJsonNumber],
    ['transformerJsonBoolean', types_1.isJsonBoolean],
];
class JsonTransformer {
    constructor({ init = {}, data = {}, rename = {} } = {}) {
        this.v_init_root = {};
        this.v_data = {};
        this.v_rename_reverse = {};
        this.v_transformer_tests = [];
        this._pipe_tail = null;
        this._pipe_transformers = [];
        this.transformerJsonPrimitive = null;
        this.transformerJsonArray = null;
        this.transformerJsonObject = null;
        this.transformerJsonString = null;
        this.transformerJsonNumber = null;
        this.transformerJsonBoolean = null;
        this.transformerJsonNull = null;
        this.v_root = this;
        this.v_name = this.constructor.name;
        this.init = init;
        this.merge({ [this.v_name]: this.init }, this.v_init_root);
        this.v_data = data;
        this.v_rename = rename;
        for (const [k, v] of Object.entries(rename)) {
            this.v_rename_reverse[v] = k;
        }
    }
    initialize() {
        if (this.v_transformer_tests.length === 0)
            for (const [c_name, c_test] of c_transformer_tests) {
                const c_method = this[c_name];
                if (c_method != null) {
                    this.v_transformer_tests.push([c_test, c_method]);
                }
            }
    }
    merge(initNew, initOld) {
        for (let [key_new, value_new] of Object.entries(initNew)) {
            const value_old = initOld[key_new];
            if (value_old == null) {
                initOld[key_new] = value_new;
            }
            else if (types_1.isJsonObject(value_old) && types_1.isJsonObject(value_new)) {
                this.merge(value_new, value_old);
            }
        }
    }
    rename(name) { var _a; return (_a = this.v_root.v_rename[name]) !== null && _a !== void 0 ? _a : name; }
    rerename(name) { var _a; return (_a = this.v_root.v_rename_reverse[name]) !== null && _a !== void 0 ? _a : name; }
    functionName(value) {
        const f_name = (name) => types_1.isJsonString(name)
            ? (this.v_rename_reverse[name] != null
                ? this.rerename(name)
                : (this.v_rename[name] != null
                    ? null
                    : name))
            : null;
        if (types_1.isJsonArray(value)) {
            return value.length > 0 ? f_name(value[0]) : null;
        }
        else {
            return f_name(value[this.rename(FUNCTION)]);
        }
    }
    isFunctionName(name, value) { return (this.functionName(value) === name); }
    arrayFunctionValue(name, value) {
        const c_name = this.functionName(value);
        if (c_name === name) {
            const c_value = value[this.rename(VALUE)];
            return types_1.isJsonArray(c_value) ? c_value : null;
        }
        return null;
    }
    pipe(...transformers) {
        if (transformers.length === 0) {
            return this;
        }
        if (this._pipe_tail == null) {
            this._pipe_transformers = transformers;
            for (const c_transformer of transformers) {
                Object.setPrototypeOf(c_transformer.v_data, this.v_data);
                c_transformer.v_root = this;
                this.merge({ [c_transformer.v_name]: c_transformer.init }, this.v_init_root);
                this.merge(c_transformer.v_rename, this.v_rename);
                c_transformer.init = this.v_init_root[c_transformer.v_name];
            }
        }
        else {
            this._pipe_tail.pipe(...transformers);
        }
        this._pipe_tail = this._pipe_transformers[0];
        return this;
    }
    transformerPipe(_) {
        let l_value = _.value;
        for (const c_transformer of this._pipe_transformers) {
            l_value = c_transformer.transform({ value: l_value, data: _.data, level: _.level });
        }
        return l_value;
    }
    transform({ value, data = {}, level = 0 }) {
        const c_data = Object.assign({}, data);
        Object.setPrototypeOf(c_data, this.v_data);
        let l_value = value;
        for (const [c_test, c_transformer] of this.v_transformer_tests) {
            if (c_test(value)) {
                l_value = c_transformer({ value: value, data: c_data, level });
                break;
            }
        }
        l_value = this.transformerPipe({ value: l_value, data: c_data, level });
        return l_value;
    }
}
exports.JsonTransformer = JsonTransformer;
exports.default = JsonTransformer;
//# sourceMappingURL=transformer.js.map