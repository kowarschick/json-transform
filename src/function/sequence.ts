/**
 * @module    function/sequence
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonType, JsonArray, JsonObject, InitMap }       from '../types';
import { JsonValueFunction }                              from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor } from '../types';

const 
  FIRST  = '$first',
  LAST   = '$last',
  PREFIX = '$prefix',
  FORMAT = '$format';

/**
 * @function 
 * @description
 * Creates a JSON array  with a sequence of numbers. Each number 
 * may be prefixed by a string or modified by means of a function.
 * 
 * <h4>Examples</h4>
 * 
 * ```ts
 * import { JsonTransformerFunction } from '@wljkowa/json-transformer';
 * import { JsonFunctionSequence }    from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerFunction
 *           ({init: [ JsonFunctionSequence ] })
 * 
 * t.transform({ value: { "$function": "$sequence", "$first": 2, "$last": 5 } }) 
 * // => [ 2, 3, 4, 5 ]
 *
 * t.transform({ value: { "$function": "$sequence", "$first": 2, "$last": 5, "$prefix": "image" } }) 
 * // => [ "image2", "image3", "image4", "image5" ]
 * 
 * t.transform({ value: { "$function": "$sequence", "$first": 2, "$last": 5, "$format": "@f" },
 *               data:  { "@f": i => `-${i}-`}
 *            })
 * // [ "-2-", "-3-", "-4-", "-5-" ]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonObject>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 * @param {Init}    _.init
 * @param {number}  [_.init.first = 1]  
 *   The start value of the sequenze.
 * @param {number}  [_.init.last= 1]
 *   The last value of the sequenze.
 * @param {string}  [_.init.prefix = null]
 *   If present, this string is prepended to each number generated.
 * @param {string}  [_.init.format = null]
 *   If present, each number generated is passed to the 
 *   function <code>_.data[_.init.format]</code>
 *   in order to format it to a string. 
 */
export 
function sequence({value, data, init, rename = name => name}: 
        JsonFunctionParameters<JsonObject>)
{ const 
    c_init              = init as InitMap,
    c_first             = (value?.[rename(FIRST)]  ?? c_init.first)  as number,
    c_last              = (value?.[rename(LAST)]   ?? c_init.last)   as number,
    c_prefix            = (value?.[rename(PREFIX)] ?? c_init.prefix) as string|null,
    c_format_data       = (value?.[rename(FORMAT)] ?? c_init.format) as JsonValueFunction|string|null,
    c_format            = ((typeof c_format_data === 'string') ? data[c_format_data] : c_format_data) as JsonValueFunction,
    c_result: JsonArray = [];

  for (let i: number = c_first; i <= c_last; i++)
  { let l_result: number|string = i;
    
    if (c_prefix != null)
    { l_result = c_prefix + l_result}

    if (c_format != null)
    { if (c_format != null)
      { l_result = c_format(l_result) as string; }
    }

    c_result.push( l_result); 
  }

  return c_result;
}

/**
 * This constant defines a JSON function that returns
 * an array with a sequenc of numbers. Those numbers 
 * may be wither prefixed by a specific string of formated
 * by a format function. 
 * @constant
 * @type {JsonFunctionDescriptor}
 */
export
const JsonFunctionSequence: JsonFunctionDescriptor =
{ name:     '$sequence',
  type:     JsonType.Object,
  function: sequence,
  init:     { first:  1,
              last:   1,
              prefix: null,
              format: null
            }
}

export default JsonFunctionSequence;
