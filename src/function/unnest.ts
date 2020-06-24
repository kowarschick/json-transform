/**
 * @module    function/unnest
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonArray, JsonFunctionParameters, JsonType } from '../types';

/**
 * @function 
 * @description
 * If the first element of the Array is equal to 
 * <code>JsonFunctionUnnest.init</code> (default: <code>$unnest</code>)
 * unnest of the other elements is returned as value. 
 * If there are no other elements, <code>null</code> 
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
 *           ({init: { functions: [ JsonFunctionUnnest ] } })
 * 
 * t.transform({ value: [ "$unnest", [1, 2], 3, [[4]], [5], [{}] ] }) 
 * // => [ 1, 2, 3, [4], 5, {} ]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 */
export function JsonFunctionUnnest({value}: JsonFunctionParameters<JsonArray>)
{ const c_length = value.length;
  
  if (c_length === 0 || value[0] !== JsonFunctionUnnest.init.function)
  { return value; }

  const c_result: JsonArray = [];

  for (let i = 1; i < c_length; i++)
  { const l_value = value[i];

    if (Array.isArray(l_value))
    { for (let j of l_value)
      { c_result.push(j); }
    }
    else
    { c_result.push(l_value); }
  }

  return c_result;
}

JsonFunctionUnnest.type = JsonType.Array;
JsonFunctionUnnest.init = {function: "$unnest" };

export default JsonFunctionUnnest;
