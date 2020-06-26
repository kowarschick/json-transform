/**
 * @module    function/min
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonArray, JsonFunctionParameters, JsonType } from '../types';

/**
  * @function 
  * @description
  * If the first element of the Array is equal to 
  * <code>'$min'</code> the minimum element of the 
  * other elements, which should be numbers,
  * is returned. If there are no other elements, 
  * <code>Infinity</code> (a Non-JSON element!) 
  * is returned. Thist default value can be changed
  * by setting <code>JsonFunctionArrayMin.init.default</code>.
  * It should be greater than all values that might 
  * appear in your JSON arrays (<code>Number.MAX_VALUE</code>).
  * 
  * @param {Partial<JsonFunctionParameters<JsonArray>>} _
  *   An object containing the following attributes.
  * @param {JsonArray} _.value
  *   The JSON array to be transformed.
  */
export function JsonFunctionArrayMin({value}: JsonFunctionParameters<JsonArray>)
{ if (value.length === 0 || value[0] !== JsonFunctionArrayMin.init.function)
  { return value; }

  return value.slice(1).reduce( (m, v) => Math.min((m as number), (v as number)), 
                                                   JsonFunctionArrayMin.init.default
                                                  );
}

JsonFunctionArrayMin.type = JsonType.Array;
JsonFunctionArrayMin.init = { function: "$min",
                              default:  Infinity
                            };

export default JsonFunctionArrayMin;
