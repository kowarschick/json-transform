/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonValue }                 from './interfaces';
import { JsonFunctionParameters, }   from './interfaces';
import { JsonTransformerTraversal }  from './traversal';
import { JsonTransformerParameters } from './root';

/**
  * @class
  * @classdesc
  * This transformers applies the transformer passed recursively to
  * all elements of the JSON value. 
  */
export 
class JsonTransformerTraversalRestricted extends JsonTransformerTraversal
{ constructor (options: JsonTransformerParameters = {}) 
  { super({ ...options, init: { minLevel: options?.init?.minLevel ?? 0,
                                maxLevel: options?.init?.maxLevel ?? Infinity,
                              }
         }); 
  }

  protected transformPipe(_: JsonFunctionParameters): JsonValue
  { return (this.init.minLevel <= _.level && _.level <= this.init.maxLevel)
           ? super.transformPipe(_)
           : _.value; 
  }
}

export default JsonTransformerTraversalRestricted;
