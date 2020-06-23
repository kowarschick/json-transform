/**
 * @module    function/random
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonObject, JsonType }    from '../interfaces';
import { JsonFunctionParameters }  from '../interfaces'
import { JsonTransformerFunction } from '../function';

/**
 * @function 
 * @description
 * If the first element of the Array is equal to 
 * <code>JsonFunctionRandom.init</code> (default: <code>$random</code>)
 * random of the other elements is returned as value. 
 * If there are no other elements, <code>null</code> 
 * is returned.
 * <p>
 * Otherwise the Array itself is returned as value.
 * <h4>Examples</h4>
 * 
 * ```ts
 * import { JsonTransformerFunction } from '@wljkowa/json-transformer';
 * import { JsonTransformerRandom }   from '@wljkowa/json-transformer';
  * 
 * const t = new JsonTransformerFunction
 *           ({init: { functions: [ JsonFunctionRandom ] } })
 * 
 * t.transform({ value: [ "$random", 4, 5] }) // => 4 or 5
 * t.transform({ value: [ "$random", 4 ] })   // => 4 
 * t.transform({ value: [ "$random" ] })      // => null 
 * t.transform({ value: "abc" })              // => "abc"
 * 
 * JsonFunctionRandom.init = "@random";
 * 
 * t.transform({ value: [ "@random", 4, 5 ] }) // => 4 or 5
 * t.transform({ value: [ "$random", 4, 5 ] }) // => [ "$random", 4, 5 ]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 */
export function JsonFunctionRandom({value, data}: JsonFunctionParameters<JsonObject>)
{ const 
    c_init = JsonFunctionRandom.init,
    c_min  = (value?.[c_init.minAttr] ?? c_init.min) as number,
    c_max  = (value?.[c_init.maxAttr] ?? c_init.max) as number;

//  console.log(JsonTransformerFunction.functionAttribute, c_init.function, value)
//  return 0;
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

JsonFunctionRandom.type = JsonType.Object;
JsonFunctionRandom.init = { function:      "$random",
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

export default JsonFunctionRandom;
