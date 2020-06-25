/**
 * @module    function/count
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonObject, JsonType }    from '../types';
import { JsonFunctionParameters }  from '../types';
import { JsonTransformerFunction } from '../function';

/**
 * @function 
 * @description
 * Returns the length of the value stored in <code>_.value['$value']</code>, 
 * if it is an array.
 *
 * <h4>Examples</h4>
 * 
 * ```ts
 * import { JsonTransformerFunction }   from '@wljkowa/json-transformer';
 * import { JsonFunctionObjectCount } from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerFunction
 *           ({init: { functions: [ JsonFunctionObjectCount ] } })
 * 
 * t.transform({ value: { "$function": "$count", 
 *                        "$value":    [1, 2, 3]
 *                      } 
 *            }) 
 * // => [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2] or [3,2,1]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonObject>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 */
export function JsonFunctionObjectCount({value}: JsonFunctionParameters<JsonObject>)
{ const 
    c_init  = JsonFunctionObjectCount.init,
    c_value = value?.[c_init.valueAttr] ?? null;

  return (   value?.[JsonTransformerFunction.functionAttribute] !== c_init.function 
          || !Array.isArray(c_value)
         )
         ? value
         : c_value.length-1;
}

JsonFunctionObjectCount.type = JsonType.Object;
JsonFunctionObjectCount.init = { function:  "$count",
                                 valueAttr: "$value" 
                               };

export default JsonFunctionObjectCount;
