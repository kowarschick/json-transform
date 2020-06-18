/**
 * @module    module:function/array_some
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonArray, JsonFunctionParameters, JsonType } from '../interfaces';

/**
  * @function 
  * @description
  * If the first element of the Array is equal to 
  * <code>JsonFunctionSome.init</code>
  * (default: <code>'$some'</code>),
  * some of the other elements is returned as value. 
  * If there are no other elements, <code>undefined</code> 
  * is returned.
  * <p>
  * Otherwise the Array itself is returned as value.
  * 
  * @param {Partial<JsonFunctionArrayParameters>} _
  *   An object containing the following attributes.
  * @param {JsonArray} _value
  *   The JSON array to be transformed.
  */
export function JsonFunctionSome({value}: JsonFunctionParameters<JsonArray>)
{ const c_length = value.length;
  
  if (c_length === 0 || value[0] !== JsonFunctionSome.init)
  { return value; }

  return (c_length === 1) 
         ? null
         : value[Math.floor(Math.random()*(c_length-1))+1];
}

JsonFunctionSome.type = JsonType.Array;
JsonFunctionSome.init = "$some";

export default JsonFunctionSome;
