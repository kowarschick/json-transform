/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */

import { JsonValue, JsonMap, JsonArray                                   } from "./interfaces";
import { JsonFunctionParameters                                          } from "./interfaces";
import { JsonTransformerProperties, JsonTransformerParameters            } from "./interfaces";
import { JsonTransformerString, JsonTransformerArray, JsonTransformerMap } from "./interfaces";
import { Data } from "./interfaces";

export 
interface JsonTransformer extends JsonTransformerProperties{};

/**
 * A class to recursivley transform <code>JsonValue</code>s 
 * by applying <code>JsonTransformer</code>s.
 * 
 * @class
 */
export 
class JsonTransformer
{/**
  * @constructor
  *
  * @param init
  *   An object that may be used to initialize the transformer.
  * @param transformer
  *   A transformer or an array of transformers to which the JSON value 
  *   are passed, after it may have been transformed by this transformer. 
  *   After that transformation, this transformer may transform the 
  *   result of <code>transformer</code> further. 
  * @param data
  *   A data object that is passed as environment to the
  *   transformers. If data doen not contain the property
  *   <code>$level</code>, that property is added and initialized
  *   by <code>0</code>.
 */
  constructor
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

  protected readonly transformStringBefore: JsonTransformerString = null;
  protected readonly transformArrayBefore:  JsonTransformerArray  = null;
  protected readonly transformMapBefore:    JsonTransformerMap    = null;
  
  protected transformPipe(_: JsonFunctionParameters): JsonValue
  { return this.transformer?.transform(_) ?? _.value; }
  
  protected readonly transformStringAfter: JsonTransformerString = null;
  protected readonly transformArrayAfter:  JsonTransformerArray  = null;
  protected readonly transformMapAfter:    JsonTransformerMap    = null;

 /**
  * Transforms a <code>JsonValue</code>.
  * @method
  * @param value
  *   The JSON value to be transformed.
  * $return
  *   A clone of <code>value</code> with the transformations done.
  */
  public transform ({value, data = {}, level = 0}: Partial<JsonFunctionParameters>): JsonValue
  { const c_data = { ...data }; 
    Object.setPrototypeOf(c_data, this.data );

    let l_value = value;

    // Do transformations before passing the value to the pipe.
    if (this.transformStringBefore != null && typeof l_value === 'string')
    { l_value = this.transformStringBefore({value: value as string, data: c_data, level}); }
    else
    if (this.transformArrayBefore != null && Array.isArray(l_value))
    { l_value = this.transformArrayBefore({value: l_value as JsonArray, data: c_data, level}); }
    else
    if (this.transformMapBefore != null && typeof l_value === 'object')
    { l_value = this.transformMapBefore({value: l_value as JsonMap, data: c_data, level}); }

    // Pipe
    l_value = this.transformPipe({value: l_value, data: c_data, level});

    // Do transformations after the value has been transformed by the pipe.
    if (this.transformStringAfter != null && typeof l_value === 'string')
    { l_value = this.transformStringAfter({value: l_value as string, data: c_data, level}); }
    else
    if (this.transformArrayAfter != null && Array.isArray(l_value))
    { l_value = this.transformArrayAfter({value: l_value as JsonArray, data: c_data, level}); }
    else
    if (this.transformMapAfter != null && typeof l_value === 'object')
    { l_value = this.transformMapAfter({value: l_value as JsonMap, data: c_data, level}); }

    return l_value; 
  }

  /**
   * @method
   * @param transformer 
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
