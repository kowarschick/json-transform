/**
 * @module    module:function/array_count
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonArray, JsonFunctionParameters, EJsonType } from '../interfaces';

/**
  * @function 
  * @description
  *   If the first element of the Array is equal to 
  *   <code>JsonFunctionArrayCount.init</code> 
  *   (default: <code>'$count'</code>),
  *   the number of the other elements is returned. 
  *   <p>
  *   Otherwise the Array itself is returned as value.
  * 
  * @param {Partial<JsonFunctionArrayParameters>} _
  *   An object containing the following attributes.
  * @param {JsonArray} _.value
  *   The JSON array to be transformed.
  * @returns {JsonValue}
  */
export function JsonFunctionArrayCount({value}: JsonFunctionParameters<JsonArray>)
{ if (value.length === 0 || value[0] !== JsonFunctionArrayCount.init)
  { return value; }

  return value.length-1;
}

JsonFunctionArrayCount.type = EJsonType.Array;
JsonFunctionArrayCount.init = "$count";

export default JsonFunctionArrayCount;
