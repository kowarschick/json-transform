/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

import { Data, JsonValue, JsonArray, JsonMap }                                 from './interfaces';
import { JsonTransformerParameters, JsonTransformerArray, JsonTransformerMap } from './interfaces';
import { JsonTransformer }                                                     from './root';

export 
class JsonTransformerTraversalRestricted extends JsonTransformer
{/**
  * This transformers applies the transformer passed recursively to
  * all elements of the JSON value. 
  */
  constructor
  ( options: JsonTransformerParameters = {}) 
  { super({ ...options, init: { minLevel: options?.init?.minLevel ?? 0,
                                maxLevel: options?.init?.maxLevel ?? Infinity,
                              }
         }); 
  }

  protected pipe(value: JsonValue, data: Data, level: number): JsonValue
  { return (this.init.minLevel <= level && level <= this.init.maxLevel)
           ? super.pipe(value, data, level)
           : value; 
  }

  protected transformArrayAfter: JsonTransformerArray = 
  (value: JsonArray, data: Data, level: number) => 
  { const
      c_level = level+1,
      c_result: JsonValue = [];

    for (const c_json_value of value)
    { c_result.push(this.transform(c_json_value, data, c_level)); }

    return c_result;
  }

  protected transformMapAfter: JsonTransformerMap = 
  (value: JsonMap, data: Data, level: number) => 
  { const
      c_level = level+1,
      c_result: JsonValue = {};

    for (const [c_key, c_value] of Object.entries(value))
    { c_result[this.transform(c_key, data, c_level) as string] 
        = this.transform(c_value, data, c_level); 
    }
 
    return c_result;
  }
}
