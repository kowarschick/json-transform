/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */

import { JsonFunctionArrayParameters, EnumJsonFunctionType } from '~/interfaces';

/**
  * If the first element of the Array is equal to 
  * <code>JsonFunctionArrayMax.init<code> (<code>$max</code>)
  * the maximum element of the other elements, which should be numbers,
  * is returned. If there are no other elements, 
  * <code>0</code> is returned.
  * 
  * Otherwise the Array itself is returned as value.
  */
export function JsonFunctionArrayMax({value}: JsonFunctionArrayParameters)
{ if (value.length === 0 || value[0] !== JsonFunctionArrayMax.init)
  { return value; }

  return value.slice(1).reduce( (m, v) => Math.max((m as number), (v as number)), -Infinity);
}

JsonFunctionArrayMax.type = EnumJsonFunctionType.Array;
JsonFunctionArrayMax.init = "$max";

export default JsonFunctionArrayMax;
