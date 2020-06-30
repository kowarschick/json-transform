/**
 * @module    traversal_restricted
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonValue }                 from './types';
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
 * @extends module:traversal.JsonTransformerTraversal
 * 
 * @param {JsonTransformerParameters} _
 * @param {Init}            _.init
 * @param {number}          [_.init.minLevel = 0]
 * @param {number}          [_.init.maxLevel = Infinity]
 * @param {Data}            [_.data = {}]
 * @param {number}          [_.level = 0]
 * @param {JsonTransformer} [_.transformer = undefined]
 */
export 
class JsonTransformerTraversalRestricted extends JsonTransformerTraversal
{ constructor ( { init = { minLevel: 0, 
                           maxLevel: Infinity,
                         }, 
                  ..._
                }: JsonTransformerParameters = {}
              ) 
  { super({init, ..._}) }


  /** @override */
  transformerPipe(_: JsonFunctionParameters): JsonValue
  { return (   (this!.init!.minLevel as number) <= _.level 
            && _.level <= (this!.init!.maxLevel as number))
           ? super.transformerPipe(_)
           : _.value; 
  }
}

export default JsonTransformerTraversalRestricted;
