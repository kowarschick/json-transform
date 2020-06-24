/**
 * @module    function/unnest
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonArray, JsonType }    from '../types';
import { JsonFunctionParameters } from '../types';

export function unnest(value: JsonArray, begin: number = 0): JsonArray
{ const 
    c_length = value.length,
    c_result: JsonArray = [];

  for (let i = begin; i < c_length; i++)
  { const l_value = value[i];

    if (Array.isArray(l_value))
    { for (let j of l_value) { c_result.push(j); } }
    else
    { c_result.push(l_value); }
  }

  return c_result;
}  

/**
 * @function 
 * @description
 * If the first element of the Array is equal to 
 * <code>JsonFunctionArrayUnnest.init.function</code> (default: <code>$unnest</code>),
 * an array containg the other elements unnested is returned as value. 
 * If there are no other elements, <code>[]</code> 
 * is returned.
 * <p>
 * Otherwise the Array itself is returned as value.
 * <h4>Examples</h4>
 * 
 * ```ts
 * import { JsonTransformerFunction } from '@wljkowa/json-transformer';
 * import { JsonTransformerUnnest }   from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerFunction
 *           ({init: { functions: [ JsonFunctionArrayUnnest ] } })
 * 
 * t.transform({ value: ["$unnest", [1, 2], 3, [[4]], [5], [{}]] }) 
 * // => [1, 2, 3, [4], 5, {}]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 */
export function JsonFunctionArrayUnnest({value}: JsonFunctionParameters<JsonArray>)
{ return (value.length === 0 || value[0] !== JsonFunctionArrayUnnest.init.function)
         ? value
         : unnest(value, 1)
}

JsonFunctionArrayUnnest.type = JsonType.Array;
JsonFunctionArrayUnnest.init = { function: "$unnest" };

export default JsonFunctionArrayUnnest;
