"use strict";
/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformer = void 0;
;
/**
 * A class to recursivley transform <code>JsonValue</code>s
 * by applying <code>JsonTransformer</code>s.
 *
 * @class
 */
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
    transformPipe(_) { return this.transformer?.transform(_) ?? _.value; }
    /**
     * Transforms a <code>JsonValue</code>.
     * @method
     * @param value
     *   The JSON value to be transformed.
     * $return
     *   A clone of <code>value</code> with the transformations done.
     */
    transform({ value, data = {}, level = 0 }) {
        const c_data = { ...data };
        Object.setPrototypeOf(c_data, this.data);
        let l_value = value;
        // Do transformations before passing the value to the pipe.
        if (this.transformStringBefore != null && typeof l_value === 'string') {
            l_value = this.transformStringBefore({ value: value, data: c_data, level });
        }
        else if (this.transformArrayBefore != null && Array.isArray(l_value)) {
            l_value = this.transformArrayBefore({ value: l_value, data: c_data, level });
        }
        else if (this.transformMapBefore != null && typeof l_value === 'object') {
            l_value = this.transformMapBefore({ value: l_value, data: c_data, level });
        }
        // Pipe
        l_value = this.transformPipe({ value: l_value, data: c_data, level });
        // Do transformations after the value has been transformed by the pipe.
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
    /**
     * @method
     * @param transformer
     */
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
