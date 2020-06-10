/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

import { Data, JsonArray } from '~/interfaces';

export function JsonFunctionArraySome(value: JsonArray, data: Data, level: number)
{ const c_length = value.length;
  
  if (c_length === 0 || value[0] !== JsonFunctionArraySome.init)
  { return value; }

  return (c_length === 1) 
         ? undefined
         : value[Math.floor(Math.random()*(c_length-1))+1];
}
JsonFunctionArraySome.init = "$some";

export default JsonFunctionArraySome;
