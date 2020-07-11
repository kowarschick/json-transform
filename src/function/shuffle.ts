/**
 * @module    function/shuffle
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonType, JsonArray }                            from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor } from '../types';

/**
 * @function 
 * @description
 * Shuffles the elements of a clone of an array.
 * 
 * <h4>Examples</h4>
 * 
 * ```ts
 * import { JsonTransformerFunction } from '@wljkowa/json-transformer';
 * import { JsonFunctionShuffle }     from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerFunction
 *           ({ init: [ JsonFunctionShuffle ] })
 * 
 * t.transform({ value: ["$shuffle", 1, 2, 3] }) 
 * // => [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2] or [3,2,1]
 * 
 * t.transform({ value: 
 *               { "$function": "$shuffle"
 *                 "$value":    [1,2,3] 
 *               }
 *            });
 * // => [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2] or [3,2,1]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _.value
 *   The JSON array to be shuffled.
 * @returns {JsonArray}
 */
export function shuffle( {value}: JsonFunctionParameters<JsonArray>, 
                         begin: number = 0
                       ): JsonArray
{ const c_value = value.slice(begin);
  
  // cmp. https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  for (let i = c_value.length - 1; i > 0; i--) 
  { const j = Math.floor(Math.random() * (i + 1));
    if (i !== j)
    { [c_value[i], c_value[j]] = [c_value[j], c_value[i]] };
  }

  return c_value;
} 

/**
 * This constant defines a JSON function that returns
 * a clone of the input array whose elements hae been
 * shufled thoroughly. 
 * @constant
 * @type {JsonFunctionDescriptor}
 */
export
const JsonFunctionShuffle: JsonFunctionDescriptor =
{ name:     '$shuffle',
  type:     JsonType.Array,
  function: shuffle,
}

export default JsonFunctionShuffle;
