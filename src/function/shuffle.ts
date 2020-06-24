/**
 * @module    function/shuffle
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonArray, JsonFunctionParameters, JsonType } from '../types';

/**
 * @function 
 * @description
 * If the first element of the Array is equal to 
 * <code>JsonFunctionShuffle.init</code> (default: <code>$shuffle</code>)
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
 *           ({init: { functions: [ JsonFunctionShuffle ] } })
 * 
 * t.transform({ value: [ "$shuffle", 1, 2, 3] }) 
 * // => [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2] or [3,2,1]
 * 
 * JsonFunctionShuffle.init = "@shuffle";
 * 
 * t.transform({ value: [ "@shuffle", 1, 2, 3 ] }) 
 * // => [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2] or [3,2,1]
 * 
 * t.transform({ value: [ "$shuffle", 1, 2, 3 ] }) 
 * // => [ "$shuffle", 1, 2, 3 ]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 */
export function JsonFunctionShuffle({value}: JsonFunctionParameters<JsonArray>)
{ const c_length = value.length;
  
  if (c_length === 0 || value[0] !== JsonFunctionShuffle.init.function)
  { return value; }

  const c_value = value.slice(1);

  // cmp. https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  for (let i = c_value.length - 1; i > 0; i--) 
  { const j = Math.floor(Math.random() * (i + 1));
    if (i !== j)
    { [c_value[i], c_value[j]] = [c_value[j], c_value[i]] };
  }

  return c_value;
}

JsonFunctionShuffle.type = JsonType.Array;
JsonFunctionShuffle.init = {function: "$shuffle" };

export default JsonFunctionShuffle;
