/**
 * @module    function/count
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonArray, JsonFunctionParameters, JsonType } from '../interfaces';

/**
  * @function 
  * @description
  *   If the first element of the Array is equal to 
  *   <code>JsonFunctionCount.init</code> 
  *   (default: <code>'$count'</code>),
  *   the number of the other elements is returned. 
  *   <p>
  *   Otherwise the Array itself is returned as value.
  * 
  * @param {Partial<JsonFunctionParameters<JsonArray>>} _
  *   An object containing the following attributes.
  * @param {JsonArray} _.value
  *   The JSON array to be transformed.
  * @returns {JsonValue}
  */
export function JsonFunctionCount({value}: JsonFunctionParameters<JsonArray>)
{ if (value.length === 0 || value[0] !== JsonFunctionCount.init)
  { return value; }

  return value.length-1;
}

JsonFunctionCount.type = JsonType.Array;
JsonFunctionCount.init = "$count";

export default JsonFunctionCount;
