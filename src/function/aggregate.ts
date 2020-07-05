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
 * @param {JsonArray} _.value           The JSON array to be transformed.
 * @param {Init}      _.init
 * @param {JsonValue} _.init.default    The default/start value for empty arrays
 * @param {Function}  _.init.aggregate  A function <code>(aggregation, currentValue) => newValue</code> 
 * @returns {JsonValue}
 */
export 
function aggregate( { value,  init }: JsonFunctionParameters<JsonArray>, 
                    begin: number = 0
                  ): JsonValue
{ const 
    c_init               = init as JsonObject,
    c_default: JsonValue = c_init.default,
    c_aggregate          = c_init.aggregate;

  if (typeof c_aggregate === 'function')
  { let l_result = c_default;
    
    for (let i = begin, n = value.length; i < n; i++)
    { l_result = (c_aggregate as Function)(l_result, value[i]) }

    return l_result;       
  }
  else
  { return c_default }                
}

export
const JsonFunctionMax: JsonFunctionDescriptor =
{ name:     '$max',
  type:     JsonType.Array,
  function: aggregate,
  init    : {default: -Infinity, aggregate: Math.max}
}

export default JsonFunctionMax;
