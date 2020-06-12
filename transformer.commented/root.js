/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
;
/**
 * @class
 * @classdesc
 *   A class to recursivley transform JSON values
 *   by applying JSON transformers.
 *
 * @param {JsonTransformerParameters} _
 *   An object containing the following attributes
 * @param {any} [init = undefined]
 *   An object that may be used to initialize the transformer. Used by subclasses.
 * @param {Data} [_.data = {}]
 *   A data object that is passed as environment to the
 *   transformers. It can be used by transformers (defined via subclassing)
 *   to replace or compute certain JSON valuess.
 * @param {number} [_.level = 0]
 *   The current level of the JSON value. The level of the top JasonValue
 *   (usually) is equal to <code>0</code>. The level of its children is <code>1</code>,
 *   the level of the grand children <code>2</code>, etc.
 * @param {JsonTransformer} [transformer = undefined]
 *   A transformer to which the JSON value is piped. This transformer
 *   may transform the JSON value before it is piped. Moreover, the result
 *   of the pip etransformer may be transforemd further by this transfoer.
 */
export class JsonTransformer {
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
    transformPipe(_) { var _a, _b; return (_b = (_a = this.transformer) === null || _a === void 0 ? void 0 : _a.transform(_)) !== null && _b !== void 0 ? _b : _.value; }
    /**
     * @method
     * @description
     *   Transforms a JSON value into the same or another JSON value.
     * @param {Partial<JsonFunctionParameters>} _
     *   An object containing the following attributes.
     * @param {JsonValue} [_.value = null]
     *   The JSON value to be transformed.
     * @param {Data} [_.data = {}]
     *   A data object the members of which can be used by transformers to replace
     *   or compute certain JSON values.
     * @param {number} [_.level = 0]
     *   The current level of the JSON value. The level of the top JSON value
     *   (usually) is equal to <code>0</code>. The level of its children is <code>1</code>,
     *   the level of the grand children <code>2</code>, etc.
     * @returns {JsonValue}
     *   The resulting JSON value.
     */
    transform({ value, data = {}, level = 0 }) {
        const c_data = Object.assign({}, data);
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
     * @param   {JsonTransformer} transformer
     * @returns {JsonTransformer}
     *          Returns <code>transformer</code> after it has been
     *          appended as pipe transformer to <code>this</code>.
     */
    pipe(transformer) {
        const c_data = transformer.data;
        Object.setPrototypeOf(c_data, this.data);
        transformer._root = this._root;
        this.transformer = transformer;
        return transformer;
    }
}
export default JsonTransformer;
//# sourceMappingURL=root.js.map