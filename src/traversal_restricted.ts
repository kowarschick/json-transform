/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L.J. Kowarschick
 * @license   MIT
 */

import { JsonValue }                 from './interfaces';
import { JsonFunctionParameters, }   from './interfaces';
import { JsonTransformerTraversal }  from './traversal';
import { JsonTransformerParameters } from './transformer';

/**
 * @class
 * @Xextends JsonTransformer
 * @description
 *   extends {@link JsonTransformer}
 *   <p>
 *   This transformer applies the transformer passed as argument
 *   to the constructor or added by means of the <code>pipe</code>
 *   method recursively to elements of the JSON value that fulfil
 *   the following condition:
 * 
 *   ```this.init.minLevel <= _.level && _.level <= this.init.maxLevel``` 
 * 
 * @param {JsonTransformerParameters} _
 * @param {Object} _.init
 * @param {number} [_.init.minLevel = 0]
 * @param {number} [_.init.maxLevel = Infinity]
 * @param {Data} [_.data = {}]
 * @param {number} [_.level = 0]
 * @param {JsonTransformer} [_.transformer = undefined]
 */
export 
class JsonTransformerTraversalRestricted extends JsonTransformerTraversal
{constructor (options: JsonTransformerParameters = {}) 
  { super({ ...options, init: { minLevel: options?.init?.minLevel ?? 0,
                                maxLevel: options?.init?.maxLevel ?? Infinity,
                              }
         }); 
  }

  transformerPipe(_: JsonFunctionParameters): JsonValue
  { return (this.init.minLevel <= _.level && _.level <= this.init.maxLevel)
           ? super.transformerPipe(_)
           : _.value; 
  }
}

export default JsonTransformerTraversalRestricted;
