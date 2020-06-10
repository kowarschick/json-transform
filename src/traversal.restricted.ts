/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

import { JsonValue }                                                                     from './interfaces';
import { JsonFunctionParameters, JsonFunctionArrayParameters, JsonFunctionMapParameters} from './interfaces';
import { JsonTransformerParameters, JsonTransformerArray, JsonTransformerMap }           from './interfaces';
import { JsonTransformer }                                                               from './root';

export 
class JsonTransformerTraversalRestricted extends JsonTransformer
{/**
  * This transformers applies the transformer passed recursively to
  * all elements of the JSON value. 
  */
  constructor (options: JsonTransformerParameters = {}) 
  { super({ ...options, init: { minLevel: options?.init?.minLevel ?? 0,
                                maxLevel: options?.init?.maxLevel ?? Infinity,
                              }
         }); 
  }

  protected pipe(_: JsonFunctionParameters): JsonValue
  { return (this.init.minLevel <= _.level && _.level <= this.init.maxLevel)
           ? super.pipe(_)
           : _.value; 
  }

  protected transformArrayAfter: JsonTransformerArray = 
  ({value, data, level}: JsonFunctionArrayParameters) => 
  { const
      c_level = level+1,
      c_result: JsonValue = [];

    for (const c_json_value of value)
    { c_result.push(this.transform({value: c_json_value, data, level: c_level})); }

    return c_result;
  }

  protected transformMapAfter: JsonTransformerMap = 
  ({value, data, level}: JsonFunctionMapParameters) => 
  { const
      c_level = level+1,
      c_result: JsonValue = {};

    for (const [c_key, c_value] of Object.entries(value))
    { c_result[this.transform({value: c_key, data, level: c_level}) as string] 
        = this.transform({value: c_value, data, level: c_level}); 
    }
 
    return c_result;
  }
}

export default JsonTransformerTraversalRestricted;
