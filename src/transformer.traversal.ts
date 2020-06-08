/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

import { JsonValue, JsonArray, JsonMap, Data }        from './transformer';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
import { JsonTransformerArray, JsonTransformerMap }   from './transformer';

export 
class JsonTransformerTraversal extends JsonTransformer
{/**
  * This transformers applies the transformer passed recursively to
  * all elements of the JSON value. 
  */
  constructor
  ( options: JsonTransformerParameters = {}) 
  { super(options); }


  protected transformArrayAfter: JsonTransformerArray = 
  (value: JsonArray, data: Data) => 
  { const 
    c_data = { ...data, level: data.level+1 },
    c_result: JsonValue = [];

    for (const c_json_value of value)
    { c_result.push(this.transform(c_json_value, c_data)); }

    return c_result;
  }

  protected transformMapAfter: JsonTransformerMap = 
  (value: JsonMap, data: Data) => 
  { const
      c_data = { ...data, level: data.level+1 },
      c_result: JsonValue = {};

   for (const [c_key, c_value] of Object.entries(value))
   { c_result[this.transform(c_key, c_data) as string] = this.transform(c_value, c_data); }

   return c_result;
  }

}
