/**
 * @module    function/shuffle
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonArray, JsonFunctionParameters, JsonType } from '../types';

export function shuffle(value: JsonArray, begin: number = 0): JsonArray
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
 * @function 
 * @description
 * If the first element of the Array is equal to 
 * <code>JsonFunctionArrayShuffle.init.function</code> (default: <code>$shuffle</code>)
 * shuffle of the other elements is returned as value. 
 * If there are no other elements, <code>null</code> 
 * is returned.
 * <p>
 * Otherwise the Array itself is returned as value.
 * <h4>Examples</h4>
 * 
 * ```ts
 * import { JsonTransformerFunction } from '@wljkowa/json-transformer';
 * import { JsonTransformerShuffle }  from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerFunction
 *           ({init: { functions: [ JsonFunctionArrayShuffle ] } })
 * 
 * t.transform({ value: ["$shuffle", 1, 2, 3] }) 
 * // => [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2] or [3,2,1]
 * 
 * JsonFunctionArrayShuffle.init.function = "@shuffle";
 * 
 * t.transform({ value: ["@shuffle", 1, 2, 3 ] }) 
 * // => [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2] or [3,2,1]
 * 
 * t.transform({ value: ["$shuffle", 1, 2, 3 ] }) 
 * // => ["$shuffle", 1, 2, 3 ]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 */
export function JsonFunctionArrayShuffle({value}: JsonFunctionParameters<JsonArray>)
{ return (value.length === 0 || value[0] !== JsonFunctionArrayShuffle.init.function)
         ? value
         : shuffle(value, 1)
}

JsonFunctionArrayShuffle.type = JsonType.Array;
JsonFunctionArrayShuffle.init = {function: "$shuffle" };

export default JsonFunctionArrayShuffle;
