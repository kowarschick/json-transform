/**
 * @module    function/unnest
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonType, JsonArray, JsonValue }                 from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor } from '../types';

/**
 * @function 
 * @description
 * Flattens an array of arrays, i.e., returns an array that 
 * contains the elements of the arrays inside <code>_.value</value>.
 * Elements of <code>_.value</value> that are no arrays are 
 * copied without modifications into the result array. 
 * 
 * <h4>Examples</h4>
 * 
 * ```ts
 * import { JsonTransformerFunction } from '@wljkowa/json-transformer';
 * import { JsonFunctionUnnest }      from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerFunction
 *           ({ init: [ JsonFunctionUnnest ] })
 * 
 * t.transform({ value: ["$unnest", [1, 2], 3, [[4]], [5], [{}]] }) 
 * // => [1, 2, 3, [4], 5, {}]
 * 
 * t.transform({ value: 
 *               { "$function": "$unnest"
 *                 "$value":     [[1, 2], 3, [[4]], [5], [{}]] 
 *               }
 *            });
 * // => [1, 2, 3, [4], 5, {}]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _.value
 *   The JSON array to be transformed.
 * @returns {JsonValue}
 */

export 
function unnest( {value}: JsonFunctionParameters<JsonArray>, 
                 begin: number = 0
               ): JsonValue
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
 * This constant defines a JSON function that 
 * flattens/unnests an array by one level.
 * @constant
 * @type {JsonFunctionDescriptor}
 */
export
const JsonFunctionUnnest: JsonFunctionDescriptor =
{ name:     '$unnest',
  type:     JsonType.Array,
  function: unnest,
}

export default JsonFunctionUnnest;