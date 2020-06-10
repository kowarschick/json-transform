"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformer = void 0;
;
class JsonTransformer {
    constructor({ init = undefined, data = {}, level = 0, transformer = undefined, } = {}) {
        this.transformStringBefore = null;
        this.transformArrayBefore = null;
        this.transformMapBefore = null;
        this.transformStringAfter = null;
        this.transformArrayAfter = null;
        this.transformMapAfter = null;
        Object.assign(this, { init, data, level, transformer });
        this._root = this;
        if (transformer != null) {
            Object.setPrototypeOf(this.transformer.data, this.data);
        }
        ;
    }
    get root() { return this._root; }
    ;
    pipe(_) { var _a, _b; return (_b = (_a = this.transformer) === null || _a === void 0 ? void 0 : _a.transform(_)) !== null && _b !== void 0 ? _b : _.value; }
    transform({ value, data = {}, level = 0 }) {
        const c_data = Object.assign({}, data);
        Object.setPrototypeOf(c_data, this.data);
        let l_value = value;
        if (this.transformStringBefore != null && typeof l_value === 'string') {
            l_value = this.transformStringBefore({ value: value, data: c_data, level });
        }
        else if (this.transformArrayBefore != null && Array.isArray(l_value)) {
            l_value = this.transformArrayBefore({ value: l_value, data: c_data, level });
        }
        else if (this.transformMapBefore != null && typeof l_value === 'object') {
            l_value = this.transformMapBefore({ value: l_value, data: c_data, level });
        }
        l_value = this.pipe({ value: l_value, data: c_data, level });
        if (this.transformStringAfter != null && typeof l_value === 'string') {
            l_value = this.transformStringAfter({ value: l_value, data: c_data, level });
        }
        else if (this.transformArrayAfter != null && Array.isArray(l_value)) {
            l_value = this.transformArrayAfter({ value: l_value, data: c_data, level });
        }
        else if (this.transformMapAfter != null && typeof l_value === 'object') {
            l_value = this.transformMapAfter({ value: l_value, data: c_data, level });
        }
        return l_value;
    }
    add(transformer) {
        const c_data = transformer.data;
        Object.setPrototypeOf(c_data, this.data);
        transformer._root = this._root;
        this.transformer = transformer;
        return transformer;
    }
}
exports.JsonTransformer = JsonTransformer;
exports.default = JsonTransformer;
//# sourceMappingURL=root.js.map