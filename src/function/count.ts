/**
 * @module    function/count
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonType, JsonArray, JsonValue }                 from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor } from '../types';

/**
 * @function 
 * @description
 *   If the first element of the Array is equal to 
 *   <code>'$count'</code>,
 *   the number of the other elements is returned. 
 * 
 * ```ts
 * import { JsonTransformerFunction } from '@wljkowa/json-transformer';
 * import { JsonFunctionCount }       from '@wljkowa/json-transformer';
 * 
 * const t1 = new JsonTransformerFunction({ init: [JsonFunctionCount] });
 * 
 * t1.transform({ value: [ "$count", 4, 5] }); // => 2
 * t1.transform({ value: [ "$count", 4 ] });   // => 1 
 * t1.transform({ value: [ "$count" ] });      // => 0
 * 
 * t1.transform({ value: 
 *                { "$function": "$count"
 *                  "$value":    [4, 5] 
 *                }
 *             });                            // => 2
 * t1.transform({ value: 
 *                { "$function": "$count"
 *                  "$value":    [4] 
 *                }
 *             });                            // => 1
 * t1.transform({ value: 
 *                { "$function": "$count"
 *                  "$value":    [] 
 *                }
 *             });                            // => 0
 *
 * t1.transform({ value: "abc" });            // => "abc"
 * 
 * const t2 = new JsonTransformerFunction
 *            ({ init:   [JsonFunctionCount],
 *               rename: { "$function": "@function",
 *                         "$value":    "@value",
 *                         "$count":    "@count"
 *                       }
 *            });
 * 
 * t2.transform({ value: [ "@count", 4, 5 ] }); // => 2
 * t2.transform({ value: [ "$count", 4, 5 ] }); // => ["$count", 4, 5]
 * t2.transform({ value: 
 *                { "@function": "@count"
 *                  "@value":    [4, 5] 
 *                }
 *             });                             // => 2
 *                { "$function": "$count"
 *                  "$value":    [4, 5] 
 *                }
 *             });                             
 *             // => {"$function":"$count","$value":[4, 5]}
 * ```
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _.value
 *   The JSON array to be transformed.
 * @returns {JsonNumber}
 */
export 
function count( {value}: JsonFunctionParameters<JsonArray>, 
                begin: number = 0
              ): JsonValue
{ return value.length-begin; }


export
const JsonFunctionCount: JsonFunctionDescriptor =
{ name:     '$count',
  type:     JsonType.Array,
  function: count,
}

export default JsonFunctionCount;
