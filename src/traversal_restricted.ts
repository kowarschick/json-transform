/**
 * @module    traversal_restricted
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonValue, InitMap }        from './types';
import { JsonFunctionParameters, }   from './types';
import { JsonTransformerTraversal }  from './traversal';
import { JsonTransformerParameters } from './transformer';

/**
 * This transformer applies its pipe transformer 
 * recursively to all elements of the JSON value 
 * that fulfil the following condition:
 * 
 * ```_.init.minLevel <= _.level && _.level <= _.init.maxLevel``` 
 *
 * <h4>Examples</h4>
 * 
 * ```ts
 * import { JsonTransformerTraversalRestricted } from '@wljkowa/json-transformer';
 * import { JsonTransformerLevel }               from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerTraversalRestricted({init: {minLevel: 2, maxLevel: 3}})
 *     .pipe(new JsonTransformerLevel());
 * 
 * t.transform({ value: "$level" }) 
 * // => "$level"
 * 
 * t.transform({ value: ["$level", {"level": "$level"}, ["$level", ["$level", ["$level"]]]] })   
 * // => ["$level", {"level": 2}, [2, [3, ["$level"]]]]  
 * ```
 * 
 * @extends module:traversal.JsonTransformerTraversal
 * 
 * @param {JsonTransformerParameters} _
 * @param {Init}   _.init
 * @param {number} [_.init.minLevel = 0]
 * @param {number} [_.init.maxLevel = Infinity]
 */

export 
class JsonTransformerTraversalRestricted extends JsonTransformerTraversal
{ constructor ( { init = { minLevel: 0, 
                           maxLevel: Infinity,
                         }, 
                  ..._
                }: JsonTransformerParameters = {}
              ) 
  { super({ init, ..._ }) 
    this.initialize();
  }

  /** @override */
  transformerPipe(_: JsonFunctionParameters): JsonValue
  { const c_init = this.init as InitMap;
    return (   (c_init.minLevel as number) <= _.level 
            && _.level <= (c_init.maxLevel as number))
           ? super.transformerPipe(_)
           : _.value; 
  }
}

export default JsonTransformerTraversalRestricted;
