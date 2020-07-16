/**
 * @module    function/random
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonType, JsonObject, JsonNumber, isJsonNumber, InitMap } from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor }          from '../types';

const 
  MIN        = '$min',
  MAX        = '$max',
  IS_INTEGER = "$isInteger",
  SCALE      = "$scale",
  GZP        = "$gzp";

/**
 * @function 
 * @description
 * Computes random numbers within intervals.
 * 
 * __Examples__
 * 
 * ```ts
 * import { JsonTransformerFunction } from '@kowarschick/json-transformer';
 * import { JsonFunctionRandom }      from '@kowarschick/json-transformer';
 * 
 * const t1 = new JsonTransformerFunction({ init: [JsonFunctionRandom] });
 * 
 * t1.transform({ value: { "$function": "$random" } }) 
 * // => 0.54567  (random result in [0, 1[; half open interval)
 *
 * t1.transform({ value: { "$function": "$random",
 *                         "$min": 1, "$max": 11
 *                       }
 *             }) 
 * // => 7.23488  (random result in [1, 11[; half open interval)
 *
 * t1.transform({ value: { "$function": "$random", 
 *                         "$min": 1, "$max": 11, 
 *                         "$isInteger": true
 *                       }
 *             }) 
 * // => 7 (random integer result in [1, 11]; closed interval!)
 *
 * t1.transform({ value: { "$function":"$random", 
                           "$min": 1, "$max": 11, 
                           "$isInteger": true,
                           "$scale": "factor"
                         },
                  data:  { factor: 0.5 } 
               }) 
 * // => 3.5 (random result in [0.5, 5.5]; step size 0.5)
 *
 * t1.transform({ value: { "$function":"$random", 
                           "$min": 1, "$max": 11, 
                           "$isInteger": true,
                           "$scale": "@factor",
                           "$gzp": 0.5
                         },
                  data:  { "@factor": 0.5 } 
               }) 
 * // => -3.5 (random result in [-5.5, -0.5] union [0.5, 5.5])
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonObject>>} _
 *   An object containing the following attribute.
 * @param {Init}    _.init
 * @param {number}  [_.init.min       = 0]
 * @param {number}  [_.init.max       = 1]
 * @param {boolean} [_.init.isInteger = false]
 * @param {number}  [_.init.scale     = null]
 * @param {number}  [_.init.gzp       = 1 ] 
 *                  the „greater zero prabability“ defines 
 *                  the propability that the resulting value
 *                  is not multiplied by ```-1``` 
 */
export 
function random
({value, data, init, rename = name => name}: JsonFunctionParameters<JsonObject>): JsonNumber
{ const 
  c_init = init as InitMap,
  c_min  = (value?.[rename(MIN)] ?? c_init.min) as number,
  c_max  = (value?.[rename(MAX)] ?? c_init.max) as number;

  const
    c_is_integer = (value?.[rename(IS_INTEGER)] ?? c_init.isInteger) as boolean,
    c_gzp        = (value?.[rename(GZP)]        ?? c_init.gzp      ) as number,
    c_scale_aux  = data?.[(value?.[rename(SCALE)]) as string],
    c_scale      = isJsonNumber(c_scale_aux) ? c_scale_aux : c_init.scale,
    c_random     = Math.random();
  let
    l_result: number;
  
  if (c_is_integer)
  { l_result = Math.floor(c_min + c_random * (c_max + 1 - c_min)); }
  else
  { l_result = c_min + c_random * (c_max - c_min); }
  
  if (Number.isFinite(c_gzp) && 0 <= c_gzp && c_gzp < 1)
  { l_result *= (Math.random() >= c_gzp) ? 1 : -1; }
  
  return isJsonNumber(c_scale) ? l_result * c_scale : l_result;
}

/**
 * This constant defines a JSON function that returns
 * random value that satisfy certain conditions.
 * @constant
 * @type {JsonFunctionDescriptor}
 */
export
const JsonFunctionRandom: JsonFunctionDescriptor =
{ name:     '$random',
  type:     JsonType.Object,
  function: random,
  init:     { min:           0,
              max:           1,
              isInteger:     false,
              scale:         null,
              gzp:           1,
            }
}

export default JsonFunctionRandom;
