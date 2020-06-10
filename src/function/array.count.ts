/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */

import { JsonFunctionArrayParameters, EnumJsonFunctionType } from '~/interfaces';

/**
  * If the first element of the Array is equal to 
  * <code>JsonFunctionArrayCount.init<code> (<code>$count</code>)
  * the number of the other elements is returned. 
  * 
  * Otherwise the Array itself is returned as value.
  */
export function JsonFunctionArrayCount({value}: JsonFunctionArrayParameters)
{ if (value.length === 0 || value[0] !== JsonFunctionArrayCount.init)
  { return value; }

  return value.length-1;
}

JsonFunctionArrayCount.type = EnumJsonFunctionType.Array;
JsonFunctionArrayCount.init = "$count";

export default JsonFunctionArrayCount;
