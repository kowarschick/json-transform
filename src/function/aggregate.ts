/**
 * @module    function/aggregate
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonArray, JsonObject, JsonValue } from '../types';
import { JsonFunctionParameters }           from '../types';

/**
 * @function 
 * @description
 * Aggregates an array of JSON values to one JSON value.
 * If the length is equal to zero, <code>_.init.default</code> is returned.
 * Otherwise <code>_.init.aggregate</code> is succesively applied to 
 * the aggregation value and the elements of the array.
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _.value           The JSON array to be transformed.
 * @param {Init}      _.init
 * @param {JsonValue} _.init.default    The default/start value for empty arrays
 * @param {Function}  _.init.aggregate  A function <code>(aggregation, currentValue, begin, index, array) => newValue</code> 
 * @param {number}    begin             Either 0 (in case of regular arrays) or 1 (in case of function call arrays)
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
    { l_result = (c_aggregate as Function)(l_result, value[i], begin, i, value) }

    return l_result;       
  }
  else
  { return c_default }                
}


export default aggregate;
