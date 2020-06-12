/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { JsonValue } from "./interfaces";
import { JsonFunctionParameters } from "./interfaces";
import { JsonTransformerProperties, JsonTransformerParameters } from "./interfaces";
import { JsonTransformerString, JsonTransformerArray, JsonTransformerMap } from "./interfaces";
export interface JsonTransformer extends JsonTransformerProperties {
}
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
export declare class JsonTransformer {
    constructor({ init, data, level, transformer, }?: JsonTransformerParameters);
    private _root;
    get root(): JsonTransformer;
    protected readonly transformStringBefore: JsonTransformerString;
    protected readonly transformArrayBefore: JsonTransformerArray;
    protected readonly transformMapBefore: JsonTransformerMap;
    protected transformPipe(_: JsonFunctionParameters): JsonValue;
    protected readonly transformStringAfter: JsonTransformerString;
    protected readonly transformArrayAfter: JsonTransformerArray;
    protected readonly transformMapAfter: JsonTransformerMap;
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
    transform({ value, data, level }: Partial<JsonFunctionParameters>): JsonValue;
    /**
     * @method
     * @param   {JsonTransformer} transformer
     * @returns {JsonTransformer}
     *          Returns <code>transformer</code> after it has been
     *          appended as pipe transformer to <code>this</code>.
     */
    pipe(transformer: JsonTransformer): JsonTransformer;
}
export default JsonTransformer;
