/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L.J. Kowarschick
 * @license   MIT
 */

import { JsonValue, JsonNull             } from "./interfaces";
import { EnumJsonFunctionType            } from "./interfaces";
import { JsonFunctionParameters          } from "./interfaces";
import { JsonTransformerProperties, Data } from "./interfaces";

const c_transformer_tests =
{ [EnumJsonFunctionType.JsonPrimitive]: (_: JsonValue) => 
                                        { const t = typeof _;
                                          return t == null || t === 'string' || t === 'number' || t === 'boolean'; 
                                        },
  [EnumJsonFunctionType.JsonArray]:     (_: JsonValue) => (Array.isArray(_)),
  [EnumJsonFunctionType.JsonMap]:       (_: JsonValue) => (_ != null && typeof _ === 'object' && !Array.isArray(_)), 
  [EnumJsonFunctionType.JsonString]:    (_: JsonValue) => (typeof _ === 'string'),
  [EnumJsonFunctionType.JsonNumber]:    (_: JsonValue) => (typeof _ === 'number'),
  [EnumJsonFunctionType.JsonBoolean]:   (_: JsonValue) => (typeof _ === 'boolean'),
  [EnumJsonFunctionType.JsonNull]:      (_: JsonValue) => (_ == null),
};

const c_transformer_tests_before =
{ transformerJsonPrimitiveBefore: c_transformer_tests[EnumJsonFunctionType.JsonPrimitive],
  transformerJsonArrayBefore:     c_transformer_tests[EnumJsonFunctionType.JsonArray],
  transformerJsonMapBefore:       c_transformer_tests[EnumJsonFunctionType.JsonMap],  
  transformerJsonStringBefore:    c_transformer_tests[EnumJsonFunctionType.JsonString], 
  transformerJsonNumberBefore:    c_transformer_tests[EnumJsonFunctionType.JsonNumber], 
  transformerJsonBooleanBefore:   c_transformer_tests[EnumJsonFunctionType.JsonBoolean], 
  transformerJsonNullBefore:      c_transformer_tests[EnumJsonFunctionType.JsonNull], 
};

const c_transformer_tests_after =
{ transformerJsonPrimitiveAfter: c_transformer_tests[EnumJsonFunctionType.JsonPrimitive],
  transformerJsonArrayAfter:     c_transformer_tests[EnumJsonFunctionType.JsonArray],
  transformerJsonMapAfter:       c_transformer_tests[EnumJsonFunctionType.JsonMap], 
  transformerJsonStringAfter:    c_transformer_tests[EnumJsonFunctionType.JsonString], 
  transformerJsonNumberAfter:    c_transformer_tests[EnumJsonFunctionType.JsonNumber], 
  transformerJsonBooleanAfter:   c_transformer_tests[EnumJsonFunctionType.JsonBoolean], 
  transformerJsonNullAfter:      c_transformer_tests[EnumJsonFunctionType.JsonNull], 
};

export 
type JsonTransformerParameters = Partial<JsonTransformerProperties>;

export 
interface JsonTransformerInitProperties 
{ readonly init:        any,
  readonly data:        Data,
  readonly level:       number,
  
  transformer: JsonTransformer<JsonValue>             
};         

export 
interface JsonTransformer<T extends JsonValue> 
extends   JsonTransformerInitProperties, JsonTransformerProperties
{};

/**
 * @module transformer
 * @description
 * This module contains the class <code>JsonTransformer</code>.
 */

/**
 * Objects of the class <code>JsonTransformer</code> recursivley transform JSON values 
 * in the same or other JSON values by applying JSON transformers. 
 * <p>
 * The main purpose of this class is to work as a superclass
 * for other, more elaborate transformers.
 * <p>
 * The transformation process is as follows: First this transformer
 * may transform the JSON value by one of its before-transformers. 
 * Then the value value is passed to the pipe-transformer, if it exists. 
 * Afterwards the resulting value may be transformed further by one of the 
 * after-transformers. Finally, the resulting JOSN value is returned to 
 * the caller.
 * <p>
 * This root transformer defines only one trivial transformer for
 * <code>null</code> values: The non JSON value <code>undefined</code>
 * is transformed into the JSON value <code>null</code>.
 * That transformation is usful as <code>undefined</code> 
 * should not e returned as JSON value. However, if
 * you don't like tha transformation, you can simply define
 * a subclass that overrides the method 
 * <code>transformerJsonNullAfter</code>. All transformer
 * methods that can be overridden are defined in
 * {@link JsonTransformerProperties}.
 * <h4>Examples</h4>
 * 
 * ```ts
 * const t1 = new JsonTransformer();
 * 
 * t1.transform({ value: null })        // => null
 * t1.transform({ value: undefined })   // => undefined
 * t1.transform({ value: "abc" })       // => "abc"
 * t1.transform({ value: [ 1, 2, 3 ] }) // => [ 1, 2, 3 ] 
 * ```
 * @class    
 * @extends JsonTransformerProperties
 * @memberof module:transformer
 * @exports  transformer.JsonTransformer
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
 */
export 
class JsonTransformer<T extends JsonValue = JsonValue>
{ constructor
  ( { init        = undefined,
      data        = {},
      level       = 0,
      transformer = undefined,
    }: JsonTransformerParameters 
    = {}
  ) 
  { Object.assign(this, {init, data, level, transformer});
    
    this._root = this; 
    
    if (transformer != null)
    { Object.setPrototypeOf(this.transformer.data, this.data) };
  }

  private _root: JsonTransformer
  public get root() { return this._root};
  
  public transformerPipe(_: JsonFunctionParameters): JsonValue
  { return this.transformer?.transform(_) ?? _.value; }

 /**
  * @method
  * @description 
  *   Transforms a JSON value into the same or another JSON value.
  * @param {Partial<JsonFunctionParameters<T>>} _
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
  public transform ({value, data = {}, level = 0}: Partial<JsonFunctionParameters<T>>): JsonValue
  { const c_data = { ...data }; 
    Object.setPrototypeOf(c_data, this.data );

    let l_value: JsonValue = value;

    // Do transformations before passing the value to the pipe.
    for (const [c_key, c_test] of Object.entries(c_transformer_tests_before))
    { const c_transformer = this[c_key];
    
      if (c_transformer != null && c_test(l_value))
      { l_value = c_transformer({value: value, data: c_data, level}); }
    }

    // Pipe
    l_value = this.transformerPipe({value: l_value, data: c_data, level});

    // Do transformations after the value has been transformed by the pipe.
    for (const [c_key, c_test] of Object.entries(c_transformer_tests_after))
    { const c_transformer = this[c_key];

      if (c_transformer != null && c_test(l_value))
      { l_value = c_transformer({value: l_value, data: c_data, level}); }
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
  public pipe (transformer: JsonTransformer): JsonTransformer
  { const 
      c_data = transformer.data;
      Object.setPrototypeOf(c_data, this.data);

    transformer._root = this._root;
    this.transformer  = transformer; 

    return transformer;
  }

  // replace the non JSON value undefined by the jason value null
  public transformerJsonNullAfter (_: JsonFunctionParameters<JsonNull>): JsonValue
  { return null; }
}

export default JsonTransformer;
