/**
 * @module    function/shuffle
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonObject, JsonType }    from '../types';
import { JsonFunctionParameters }  from '../types';
import { JsonTransformerFunction } from '../function';
import { shuffle }                 from './array_shuffle';

/**
 * @function 
 * @description
 * Shuffles the value stored in <code>_.value['$value']</code>, 
 * if it is an array.
 *
 * <h4>Examples</h4>
 * 
 * ```ts
 * import { JsonTransformerFunction }   from '@wljkowa/json-transformer';
 * import { JsonFunctionObjectShuffle } from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerFunction
 *           ({init: { functions: [ JsonFunctionObjectShuffle ] } })
 * 
 * t.transform({ value: { "$function": "$shuffle", 
 *                        "$value":    [1, 2, 3]
 *                      } 
 *            }) 
 * // => [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2] or [3,2,1]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonObject>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 */
export function JsonFunctionObjectShuffle({value}: JsonFunctionParameters<JsonObject>)
{ const 
    c_init  = JsonFunctionObjectShuffle.init,
    c_value = value?.[c_init.valueAttr] ?? null;

  return Array.isArray(c_value) ? shuffle(c_value) : null;
  /*
  return (   value?.[JsonTransformerFunction.functionAttribute] !== c_init.function 
          || !Array.isArray(c_value)
         )
         ? value
         : shuffle(c_value)
  */
}

JsonFunctionObjectShuffle.type = JsonType.Object;
JsonFunctionObjectShuffle.init = { function:  "$shuffle",
                                   valueAttr: "$value" 
                                 };

export default JsonFunctionObjectShuffle;
