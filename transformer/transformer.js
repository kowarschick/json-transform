"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformer = void 0;
const interfaces_1 = require("./interfaces");
const c_transformer_tests = { [interfaces_1.EJsonType.Primitive]: (_) => {
        const t = typeof _;
        return t == null || t === 'string' || t === 'number' || t === 'boolean';
    },
    [interfaces_1.EJsonType.Array]: (_) => (Array.isArray(_)),
    [interfaces_1.EJsonType.Object]: (_) => (_ != null && typeof _ === 'object' && !Array.isArray(_)),
    [interfaces_1.EJsonType.String]: (_) => (typeof _ === 'string'),
    [interfaces_1.EJsonType.Number]: (_) => (typeof _ === 'number'),
    [interfaces_1.EJsonType.Boolean]: (_) => (typeof _ === 'boolean'),
    [interfaces_1.EJsonType.Null]: (_) => (_ == null),
};
const c_transformer_tests_before = { transformerJsonPrimitiveBefore: c_transformer_tests[interfaces_1.EJsonType.Primitive],
    transformerJsonArrayBefore: c_transformer_tests[interfaces_1.EJsonType.Array],
    transformerJsonObjectBefore: c_transformer_tests[interfaces_1.EJsonType.Object],
    transformerJsonStringBefore: c_transformer_tests[interfaces_1.EJsonType.String],
    transformerJsonNumberBefore: c_transformer_tests[interfaces_1.EJsonType.Number],
    transformerJsonBooleanBefore: c_transformer_tests[interfaces_1.EJsonType.Boolean],
    transformerJsonNullBefore: c_transformer_tests[interfaces_1.EJsonType.Null],
};
const c_transformer_tests_after = { transformerJsonPrimitiveAfter: c_transformer_tests[interfaces_1.EJsonType.Primitive],
    transformerJsonArrayAfter: c_transformer_tests[interfaces_1.EJsonType.Array],
    transformerJsonObjectAfter: c_transformer_tests[interfaces_1.EJsonType.Object],
    transformerJsonStringAfter: c_transformer_tests[interfaces_1.EJsonType.String],
    transformerJsonNumberAfter: c_transformer_tests[interfaces_1.EJsonType.Number],
    transformerJsonBooleanAfter: c_transformer_tests[interfaces_1.EJsonType.Boolean],
    transformerJsonNullAfter: c_transformer_tests[interfaces_1.EJsonType.Null],
};
;
;
class JsonTransformer {
    constructor({ init = undefined, data = {}, level = 0, transformer = undefined, } = {}) {
        Object.assign(this, { init, data, level, transformer });
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
        let l_value = value;
        for (const [c_key, c_test] of Object.entries(c_transformer_tests_before)) {
            const c_transformer = this[c_key];
            if (c_transformer != null && c_test(l_value)) {
                l_value = c_transformer({ value: value, data: c_data, level });
            }
        }
        l_value = this.transformerPipe({ value: l_value, data: c_data, level });
        for (const [c_key, c_test] of Object.entries(c_transformer_tests_after)) {
            const c_transformer = this[c_key];
            if (c_transformer != null && c_test(l_value)) {
                l_value = c_transformer({ value: l_value, data: c_data, level });
            }
        }
        return l_value;
    }
    pipe(transformer) {
        const c_data = transformer.data;
        Object.setPrototypeOf(c_data, this.data);
        transformer._root = this._root;
        this.transformer = transformer;
        return transformer;
    }
}
exports.JsonTransformer = JsonTransformer;
exports.default = JsonTransformer;
//# sourceMappingURL=transformer.js.map