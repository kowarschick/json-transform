/**
 * @module    transformer
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { Init, Data, 
         isJsonPrimitive, isJsonArray, isJsonObject, 
         isJsonString, isJsonNumber, isJsonBoolean, 
         isJsonNull 
        }                            from "./types";
import { JsonValue }                 from "./types";
import { JsonFunctionParameters }    from "./types";
import { JsonTransformerProperties } from "./types";


const c_transformer_tests =
{ transformerJsonPrimitive: isJsonPrimitive,
  transformerJsonArray:     isJsonArray,
  transformerJsonObject:    isJsonObject,  
  transformerJsonString:    isJsonString, 
  transformerJsonNumber:    isJsonNumber, 
  transformerJsonBoolean:   isJsonBoolean, 
  transformerJsonNull:      isJsonNull, 
};
export 
interface JsonTransformerInitProperties 
{ readonly init:  Init,
  readonly data:  Data,
  readonly level: number      
};

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
 * This transformer doesn't make transformations by itself.
 * Mainly it is used as a superclass for other, more elaborate 
 * transformers. In addition, this transformer should be used 
 * as a top-level transformer if JSON values are to run 
 * through several independent pipes in succession.
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
 * @param {Init} [_.init = {}]
 *   An object that may be used to initialize the transformer and its subclasses.
 * @param {Data} [_.data = {}]
 *   A data object that is passed as environment to the
 *   transformers. It can be used by transformers (defined via subclassing) 
 *   to replace or compute certain JSON values.
 * @param {number} [_.level = 0]
 *   The current level of the JSON value. The level of the top JsonValue  
 *   (usually) is equal to <code>0</code>. The level of its children is <code>1</code>,
 *   the level of the grand children is <code>2</code>, etc.
 */
export 
class JsonTransformer
{ constructor
  ( { init  = {},
      data  = {},
      level = 0,
    }: JsonTransformerParameters 
    = {}
  ) 
  { Object.assign(this, {init, data, level});
    this._root = this; 
    for (let [l_key, l_value] of Object.entries(init))
    { if (this.init[l_key] == null) 
      { this.init[l_key] = l_value; }
    }
  }

  private _root: JsonTransformer
  public get root() { return this._root};
 
  private _pipe_transformers: JsonTransformer[] = [];

  public transformerPipe(_: JsonFunctionParameters): JsonValue
  { let l_value: JsonValue = _.value

    for (const t of this._pipe_transformers)
    { l_value = t.transform({value: l_value, data: _.data, level: _.level}); }; 

    return l_value;
  }

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

    let l_value: JsonValue = value;

    // Do local transformations before passing the value to the pipe.
    for (const [c_key, c_test] of Object.entries(c_transformer_tests))
    { const c_transformer = this[c_key];
    
      if (c_transformer != null && c_test(l_value))
      { l_value = c_transformer({value: value, data: c_data, level}); }
    }

    // Pipe
    l_value = this.transformerPipe({value: l_value, data: c_data, level});

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
  public pipe(...transformers: JsonTransformer[]): JsonTransformer
  { if (transformers.length === 0)
    { this._pipe_transformers = [];
      return this; 
    }

    for (const t of transformers)
    { Object.setPrototypeOf(t.data, this.data);
      t._root = this._root;
    }
     
    this._pipe_transformers = transformers; 

    return transformers[0];
  }
}

/** @export  JsonTransformer*/
export default JsonTransformer;
