/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

import { Interface } from "readline";

export type JsonValue     = JsonPrimitive | JsonMap | JsonArray ;
export type JsonPrimitive = string | number | boolean | null | undefined;
export type JsonMap       = {[key: string]: JsonValue};
export type JsonArray     = JsonValue[];

export interface Data 
{ [key: string]: JsonValue | JsonTransformer | null; }

type JsonTransformerProperties =
  { readonly init:        any,
    readonly data:        Data,
    readonly level:       number,
             transformer: JsonTransformer
  };

export type JsonTransformerParameters = Partial<JsonTransformerProperties>;

export type JsonTransformerString = { (value: string,    data: Data, level: number): JsonValue } | null;
export type JsonTransformerArray  = { (value: JsonArray, data: Data, level: number): JsonValue } | null;
export type JsonTransformerMap    = { (value: JsonMap,   data: Data, level: number): JsonValue } | null;

export
interface JsonTransformer extends JsonTransformerProperties{};

export 
class JsonTransformer
{/**
  * A class to recursivley transform <code>JsonValue</code>s 
  * by applying <code>JsonTransformer</code>s.
  *
  * $param init
  *   An object that may be used to initialize the transformer.
  * $param transformer
  *   A transformer or an array of transformers to which the JSON value 
  *   are passed, after it may have been transformed by this transformer. 
  *   After that transformation, this transformer may transform the 
  *   result of <code>transformer</code> further. 
  * $param data
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
  protected readonly transformStringAfter:  JsonTransformerString = null;
  protected readonly transformArrayBefore:  JsonTransformerArray  = null;
  
  protected pipe(value: JsonValue, data: Data, level: number): JsonValue
  { return this.transformer?.transform(value, data, level) ?? value; }
  
  protected readonly transformArrayAfter: JsonTransformerArray  = null;
  protected readonly transformMapBefore:  JsonTransformerMap    = null;
  protected readonly transformMapAfter:   JsonTransformerMap    = null;

 /**
  * Transforms a <code>JsonValue</code>.
  *
  * $param value
  *   The JSON value to be transformed.
  * $return
  *   A clone of <code>value</code> with the transformations done.
  */
  public transform (value: JsonValue, data: Data = {}, level = 0): JsonValue
  { const c_data = { ...data };
    Object.setPrototypeOf(c_data, this.data );

    let l_value = value;

    // Do transformations before passing the value to the pipe.
    if (this.transformStringBefore != null && typeof l_value === 'string')
    { l_value = this.transformStringBefore(value as string, c_data, level); }
    else
    if (this.transformArrayBefore != null && Array.isArray(l_value))
    { l_value = this.transformArrayBefore(l_value as JsonArray, c_data, level ); }
    else
    if (this.transformMapBefore != null && typeof l_value === 'object')
    { l_value = this.transformMapBefore(l_value as JsonMap, c_data, level ); }

    // Pipe
    l_value = this.pipe(l_value, c_data, level);

    // Do transformations after the value has been transformed by the pipe.
    if (this.transformStringAfter != null && typeof l_value === 'string')
    { l_value = this.transformStringAfter(l_value as string, c_data, level); }
    else
    if (this.transformArrayAfter != null && Array.isArray(l_value))
    { l_value = this.transformArrayAfter(l_value as JsonArray, c_data, level); }
    else
    if (this.transformMapAfter != null && typeof l_value === 'object')
    { l_value = this.transformMapAfter(l_value as JsonMap, c_data, level); }

    return l_value; 
  }

  public add (transformer: JsonTransformer): JsonTransformer
  { const 
      c_data = transformer.data;
      Object.setPrototypeOf(c_data, this.data);

    transformer._root = this;
    this.transformer = transformer; 

    return transformer;
  }
}
