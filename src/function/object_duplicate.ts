/**
 * @module    function/duplicate
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonObject, JsonType, JsonArray } from '../types';
import { JsonFunctionParameters }          from '../types'
import { JsonTransformerTraversal }        from '../traversal';
import { JsonTransformerFunction }         from '../function';

/**
 * @function 
 * @description
 * Returns an array with several duplicates (clones) of a JSON value.
 * 
 * ```ts
 * import { JsonTransformerFunction }  from '@wljkowa/json-transformer';
 * import { JsonTransformerDuplicate } from '@wljkowa/json-transformer';
* 
 * const t = new JsonTransformerFunction
 *           ({init: { functions: [ JsonFunctionObjectDuplicate ] } })
 * 
 * t.transform({ value: { "$function": "$duplicate", 
 *                        "$value":    {}, 
 *                        "$times":    3
 *                      } 
 *             );
 * // => [ {}, {}, {} ]
 * 
 * t.transform({ value: { "$function":    "$duplicate", 
 *                        "$value":       [5, 7, 9], 
 *                        "$times":       3, 
 *                        "$withinArray": true
 *                      } 
 *            });
 * // => [ 5, 5, 5, 7, 7, 7, 9, 9, 9 ]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonObject>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 */
export function JsonFunctionObjectDuplicate({value}: JsonFunctionParameters<JsonObject>)
{ const 
    c_init  = JsonFunctionObjectDuplicate.init;

  if ( value?.[JsonTransformerFunction.functionAttribute] !== c_init.function )
  { return value; }

  const 
    c_clone_transformer = new JsonTransformerTraversal(),
    c_value             = value?.[c_init.valueAttr]        ?? null,
    c_times             = (value?.[c_init.timesAttr]       ?? c_init.times)       as number,
    c_within_array      = (value?.[c_init.withinArrayAttr] ?? c_init.withinArray) as boolean,
    c_result: JsonArray = [];

  if (c_within_array && Array.isArray(c_value))
  { for (let l_value of c_value) 
    { for (let i = 0; i < c_times; i++)
      { c_result.push(c_clone_transformer.transform({ value: l_value })); }
    }
  }
  else
  { for (let i = 0; i < c_times; i++)
    { c_result.push(c_clone_transformer.transform({ value: c_value })); }
  }

  return c_result;
}

JsonFunctionObjectDuplicate.type = JsonType.Object;
JsonFunctionObjectDuplicate.init = { function:        "$duplicate",
                                     valueAttr:       "$value",
                                     timesAttr:       "$times",
                                     times:           1,
                                     withinArrayAttr: "$withinArray",
                                     withinArray:     false
                                   };

export default JsonFunctionObjectDuplicate;
