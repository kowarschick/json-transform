/**
 * @module    'function/array.min'
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonFunctionArrayParameters, EnumJsonFunctionType } from '~/interfaces';

/**
  * @function 
  * @description
  * If the first element of the Array is equal to 
  * <code>JsonFunctionArrayMin.init</code>
  * (default: <code>'$min'</code>)
  * the minimum element of the other elements,
  * which should be numbers,
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
export function JsonFunctionArrayMin({value}: JsonFunctionArrayParameters)
{ if (value.length === 0 || value[0] !== JsonFunctionArrayMin.init)
  { return value; }

  return value.slice(1).reduce( (m, v) => Math.min((m as number), (v as number)), Infinity);
}

JsonFunctionArrayMin.type = EnumJsonFunctionType.JsonArray;
JsonFunctionArrayMin.init = "$min";

export default JsonFunctionArrayMin;
