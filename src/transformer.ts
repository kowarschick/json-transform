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
{ [key: string]: JsonValue | JsonTransformer; }

export type JsonTransformerParameters =
  Partial<{ init:         any,
            level:        number,
            transformers: JsonTransformer | JsonTransformer[] | null,
            data:         Indexable
         }>

export type JsonTransformerString = { (value: string):    JsonValue } | null;
export type JsonTransformerArray  = { (value: JsonArray): JsonValue } | null;
export type JsonTransformerMap    = { (value: JsonMap):   JsonValue } | null;

export 
interface JsonTransformer extends Readonly<JsonTransformerParameters>{};

export 
class JsonTransformer
{/**
  * A class to recursivley transform <code>JsonValue</code>s 
  * by applying <code>JsonTransformer</code>s.
  *
  * $param init
  *   An object that may be used to initialize the transformer.
  * $param level
  *   The level of the current JSON value within the entire JSON value.
  * $param transformer
  *   A transformer or an array of transformers to which the JSON value 
  *   are passed, after it may have been transformed by this transformer. 
  *   After that transformation, this transformer may transform the 
  *   result of <code>transformer</code> further. 
   * $param data
  *   A data object that is passed as environment to the
  *   transformers.
 */
  constructor
  ( { init         = undefined,
      level        = 0,
      transformers = null,
      data         = {}
    }: JsonTransformerParameters = {}) 
  { this.options = {init, level, transformers, data};
    Object.assign(this, this.options);  
  }

  protected readonly options:   JsonTransformerParameters;

  protected readonly transformStringBefore: JsonTransformerString = null;
  protected readonly transformStringAfter:  JsonTransformerString = null;
  protected readonly transformArrayBefore:  JsonTransformerArray  = null;
  protected readonly transformArrayAfter:   JsonTransformerArray  = null;
  protected readonly transformMapBefore:    JsonTransformerMap    = null;
  protected readonly transformMapAfter:     JsonTransformerMap    = null;

  protected invokeTransformers (value: JsonValue, options: JsonTransformerParameters): JsonValue
  { const l_transformers = options.transformers;

    if (Array.isArray(l_transformers))
    { for (let t of l_transformers)
      { value = t.transform(value, options); }
    }
    else if (l_transformers != null)
    { value = l_transformers.transform(value, options); }

    return value;
  }

  protected pipe(value: JsonValue, options: JsonTransformerParameters): JsonValue
  { return this.invokeTransformers(value, options); }
  
 /**
  * Transforms a <code>JsonValue</code>.
  *
  * $param value
  *   The JSON value to be transformed.
  * $return
  *   A clone of <code>value</code> with the transformations done.
  */
  public transform (value: JsonValue, options: JsonTransformerParameters = this.options): JsonValue
  { let l_value = value;

    // Do transformations before passing the value to the pipe.
    if (this.transformStringBefore != null && typeof value === 'string')
    { l_value = this.transformStringBefore(value as string); }
    else
    if (this.transformArrayBefore != null && Array.isArray(value))
    { l_value = this.transformArrayBefore(value as JsonArray); }
    else
    if (this.transformMapBefore != null && typeof value === 'object')
    { l_value = this.transformMapBefore(value as JsonMap); }

    // Pipe
    l_value = this.pipe(l_value, options);

    // Do transformations after the value has been transformed by the pip..
    if (this.transformStringAfter != null && typeof value === 'string')
    { l_value = this.transformStringAfter(value as string); }
    else
    if (this.transformArrayAfter != null && Array.isArray(value))
    { l_value = this.transformArrayAfter(value as JsonArray); }
    else
    if (this.transformMapAfter != null && typeof value === 'object')
    { l_value = this.transformMapAfter(value as JsonMap); }

    return l_value; 
  }
}
