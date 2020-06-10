/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

import { JsonFunctionArrayParameters, EnumJsonFunctionType } from '~/interfaces';

/**
  * If the first element of the Array is equal to 
  * <code>JsonFunctionArraySum.init<code> (<code>$sum</code>)
  * the sum of the other elements, which should be numbers,
  * is returned. If there are no other elements, 
  * <code>0</code> is returned.
  * 
  * Otherwise the Array itself is returned as value.
  */
export function JsonFunctionArraySum({value}: JsonFunctionArrayParameters)
{ if (value.length === 0 || value[0] !== JsonFunctionArraySum.init)
  { return value; }

  return value.slice(1).reduce( (s, v) => (s as number) + (v as number), 0);
}

JsonFunctionArraySum.type = EnumJsonFunctionType.Array;
JsonFunctionArraySum.init = "$sum";

export default JsonFunctionArraySum;
