/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

import { JsonValue }                                                                     from './interfaces';
import { JsonFunctionParameters, JsonFunctionArrayParameters, JsonFunctionMapParameters} from './interfaces';
import { JsonTransformerParameters, JsonTransformerArray, JsonTransformerMap }           from './interfaces';
import { JsonTransformerTraversal }                                                      from './traversal';

export 
class JsonTransformerTraversalRestricted extends JsonTransformerTraversal
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
}

export default JsonTransformerTraversalRestricted;
