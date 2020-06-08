/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

export type JsonValue     = JsonPrimitive | JsonMap | JsonArray ;
export type JsonPrimitive = string | number | boolean | null | undefined;
export type JsonMap       = {[key: string]: JsonValue};
export type JsonArray     = JsonValue[];

export interface Indexable 
{ [key: string]: JsonValue | JsonTransformer | null; }

export type Data = Indexable & { level: number };

type JsonTransformerProperties =
  { init:         any,
    data:         Data,
    transformers: JsonTransformer | JsonTransformer[]
  };

export type JsonTransformerParameters = Partial<JsonTransformerProperties>;

export type JsonTransformerString     = { (value: string,    data: Data): JsonValue } | null;
export type JsonTransformerArray      = { (value: JsonArray, data: Data): JsonValue } | null;
export type JsonTransformerMap        = { (value: JsonMap,   data: Data): JsonValue } | null;

export 
interface JsonTransformer extends Readonly<JsonTransformerProperties>{};

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
  *   <code>level</code>, that property is added and initialized
  *   by <code>0</code>.
 */
  constructor
  ( { init         = undefined,
      data         = { level: 0},
      transformers = [],
    }: JsonTransformerParameters  
    = {}
  ) 
  { Object.assign(this, {init, data});  

    this.transformers = 
      (transformers == null) 
      ? []
      : (!Array.isArray(transformers))
        ? [transformers]
        : transformers;
  }

  public     transformers:          JsonTransformer[];

  protected readonly transformStringBefore: JsonTransformerString = null;
  protected readonly transformStringAfter:  JsonTransformerString = null;
  protected readonly transformArrayBefore:  JsonTransformerArray  = null;
  
  protected pipe(value: JsonValue, data: Data): JsonValue
  { const l_transformers = this.transformers;

    if (l_transformers != null)
    { for (let transformer of l_transformers)
      { value = transformer.transform(value, data); }
    }

    return value; 
  }
  
  protected readonly transformArrayAfter:   JsonTransformerArray  = null;
  protected readonly transformMapBefore:    JsonTransformerMap    = null;
  protected readonly transformMapAfter:     JsonTransformerMap    = null;

 /**
  * Transforms a <code>JsonValue</code>.
  *
  * $param value
  *   The JSON value to be transformed.
  * $return
  *   A clone of <code>value</code> with the transformations done.
  */
  public transform (value: JsonValue, data?: Data): JsonValue
  { 
    let l_value = value;

    // Do transformations before passing the value to the pipe.
    if (this.transformStringBefore != null && typeof value === 'string')
    { l_value = this.transformStringBefore(value as string, data ?? this.data); }
    else
    if (this.transformArrayBefore != null && Array.isArray(value))
    { l_value = this.transformArrayBefore(value as JsonArray, data ?? this.data); }
    else
    if (this.transformMapBefore != null && typeof value === 'object')
    { l_value = this.transformMapBefore(value as JsonMap, data ?? this.data); }

    // Pipe
    l_value = this.pipe(l_value, data ?? this.data);

    // Do transformations after the value has been transformed by the pip..
    if (this.transformStringAfter != null && typeof value === 'string')
    { l_value = this.transformStringAfter(value as string, data ?? this.data); }
    else
    if (this.transformArrayAfter != null && Array.isArray(value))
    { l_value = this.transformArrayAfter(value as JsonArray, data ?? this.data); }
    else
    if (this.transformMapAfter != null && typeof value === 'object')
    { l_value = this.transformMapAfter(value as JsonMap, data ?? this.data); }

    return l_value; 
  }

  public add (...transformers: JsonTransformer[]): JsonTransformer
  { for (let transformer of transformers)
    { this.transformers.push(transformer); }
    return this;
  }
}
