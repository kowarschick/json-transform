/**
 * @module    function/some
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonType, JsonArray, JsonValue, 
         JsonFunctionParameters, 
         JsonFunctionDescriptor 
       } from '../types';

/**
 * @function 
 * @description
 * If the first element of the Array is equal to 
 * <code>$some</code>, some of the other elements 
 * is returned as value. If there are no other elements, 
 * <code>null</code> is returned.
 * 
 * ```ts
 * import { JsonTransformerFunction } from '@wljkowa/json-transformer';
 * import { JsonTransformerSome }     from '@wljkowa/json-transformer';
 * 
 * const t1 = new JsonTransformerFunction
 *            ({ init: [JsonFunctionSome] })
 * 
 * t1.transform({ value: [ "$some", 4, 5] }) // => 4 or 5
 * t1.transform({ value: [ "$some", 4 ] })   // => 4 
 * t1.transform({ value: [ "$some" ] })      // => null 
 * 
 * t1.transform({ value: 
 *                { "$function": "$some"
 *                  "$value":    [4, 5] 
 *                }
 *             })                            // => 4 or 5
 * t1.transform({ value: 
 *                { "$function": "$some"
 *                  "$value":    [4] 
 *                }
 *             })                            // => 4
 * t1.transform({ value: 
 *                { "$function": "$some"
 *                  "$value":    [] 
 *                }
 *             })                            // => null
 *
 * t1.transform({ value: "abc" })            // => "abc"
 * 
 * const t2 = new JsonTransformerFunction
 *            ({ init:   [JsonFunctionSome],
 *               rename: {$some: '@some'} 
 *            });
 * 
 * t2.transform({ value: [ "@some", 4, 5 ] }) // => 4 or 5
 * t2.transform({ value: [ "$some", 4, 5 ] }) // => [ "$some", 4, 5 ]
 * t2.transform({ value: 
 *                { "$function": "@some"
 *                  "$value":    [4, 5] 
 *                }
 *             })                             // => 4 or 5
 *                { "$function": "$some"
 *                  "$value":    [4, 5] 
 *                }
 *             })                             
 *             // => {"$function":"$some","$value":[4, 5]}
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 */
export 
function some( {value}: JsonFunctionParameters<JsonArray>, 
               begin: number = 0
             ): JsonValue
{ const c_length = value.length;
  return (c_length === begin) 
         ? null
         : value[Math.floor(Math.random()*(c_length-begin))+begin];
}


export
const JsonFunctionSome: JsonFunctionDescriptor =
{ name:     '$some',
  type:     JsonType.Array,
  function: some,
}

export default JsonFunctionSome;
