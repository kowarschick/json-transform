/**
 * @module    function/squence
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonObject, JsonType, JsonArray } from '../types';
import { JsonFunctionParameters }          from '../types'
import { JsonTransformerFunction }         from '../function';

/**
 * @function 
 * @description
 * Creates a JSON array  with a sequence of numbers. Each number 
 * may be prefixed by a prexis string.
 * 
 * ```ts
 * import { JsonTransformerFunction } from '@wljkowa/json-transformer';
 * import { JsonTransformerSquence }  from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerFunction
 *           ({init: { functions: [ JsonFunctionSquence ] } })
 * 
 * t.transform({ value: { "$function": "$squence", "$min": 2, "$max": 5 } }) 
 * // => [ 2, 3, 4, 5 ]
 *
 * t.transform({ value: { "$function": "$squence", "$min": 2, "$max": 5, "$prefix": "image" } }) 
 * // => [ "image2", "image3", "image4", "image5" ]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 */
export function JsonFunctionSquence({value, data}: JsonFunctionParameters<JsonObject>)
{ 
  const 
    c_init  = JsonFunctionSquence.init;

  if ( value?.[JsonTransformerFunction.functionAttribute] !== c_init.function )
  { return value; }

  const 
    c_min               = (value?.[c_init.minAttr]    ?? c_init.min) as number,
    c_max               = (value?.[c_init.maxAttr]    ?? c_init.max) as number,
    c_prefix            = (value?.[c_init.prefixAttr] ?? c_init.prefix) as string,
    c_result: JsonArray = [];

  for (let i = c_min; i <= c_max; i++)
  { c_result.push(c_prefix != null ? c_prefix + i : i); }

  return c_result;
}

JsonFunctionSquence.type = JsonType.Object;
JsonFunctionSquence.init = { function:     "$squence",
                             minAttr:    "$min",
                             min:        1,
                             maxAttr:    "$max",
                             max:        1,
                             prefixAttr: "$prefix",
                             prefix:     null 
                           };

export default JsonFunctionSquence;
