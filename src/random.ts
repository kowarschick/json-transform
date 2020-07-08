/**
 * @module    random
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonObject, isJsonNumber, InitMap }          from './types';
import { JsonFunction, JsonFunctionParameters }       from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';

const 
  RANDOM     = '$random',
  MIN        = '$min',
  MAX        = '$max',
  IS_INTEGER = "$isInteger",
  SCALE      = "$scale",
  GZP        = "$gzp";

/**
 * Computes random numbers within intervals.
 *
 * <h4>Examples</h4>
 * ```ts
 * import { JsonTransformerRandom } from '@wljkowa/json-transformer';
 * 
 * const t1 = new JsonTransformerRandom();
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
                           "$scale": "factor",
                           "$gzp": 0.5
                         },
                  data:  { factor: 0.5 } 
               }) 
 * // => -3.5 (random result in [-5.5, -0.5] union [0.5, 5.5])
 * ```
 * 
 * @extends  module:transformer.JsonTransformer
 *
 * @param {JsonTransformerParameters} _
 * @param {Init}    _.init
 * @param {number}  [_.init.min       = 0]
 * @param {number}  [_.init.max       = 1]
 * @param {boolean} [_.init.isInteger = false]
 * @param {number}  [_.init.scale     = null]
 * @param {number}  [_.init.gzp       = 1] 
 *                  the „greater zero prabability“ defines 
 *                  the propability that the resulting value
 *                  is not multiplied by <code>-1</code> 
*/
export 
class JsonTransformerRandom extends JsonTransformer
{ constructor 
  ( { init = { min:           0,
               max:           1,
               isInteger:     false,
               scale:         null,
               gzp:           1,
             }, 
      ..._
    }: JsonTransformerParameters = {}
  ) 
  { super({ init, ..._ });
    this.initialize();
  }

  transformerJsonObject: JsonFunction<JsonObject> = 
  ({value, data}: JsonFunctionParameters<JsonObject>) => 
  { const 
      c_init = this.init as InitMap,
      c_min  = (value?.[this.rename(MIN)] ?? c_init.min) as number,
      c_max  = (value?.[this.rename(MAX)] ?? c_init.max) as number;

    if (   !this.isFunctionName(RANDOM, value) 
        || !Number.isFinite(c_min)
        || !Number.isFinite(c_max)
       )
    { return value; }

    const
      c_is_integer = (value?.[this.rename(IS_INTEGER)] ?? c_init.isInteger) as boolean,
      c_gzp        = (value?.[this.rename(GZP)]        ?? c_init.gzp      ) as number,
      c_scale_aux  = data?.[(value?.[this.rename(SCALE)]) as string],
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
}

export default JsonTransformerRandom;


