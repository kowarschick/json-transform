/**
 * @module    function/max
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonArray, JsonFunctionParameters, JsonType } from '../types';

/**
  * @function 
  * @description
  * If the first element of the Array is equal to 
  * <code>'$max'</code> the maximum element of the 
  * other elements, which should be numbers,
  * is returned. If there are no other elements, 
  * <code>-Infinity</code> (a Non-JSON element!) 
  * is returned. Thist default value can be changed
  * by setting <code>JsonFunctionArrayMax.init.default</code>.
  * It should be less than all values that might 
  * appear in your JSON arrays (<code>-Number.MAX_VALUE</code>).
  * 
  * @param {Partial<JsonFunctionParameters<JsonArray>>} _
  *   An object containing the following attributes.
  * @param {JsonArray} _.value
  *   The JSON array to be transformed.
  */
export function JsonFunctionArrayMax({value}: JsonFunctionParameters<JsonArray>)
{ if (value.length === 0 || value[0] !== JsonFunctionArrayMax.init.function)
  { return value; }

  return value.slice(1).reduce( (m, v) => Math.max((m as number), (v as number)), 
                                                   JsonFunctionArrayMax.init.default
                                                  );
}

JsonFunctionArrayMax.type = JsonType.Array;
JsonFunctionArrayMax.init = { function: "$max",
                              default:  -Infinity
                            };

export default JsonFunctionArrayMax;
