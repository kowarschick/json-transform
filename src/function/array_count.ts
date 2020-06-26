/**
 * @module    function/count
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonArray, JsonFunctionParameters, JsonType } from '../types';

/**
  * @function 
  * @description
  *   If the first element of the Array is equal to 
  *   <code>'$count'</code>,
  *   the number of the other elements is returned. 
  * 
  * @param {Partial<JsonFunctionParameters<JsonArray>>} _
  *   An object containing the following attributes.
  * @param {JsonArray} _.value
  *   The JSON array to be transformed.
  * @returns {JsonValue}
  */
export function JsonFunctionArrayCount({value}: JsonFunctionParameters<JsonArray>)
{ if (value.length === 0 || value[0] !== JsonFunctionArrayCount.init.function)
  { return value; }

  return value.length-1;
}

JsonFunctionArrayCount.type = JsonType.Array;
JsonFunctionArrayCount.init = { function: "$count" };

export default JsonFunctionArrayCount;
