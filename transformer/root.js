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
    pipe(value, data, level) { var _a, _b; return (_b = (_a = this.transformer) === null || _a === void 0 ? void 0 : _a.transform(value, data, level)) !== null && _b !== void 0 ? _b : value; }
    transform(value, data = {}, level = 0) {
        const c_data = Object.assign({}, data);
        Object.setPrototypeOf(c_data, this.data);
        let l_value = value;
        if (this.transformStringBefore != null && typeof l_value === 'string') {
            l_value = this.transformStringBefore(value, c_data, level);
        }
        else if (this.transformArrayBefore != null && Array.isArray(l_value)) {
            l_value = this.transformArrayBefore(l_value, c_data, level);
        }
        else if (this.transformMapBefore != null && typeof l_value === 'object') {
            l_value = this.transformMapBefore(l_value, c_data, level);
        }
        l_value = this.pipe(l_value, c_data, level);
        if (this.transformStringAfter != null && typeof l_value === 'string') {
            l_value = this.transformStringAfter(l_value, c_data, level);
        }
        else if (this.transformArrayAfter != null && Array.isArray(l_value)) {
            l_value = this.transformArrayAfter(l_value, c_data, level);
        }
        else if (this.transformMapAfter != null && typeof l_value === 'object') {
            l_value = this.transformMapAfter(l_value, c_data, level);
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
//# sourceMappingURL=root.js.map