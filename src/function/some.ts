/**
 * @module    function/some
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonType, JsonArray, JsonValue }                 from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor } from '../types';

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
 * import { JsonFunctionSome }        from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerFunction({ init: [JsonFunctionSome] });
 * 
 * t.transform({ value: [ "$some", 4, 5] }); // => 4 or 5
 * t.transform({ value: [ "$some", 4 ] });   // => 4 
 * t.transform({ value: [ "$some" ] });      // => null 
 * 
 * t.transform({ value: 
 *               { "$function": "$some"
 *                 "$value":    [4, 5] 
 *               }
 *            });                            // => 4 or 5
 * t.transform({ value: 
 *               { "$function": "$some"
 *                 "$value":    [4] 
 *               }
 *            });                            // => 4
 * t.transform({ value: 
 *               { "$function": "$some"
 *                 "$value":    [] 
 *               }
 *            });                            // => null
 *
 * t.transform({ value: "abc" });            // => "abc"
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 * @returns {JsonValue}
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
