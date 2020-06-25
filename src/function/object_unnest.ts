/**
 * @module    function/unnest
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonObject, JsonType }    from '../types';
import { JsonFunctionParameters }  from '../types';
import { JsonTransformerFunction } from '../function';
import { unnest }                  from './array_unnest';

/**
 * @function 
 * @description
 * Unnests the value stored in <code>_.value['$value']</code>, 
 * if it is an array.
 *
 * <h4>Examples</h4>
 * 
 * ```ts
 * import { JsonTransformerFunction }  from '@wljkowa/json-transformer';
 * import { JsonFunctionObjectUnnest } from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerFunction
 *           ({init: { functions: [ JsonFunctionObjectUnnest ] } })
 * 
 * t.transform({ value: { "$function": "$unnest", 
 *                        "$value":    [[1, 2], 3, [[4]], [5], [{}]]
 *                      } 
 *            }) 
 * // => [1, 2, 3, [4], 5, {}]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 */
export function JsonFunctionObjectUnnest({value}: JsonFunctionParameters<JsonObject>)
{ const 
    c_init  = JsonFunctionObjectUnnest.init,
    c_value = value?.[c_init.valueAttr];
    
  return (    value?.[JsonTransformerFunction.functionAttribute] !== c_init.function 
          || !Array.isArray(c_value)
         )
         ? value
         : unnest(c_value)
}

JsonFunctionObjectUnnest.type = JsonType.Object;
JsonFunctionObjectUnnest.init = { function:  "$unnest",
                                  valueAttr: "$value" 
                                };

export default JsonFunctionObjectUnnest;
