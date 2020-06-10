/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

import { JsonFunctionArrayParameters, EnumJsonFunctionType } from '~/interfaces';

/**
  * If the first element of the Array is equal to 
  * <code>JsonFunctionArraySome.init<code> (<code>$some</code>)
  * some of the other elements is returned as value. 
  * If there are no other elements, <code>undefined</code> 
  * is returned.
  * 
  * Otherwise the Array itself is returned as value.
  */
export function JsonFunctionArraySome({value}: JsonFunctionArrayParameters)
{ const c_length = value.length;
  
  if (c_length === 0 || value[0] !== JsonFunctionArraySome.init)
  { return value; }

  return (c_length === 1) 
         ? undefined
         : value[Math.floor(Math.random()*(c_length-1))+1];
}

JsonFunctionArraySome.type = EnumJsonFunctionType.Array;
JsonFunctionArraySome.init = "$some";

export default JsonFunctionArraySome;
