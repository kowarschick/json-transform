/**
 * @module    module:function/array_sum
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonArray, JsonFunctionParameters, EnumJsonFunctionType } from '../interfaces';

/**
  * @function 
  * @description
  * If the first element of the Array is equal to 
  * <code>JsonFunctionArraySum.init</code> 
  * (default: <code>'$sum'</code>),
  * the sum of the other elements, which should be numbers,
  * is returned. If there are no other elements, 
  * <code>0</code> is returned.
  * <p>
  * Otherwise the Array itself is returned as value.
  *
  * @param {Partial<JsonFunctionArrayParameters>} _
  *   An object containing the following attributes.
  * @param {JsonArray} _.value
  *   The JSON array to be transformed.
  */
export function JsonFunctionArraySum({value}: JsonFunctionParameters<JsonArray>)
{ if (value.length === 0 || value[0] !== JsonFunctionArraySum.init)
  { return value; }

  return value.slice(1).reduce( (s, v) => (s as number) + (v as number), 0);
}

JsonFunctionArraySum.type = EnumJsonFunctionType.JsonArray;
JsonFunctionArraySum.init = "$sum";

export default JsonFunctionArraySum;