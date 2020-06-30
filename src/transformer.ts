/**
 * @module    transformer
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { Init, InitMap, Data }                       from "./types"
import { JsonFunction, JsonFunctionParameters }      from "./types"
import { JsonPrimitive, JsonArray, JsonObject, 
         JsonString, JsonNumber, JsonBoolean, 
         JsonNull, JsonValue
       }                                             from "./types"
import { isJsonPrimitive, isJsonArray, isJsonObject, 
         isJsonString, isJsonNumber, isJsonBoolean, 
         isJsonNull 
       }                                             from "./types"


const c_transformer_tests =
{ transformerJsonPrimitive: isJsonPrimitive,
  transformerJsonArray:     isJsonArray,
  transformerJsonObject:    isJsonObject,  
  transformerJsonString:    isJsonString, 
  transformerJsonNumber:    isJsonNumber, 
  transformerJsonBoolean:   isJsonBoolean, 
  transformerJsonNull:      isJsonNull, 
}
export interface JsonTransformerProperties 
{ readonly transformerJsonPrimitive: JsonFunction<JsonPrimitive> | null;
  readonly transformerJsonArray:     JsonFunction<JsonArray>     | null;
  readonly transformerJsonObject:    JsonFunction<JsonObject>    | null;
  readonly transformerJsonString:    JsonFunction<JsonString>    | null;
  readonly transformerJsonNumber:    JsonFunction<JsonNumber>    | null;
  readonly transformerJsonBoolean:   JsonFunction<JsonBoolean>   | null;
  readonly transformerJsonNull:      JsonFunction<JsonNull>      | null;
          
           transformerPipe:          JsonFunction;

  readonly [key: string]: any; // to be able to access JsonTransformer properties dynamically
}

export type JsonTransformerParameters =
  Partial<JsonTransformerConstructorProperties>;

export 
interface JsonTransformerConstructorProperties
{ readonly init:  Init,
  readonly data:  Data,
  readonly level: number,    
}

export 
interface JsonTransformer
extends   JsonTransformerConstructorProperties, JsonTransformerProperties
{}

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
 *   If is is passed via <code>super</code> to a superclass, it is merged 
 *   recursively into <code>this.init</code>. Existing values are not overridden.
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
  ( {init = {}, data = {}, level = 0}: JsonTransformerParameters = {}) 
  { Object.assign(this, {data, level});

    this.name = this.constructor
                    .name
                    .replace('JsonTransformer', '')
                    .toLowerCase();

    if (this.name === '')
    { if (!isJsonObject(init))
      { throw new Error('The init value of JasonTransformer must be an object.'); }
      this.init = (init as InitMap);
    }
    else
    { this.merge({ [this.name]: init }, this.init) }
  }

  public readonly name: string;
  public          init: InitMap = {};

  private merge(initNew: Init, initOld: Init = this.init)
  { if (isJsonObject(initNew) &&isJsonObject(initOld) )
    for (let [key_new, value_new] of Object.entries(initNew))
    { const value_old = initOld[key_new];
      if (value_old == null) // there is no old value, so the new value is stored
      { initOld[key_new] = value_new }
      else if (isJsonObject(value_old) && isJsonObject(value_new))
      { this.merge(value_new, value_old) }
    }
  }
 
  private _pipe_tail:         JsonTransformer | null = null;
  private _pipe_transformers: JsonTransformer[]      = [];

  /**
   * Adds transformers to the transformer pipe. Those transformers
   * are called, after the transformer has done its local transformations.
   * 
   * @method
   * @param   {JsonTransformer} transformer
   * @returns {JsonTransformer} 
   *          Returns this <code>transformer</code> so that
   *          further pipe transformers can be added by
   *          applying <code>pipe</code> again. 
   */
  public pipe(...transformers: JsonTransformer[]): this
  { if (transformers.length === 0)
    { return this; }

    if (this._pipe_tail == null)
    { this._pipe_transformers = transformers;
  
      for (const t of transformers)
      { Object.setPrototypeOf(t.data, this.data) 
        this.merge(t.init, this.init);
        if (isJsonObject(this.init))
        { t.init[t.name] = this.init[t.name] };
      }
    }
    else
    { this._pipe_tail.pipe(...transformers) }
     
    this._pipe_tail = this._pipe_transformers[0]; 

    return this;
  }

  /**
   * This method is called after the transformer has
   * locally transformed the JSON value. The locally
   * transformed value is passed to the transformers 
   * that have been added by {@link pipe}.
   * 
   * @param { JsonFunctionParameters} _ 
   */
  public transformerPipe(_: JsonFunctionParameters): JsonValue
  { let l_value: JsonValue = _.value;

    for (const t of this._pipe_transformers)
    { l_value = t.transform({value: l_value, data: _.data, level: _.level}) } 

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
      { l_value = c_transformer({value: value, data: c_data, level}) }
    }

    // Pipe
    l_value = this.transformerPipe({value: l_value, data: c_data, level});

    return l_value; 
  }
}

/** @export  JsonTransformer*/
export default JsonTransformer;
