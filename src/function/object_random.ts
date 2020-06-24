/**
 * @module    function/random
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonObject, JsonType }    from '../types';
import { JsonFunctionParameters }  from '../types'
import { JsonTransformerFunction } from '../function';

/**
 * @function 
 * @description
 * Computes random numbers within intervals.
 * 
 * <h4>Examples</h4>
 * 
 * ```ts
 * import { JsonTransformerFunction } from '@wljkowa/json-transformer';
 * import { JsonTransformerRandom }   from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerFunction
 *           ({init: { functions: [ JsonFunctionObjectRandom ] } })
 * 
 * t.transform({ value: { "$function": "$random" } }) 
 * // => 0.54567  (random result in [0, 1[; half open interval)
 *
 * t.transform({ value: { "$function": "$random",
 *                        "$min": 1, "$max": 11
 *                      }
 *             }) 
 * // => 7.23488  (random result in [1, 11[; half open interval)
 *
 * t.transform({ value: { "$function": "$random", 
 *                        "$min": 1, "$max": 11, 
 *                        "$isInteger": true
 *                      }
 *            }) 
 * // => 7 (random integer result in [1, 11]; closed interval!)
 *
 * t.transform({ value: { "$function":"$random", 
                          "$min": 1, "$max": 11, 
                          "$isInteger": true,
                          "$scale": "factor"
                        },
                 data:  { factor: 0.5 } 
              }) 
 * // => 3.5 (random result in [0.5, 5.5]; step size 0.5)
 *
 * t.transform({ value: { "$function":"$random", 
                          "$min": 1, "$max": 11, 
                          "$isInteger": true,
                          "$scale": "factor",
                          "$gzp": 0.5
                        },
                 data:  { factor: 0.5 } 
              }) 
 * // => -3.5 (random result in [-5.5, -0.5] union [0.5, 5.5])
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonObject>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 */
export function JsonFunctionObjectRandom({value, data}: JsonFunctionParameters<JsonObject>)
{ const 
    c_init = JsonFunctionObjectRandom.init,
    c_min  = (value?.[c_init.minAttr] ?? c_init.min) as number,
    c_max  = (value?.[c_init.maxAttr] ?? c_init.max) as number;

  if (   value?.[JsonTransformerFunction.functionAttribute] !== c_init.function 
      || !Number.isFinite(c_min)
      || !Number.isFinite(c_max)
     )
  { return value; }

  const
    c_is_integer =       value?.[c_init.isIntegerAttr]        ?? c_init.isInteger,
    c_gzp        =       value?.[c_init.gzpAttr]              ?? c_init.gzp,
    c_scale      = data[(value?.[c_init.scaleAttr] as string) ?? c_init.scale   ],
    c_random     = Math.random();
  let
    l_result: number;

  if (c_is_integer)
  { l_result = Math.floor(c_min + c_random * (c_max + 1 - c_min)); }
  else
  { l_result = c_min + c_random * (c_max - c_min); }

  if (Number.isFinite(c_gzp) && 0 <= c_gzp && c_gzp < 1)
  { l_result *= (Math.random() >= c_gzp) ? 1 : -1; }

  return Number.isFinite(c_scale) ? l_result * (c_scale as number) : l_result;
}

JsonFunctionObjectRandom.type = JsonType.Object;
JsonFunctionObjectRandom.init = { function:      "$random",
                                  minAttr:       "$min",
                                  min:           0,
                                  maxAttr:       "$max",
                                  max:           1,
                                  isIntegerAttr: "$isInteger",
                                  isInteger:     false,
                                  scaleAttr:     "$scale",
                                  scale:         null,
                                  gzpAttr:       "$gzp",
                                  gzp:           1,
                                };

export default JsonFunctionObjectRandom;
