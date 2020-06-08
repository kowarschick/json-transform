/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

import { JsonValue, JsonArray, JsonMap }                                   from './transformer';
import { JsonTransformer, JsonTransformerParameters }                      from './transformer';
import { JsonTransformerString, JsonTransformerArray, JsonTransformerMap } from './transformer';

export 
class JsonTransformerTraversal extends JsonTransformer
{/**
  * This transformers applies the transformer passed recursively to
  * all elements of the JSON value. 
  */
  constructor
  ( options: JsonTransformerParameters = {}) 
  { super(options); }

  protected transformStringBefore: JsonTransformerString = 
  (value: string) => 
  { return this.pipe(value, this.options); }

  protected transformArrayBefore: JsonTransformerArray = 
  (value: JsonArray) => 
  { var l_result: JsonValue = [];

    for (const c_json_value of value)
    { l_result.push( this.transform(c_json_value, { ...this.options, level: (this.level ?? 0)+1 } ) ); }

    return l_result;
  }

  protected transformMapBefore: JsonTransformerMap = 
  (value: JsonMap) => 
  { var 
    l_result: JsonValue = {};

   for (const [c_key, c_value] of Object.entries(value))
   { const c_options = { ...this.options, level: (this.level ?? 0)+1 };
     l_result[this.transform(c_key,c_options) as string] = this.transform(c_value, c_options); 
   }

   return l_result;
  }

}
