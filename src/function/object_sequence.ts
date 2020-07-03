/**
 * @module    function/sequence
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { Data }                            from '../types';
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
 * import { JsonTransformerSequence } from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerFunction
 *           ({init: { functions: [ JsonFunctionObjectSequence ] } })
 * 
 * t.transform({ value: { "$function": "$sequence", "$min": 2, "$max": 5 } }) 
 * // => [ 2, 3, 4, 5 ]
 *
 * t.transform({ value: { "$function": "$sequence", "$min": 2, "$max": 5, "$prefix": "image" } }) 
 * // => [ "image2", "image3", "image4", "image5" ]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonObject>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 */
export function JsonFunctionObjectSequence({value, data}: JsonFunctionParameters<JsonObject>)
{ 
  const 
    c_init  = JsonFunctionObjectSequence.init;

  /*
  if ( value?.[JsonTransformerFunction.functionAttribute] !== c_init.function )
  { return value; }
  */
  const 
    c_min               = (value?.[c_init.minAttr]    ?? c_init.min)    as number,
    c_max               = (value?.[c_init.maxAttr]    ?? c_init.max)    as number,
    c_format: Data      = (value?.[c_init.formatAttr] ?? c_init.format) as Data,
    c_format_string     = (typeof c_format === 'string')   ? c_format : '',
    c_format_function   = (typeof c_format === 'function') ? c_format : null,
    c_result: JsonArray = [];

  for (let i = c_min; i <= c_max; i++)
  { c_result.push( typeof c_format_function === 'function'
                   ? (c_format_function as Function)(i)
                   : (c_format_string !== '') 
                     ? c_format_string+i  
                     : i
                 ); 
  }

  return c_result;
}

JsonFunctionObjectSequence.type = JsonType.Object;
JsonFunctionObjectSequence.init = { function:   "$sequence",
                                    minAttr:    "$min",
                                    min:        1,
                                    maxAttr:    "$max",
                                    max:        1,
                                    formatAttr: "$format",
                                    format:     null 
                                  };

export default JsonFunctionObjectSequence;
