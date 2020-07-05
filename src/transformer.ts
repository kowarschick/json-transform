/**
 * @module    transformer
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

const 
  FUNCTION = '$function',
  VALUE    = '$value';

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

export 
type JsonTransformerParameters = 
{ init?:   Init,
  data?:   Data,
  rename?: Record<string, string>  
};

export 
interface JsonTransformer //extends JsonTransformerProperties
{ readonly [key: string]: any; // to be able to access JsonTransformer properties dynamically
}

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
 * @param {InitMap} [_.init = {}]
 *   An object that may be used to initialize the transformer and its subclasses.
 * @param {Data} [_.data = {}]
 *   A data object that is passed as environment to the
 *   transformers. It can be used by transformers (defined via subclassing) 
 *   to replace or compute certain JSON values.
 * @param {Record<string, string>} [_.rename = {}]
 *   A map that translates transformer names and attributes into other ones. 
 */
export 
class JsonTransformer
{ constructor
  ( { init={}, data={}, rename={} }: JsonTransformerParameters = {}) 
  { this.v_root = this;
    this.v_name = this.constructor.name;
    
    this.init   = init
    this.merge({[this.v_name] : this.init}, this.v_init_root);
    
    this.v_data   = data;

    this.v_rename = rename; 
    for (const [k, v] of Object.entries(rename))
    { this.v_rename_reverse[v] = k }
  }

  protected        init:             Init;
  
  private          v_root:           JsonTransformer;
  private readonly v_name:           string;
  private readonly v_init_root:      InitMap = {};
  private readonly v_data:           Data = {};
  private readonly v_rename:         Record<string, string>;
  private readonly v_rename_reverse: Record<string, string> = {};

  private merge(initNew: InitMap, initOld: InitMap)
  { for (let [key_new, value_new] of Object.entries(initNew))
    { const value_old = initOld[key_new];
      if (value_old == null) // there is no old value, so the new value is stored
      { initOld[key_new] = value_new }
      else if (isJsonObject(value_old) && isJsonObject(value_new))
      { this.merge(value_new, value_old) }
    }
  }

  /**
   * Renames an attribute or function name  
   * into another one by means of rename tables 
   * that are passed to the transformer constructors. 
   * @protected
   * @method
   * @param {string} name
   * @returns {string} 
   */
  protected rename(name: string): string
  { return this.v_root.v_rename[name] ?? name; }
 
  /**
   * Undoes the renaming of an attribute or 
   * function name.
   * @protected
   * @method
   * @param {JsonString} name
   * @returns {JsonString} 
   */
  protected rerename(name: string): string
  { return this.v_root.v_rename_reverse[name] ?? name; }
 
  /**
   * Fetches the function name of a JSON array function
   * call or a JSON object function call.
   * The function <code>rerename</code> is applied to
   * the function name.
   * @protected
   * @method
   * @param   {JsonArray|JsonObject} value
   * @returns {string|null} 
   *          function name of <code>value</code>;
   *          <coode>null</code>, if <code>value</code>
   *          is no JSON function call. 
   */
  protected functionName(value: JsonArray|JsonObject): string|null
  { const f_name = 
      (name: JsonValue) =>  
      // Ey, tricky: 
      //   '@count' is an alias,      iff this.v_rename_reverse['@count'] != null
      //   '$count' has been renamed, iff this.v_rename['$count'] != null
      isJsonString(name) 
      ? ( this.v_rename_reverse[name] != null 
          ? this.rerename(name)       // as name has been renamed, undo renaming
          : (this.v_rename[name] != null 
             ? null // as name has an alias, name cannot be used as function name              
             : name
            )
        ) 
      : null;

    if (isJsonArray(value))
    { return value.length > 0 ? f_name(value[0]) : null }
    else
    { return f_name(value[this.rename(FUNCTION)]) }
  }

  /**
   * Tests whether <code>name</code> is the function name of <code>value</code>.
   * @param   {string}               name 
   * @param   {JsonArray|JsonObject} value 
   * @returns {boolean}
   */
  protected isFunctionName(name: string, value: JsonArray|JsonObject): boolean
  { return (this.functionName(value) === name) }

  /**
   * Computes the array function value of a JSON function object call,
   * if the function name of the JSON object denotes an array function
   * and the name of thet function is equal to <code>name</code>.
   * @param   {string}     name
   * @param   {JsonObject} value
   * @returns {JsonArray|null}
   */
  protected arrayFunctionValue
  (name: string, value: JsonObject): JsonArray | null
  { const c_name = this.functionName(value);
    if (c_name === name)
    { const c_value = value[this.rename(VALUE)];
      return isJsonArray(c_value) ? c_value : null;
    }
    return null;
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
    { return this }

    if (this._pipe_tail == null)
    { this._pipe_transformers = transformers;
  
      for (const t of transformers)
      { Object.setPrototypeOf(t.v_data, this.v_data); 
        t.v_root = this;

        this.merge({[t.v_name]: t.init}, this.v_init_root);
        this.merge(t.v_rename, this.v_rename);

        t.init = this.v_init_root[t.v_name];
      }
    }
    else
    { this._pipe_tail.pipe(...transformers) }
     
    this._pipe_tail = this._pipe_transformers[0]; 

    return this;
  }

  protected readonly transformerJsonPrimitive: JsonFunction<JsonPrimitive> | null = null;
  protected readonly transformerJsonArray:     JsonFunction<JsonArray>     | null = null;
  protected readonly transformerJsonObject:    JsonFunction<JsonObject>    | null = null;
  protected readonly transformerJsonString:    JsonFunction<JsonString>    | null = null;
  protected readonly transformerJsonNumber:    JsonFunction<JsonNumber>    | null = null;
  protected readonly transformerJsonBoolean:   JsonFunction<JsonBoolean>   | null = null;
  protected readonly transformerJsonNull:      JsonFunction<JsonNull>      | null = null;

  /**
   * This method is called after the transformer has
   * locally transformed the JSON value. The locally
   * transformed value is passed to the transformers 
   * that have been added by {@link pipe}.
   * @protected
   * @method
   * @param {JsonFunctionParameters} _ 
   */
  protected transformerPipe(_: JsonFunctionParameters): JsonValue
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
    Object.setPrototypeOf(c_data, this.v_data );

    let l_value: JsonValue = value;

    // Do local transformations before passing the value to the pipe.
    for (const [c_key, c_test] of Object.entries(c_transformer_tests))
    { const c_transformer = this[c_key];
     
      if (c_transformer != null && c_test(value))
      { l_value = c_transformer({value: value, data: c_data, level}); }
      
    }

    // Pipe
    l_value = this.transformerPipe({value: l_value, data: c_data, level});

    return l_value;
  }
}

/** @export  JsonTransformer*/
export default JsonTransformer
