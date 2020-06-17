/**
 * @module    transformer
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { DoIt, Data }                from "./interfaces";
import { JsonValue }                 from "./interfaces";
import { JsonFunctionParameters }    from "./interfaces";
import { JsonTransformerProperties } from "./interfaces";

export 
interface JsonTransformerInitProperties 
{ readonly init:        any,
  readonly data:        Data,
  readonly level:       number,
  readonly doit:        DoIt,
           transformer: JsonTransformer // The transformer may be added afterwards        
};                                      // by means of the method "pipe".

export 
type JsonTransformerParameters = Partial<JsonTransformerInitProperties>;

export 
interface JsonTransformer
extends   JsonTransformerInitProperties, JsonTransformerProperties
{};

/**
 * Objects of the class <code>JsonTransformer</code> transform JSON values 
 * into the same or other JSON values by applying JSON transformers. 
 * <p>
 * The only purpose of this class is to work as a superclass
 * for other, more elaborate transformers. It doesn't make 
 * transformations by itself.
 * <p>
 * The transformation process is as follows: First this transformer
 * may transform the JSON value by one of its before-transformers. 
 * Then the value value is passed to the pipe-transformer, if it exists. 
 * Afterwards the resulting value may be transformed further by one of the 
 * after-transformers. Finally, the resulting JOSN value is returned to 
 * the caller.
 * 
 * @extends JsonTransformerProperties
 * 
 * @param {JsonTransformerParameters} _
 *   An object containing the following attributes.
 * @param {any} [_.init = undefined]
 *   An object that may be used to initialize the transformer. Used by subclasses.
 * @param {Data} [_.data = {}]
 *   A data object that is passed as environment to the
 *   transformers. It can be used by transformers (defined via subclassing) 
 *   to replace or compute certain JSON values.
 * @param {number} [_.level = 0]
 *   The current level of the JSON value. The level of the top JsonValue  
 *   (usually) is equal to <code>0</code>. The level of its children is <code>1</code>,
 *   the level of the grand children is <code>2</code>, etc.
 * @param {JsonTransformer} [_.transformer = undefined]
 *   A transformer to which the JSON value is piped after it may have been transformed 
 *   by some before transformer. 
 * @param {DoIt}  [_.doit = DoIt.Before]
 *   States when the local transformations are to be done: 
 *   <ul>
 *   <li><code>DoIt.Before</code>: before the transformer pipe</li>
 *   <li><code>DoIt.After</code>: after the transformer pipe</li>
 *   <li><code>DoIt.Twice</code>: before and after the transformer pipe</li>
 *   </ul>
 */
export 
class JsonTransformer
{ constructor
  ( { init        = undefined,
      data        = {},
      level       = 0,
      transformer = undefined,
      doit        = DoIt.Before,
    }: JsonTransformerParameters 
    = {}
  ) 
  { Object.assign(this, {init, data, level, transformer, doit});
    
    this._root = this; 
    
    if (transformer != null)
    { Object.setPrototypeOf(this.transformer.data, this.data) };
  }

  private _root: JsonTransformer
  public get root() { return this._root};
  
  public transformerPipe(_: JsonFunctionParameters): JsonValue
  { return this.transformer?.transform(_) ?? _.value; }

 /**
  * Transforms a JSON value into the same or another JSON value.
  * @method
  * @param {Partial<JsonFunctionParameters<T>>} _
  *   An object containing the following attributes.
  * @param {T} [_.value = null]
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
  public transform ({value, data = {}, level = 0}: Partial<JsonFunctionParameters<JsonValue>>): JsonValue
  { const c_data = { ...data }; 
    Object.setPrototypeOf(c_data, this.data );

    const
      f_apply_functions = 
      () =>
      {  for (const [c_key, c_test] of Object.entries(c_transformer_tests))
        { const c_transformer = this[c_key];
        
          if (c_transformer != null && c_test(l_value))
          { l_value = c_transformer({value: value, data: c_data, level}); }
        }
  
      }
    let l_value: JsonValue = value;

    // Do transformations before passing the value to the pipe.
    if (this.doit === DoIt.Before || this.doit === DoIt.Twice)
    f_apply_functions();

    // Pipe
    l_value = this.transformerPipe({value: l_value, data: c_data, level});

    // Do transformations after the value has been transformed by the pipe.
    if (this.doit === DoIt.After || this.doit === DoIt.Twice)
    f_apply_functions();

    return l_value; 
  }

  /**
   * Replaces <code>this.transformer</code>, which is used for piping,
   * by <code>transformer</code>.
   * @method
   * @param   {JsonTransformer} transformer
   * @returns {JsonTransformer} 
   *          Returns <code>transformer</code> after it has been
   *          appended as pipe transformer to <code>this</code>. 
   */
  public pipe (transformer: JsonTransformer): JsonTransformer
  { const 
      c_data = transformer.data;
      Object.setPrototypeOf(c_data, this.data);

    transformer._root = this._root;
    this.transformer  = transformer; 

    return transformer;
  }

  /**
   * @static
   * @method
   * @param   {JsonValue} value
   * @returns {boolean} 
   *          Returns <code>true</code> is <code>value</code> 
   *          is a member of <code>{@link JsonPrimitive}</code>.
   */
  public static isJsonPrimitive(value: JsonValue): boolean 
  { const t = typeof value;
    return t == null || t === 'string' || t === 'number' || t === 'boolean'; 
  }

  /**
   * @static
   * @method
   * @param   {JsonValue} value
   * @returns {boolean} 
   *          Returns <code>true</code> is <code>value</code> 
   *          is a member of <code>{@link JsonArray}</code>.
   */
  public static isJsonArray(value: JsonValue): boolean
  { return Array.isArray(value); }

  /**
   * @static
   * @method
   * @param   {JsonValue} value
   * @returns {boolean} 
   *          Returns <code>true</code> is <code>value</code> 
   *          is a member of <code>{@link JsonObject}</code>.
   */
  public static isJsonObject(value: JsonValue): boolean
  { return value != null && typeof value === 'object' && !Array.isArray(value); }
  
  /**
   * @static
   * @method
   * @param   {JsonValue} value
   * @returns {boolean} 
   *          Returns <code>true</code> is <code>value</code> 
   *          is a member of <code>{@link JsonString}</code>.
   */
  public static isJsonString(value: JsonValue): boolean
  { return typeof value === 'string'; }
  
  /**
   * @static
   * @method
   * @param   {JsonValue} value
   * @returns {boolean} 
   *          Returns <code>true</code> is <code>value</code> 
   *          is a member of <code>{@link JsonNumber}</code>.
   */
  public static isJsonNumber(value: JsonValue): boolean
  { return typeof value === 'number'; }
  
  /**
   * @static
   * @method
   * @param   {JsonValue} value
   * @returns {boolean} 
   *          Returns <code>true</code> is <code>value</code> 
   *          is a member of <code>{@link JsonBoolean}</code>.
   */
  public static isJsonBoolean(value: JsonValue): boolean
  { return typeof value === 'boolean'; }
  
  /**
   * @static
   * @method
   * @param   {JsonValue} value
   * @returns {boolean} 
   *          Returns <code>true</code> is <code>value</code> 
   *          is a member of <code>{@link JsonNull}</code>.
   */
  public static isJsonNull(value: JsonValue): boolean
  { return value == null; }
}

const c_transformer_tests =
{ transformerJsonPrimitive: JsonTransformer.isJsonPrimitive,
  transformerJsonArray:     JsonTransformer.isJsonArray,
  transformerJsonObject:    JsonTransformer.isJsonObject,  
  transformerJsonString:    JsonTransformer.isJsonString, 
  transformerJsonNumber:    JsonTransformer.isJsonNumber, 
  transformerJsonBoolean:   JsonTransformer.isJsonBoolean, 
  transformerJsonNull:      JsonTransformer.isJsonNull, 
};

/** @export  JsonTransformer*/
export default JsonTransformer;
