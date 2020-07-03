/**
 * @module    function/max
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonType, JsonArray, JsonObject, JsonValue }     from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor } from '../types';

// TBD: Compare function instead of Math.max

/**
 * @function 
 * @description
 * If the first element of the Array is equal to 
 * <code>'$max'</code>, the maximum element of the 
 * other elements, which should be numbers,
 * is returned. If there are no other elements, 
 * <code>-Infinity</code> (a Non-JSON element!) 
 * is returned. Thist default value can be changed
 * by setting <code>JsonFunctionMax.init.default</code>.
 * It should be less than all values that might 
 * appear in your JSON arrays (<code>-Number.MAX_VALUE</code>).
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _.value
 *   The JSON array to be transformed.
 * @param {Init}    _.init
 * @param {number}  [_.init.min = -Infinity]
 * @returns {JsonValue}
 */
export 
function max( { value, 
                init = {min: -Infinity, compare: Math.max}
              }: JsonFunctionParameters<JsonArray>, 
              begin: number = 0
            ): JsonValue
{ const 
    c_init    = init as JsonObject,
    c_min     = c_init.min,
    c_compare = c_init.compare;

  if (typeof c_compare === 'function')
  { return value.slice(begin).reduce
           ( (m, v) => (c_compare as Function)((m as number), (v as number)), 
             c_min
           );
  }
  else
  { return c_min }                
}

export
const JsonFunctionMax: JsonFunctionDescriptor =
{ name:     '$max',
  type:     JsonType.Array,
  function: max,
}
/*
export 
function JsonFunctionMax({value}: JsonFunctionParameters<JsonArray>)
{ if (value.length === 0 || value[0] !== JsonFunctionMax.init.function)
  { return value; }

  return value.slice(1).reduce( (m, v) => Math.max((m as number), (v as number)), 
                                                   JsonFunctionMax.init.default
                                                  );
}

JsonFunctionMax.type = JsonType.Array;
JsonFunctionMax.init = { function: "$max",
                              default:  -Infinity
                            };
*/
export default JsonFunctionMax;
