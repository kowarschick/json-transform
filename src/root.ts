/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonValue, JsonMap, JsonArray, EnumJsonFunctionType  } from "./interfaces";
import { JsonFunctionParameters                               } from "./interfaces";
import { JsonTransformerProperties, JsonTransformerParameters } from "./interfaces";

const c_transformer_tests =
{ [EnumJsonFunctionType.JsonArray]:  (_: JsonValue) => (Array.isArray(_)),
  [EnumJsonFunctionType.JsonMap]:    (_: JsonValue) => (_ != null && typeof _ === 'object' && !Array.isArray(_)), 
  [EnumJsonFunctionType.JsonString]: (_: JsonValue) => (typeof _ === 'string'),
};

const c_transformer_tests_before =
{ transformerJsonArrayBefore: c_transformer_tests[EnumJsonFunctionType.JsonArray],
  transformerJsonMapBefore:   c_transformer_tests[EnumJsonFunctionType.JsonMap],  
  transformerStringBefore:    c_transformer_tests[EnumJsonFunctionType.JsonString], 
};

const c_transformer_tests_after =
{ transformerJsonArrayAfter:  c_transformer_tests[EnumJsonFunctionType.JsonArray],
  transformerJsonMapAfter:    c_transformer_tests[EnumJsonFunctionType.JsonMap], 
  transformerStringAfter:     c_transformer_tests[EnumJsonFunctionType.JsonString], 
};

export 
interface JsonTransformer extends JsonTransformerProperties{};

/**
 * @classdesc
 *   A class to recursivley transform JSON values 
 *   by applying JSON transformers.
 * @extends JsonTransformerProperties
 * 
 * @param {JsonTransformerParameters} _
 *   An object containing the following attributes.
 * @param {any} [_.init = undefined]
 *   An object that may be used to initialize the transformer. Used by subclasses.
 * @param {Data} [_.data = {}]
 *   A data object that is passed as environment to the
 *   transformers. It can be used by transformers (defined via subclassing) 
 *   to replace or compute certain JSON valuess.
 * @param {number} [_.level = 0]
 *   The current level of the JSON value. The level of the top JsonValue  
 *   (usually) is equal to <code>0</code>. The level of its children is <code>1</code>,
 *   the level of the grand children <code>2</code>, etc.
 * @param {JsonTransformer} [_.transformer = undefined]
 *   A transformer to which the JSON value is piped. This transformer
 *   may transform the JSON value before it is piped. Moreover, the result 
 *   of the pip etransformer may be transforemd further by this transfoer.
 */
export 
class JsonTransformer
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
  
  protected transformPipe(_: JsonFunctionParameters): JsonValue
  { return this.transformer?.transform(_) ?? _.value; }

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
  public transform ({value, data = {}, level = 0}: Partial<JsonFunctionParameters>): JsonValue
  { const c_data = { ...data }; 
    Object.setPrototypeOf(c_data, this.data );

    let l_value = value;

    // Do transformations before passing the value to the pipe.
    for (const [c_key, c_test] of Object.entries(c_transformer_tests_before))
    { const c_transformer = this[c_key];
      if (c_transformer != null && c_test(l_value))
      { l_value = c_transformer({value: value, data: c_data, level}); }
    }

    // Pipe
    l_value = this.transformPipe({value: l_value, data: c_data, level});

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
}

export default JsonTransformer;
