/**
 * @module    function/duplicate
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonType, JsonArray, JsonObject, JsonValue, InitMap } from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor }      from '../types';
import { JsonTransformerTraversal }                            from '../traversal';

const 
  VALUE   = '$value',
  TIMES   = '$times',
  FLATTEN = '$flatten';

/**
 * @function 
 * @description
 * Returns an array with several duplicates (clones) of a JSON value.
 * If ```_.init.flatten === true```, array elements within the
 * array value are not only duplicated, their elements are also 
 * added directly to the result array.
 *
 *  __Examples__
 * 
 * ```ts
 * import { JsonTransformerFunction } from '@wljkowa/json-transformer';
 * import { JsonFunctionDuplicate }   from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerFunction
 *           ({init: { [ JsonFunctionDuplicate ] })
 * 
 * t.transform({ value: { "$function": "$duplicate", 
 *                        "$value":    {}, 
 *                        "$times":    3
 *                      } 
 *             );
 * // => [ {}, {}, {} ]
 * 
 * t.transform({ value: { "$function": "$duplicate", 
 *                        "$value":    [5, 7, 9], 
 *                        "$times":    3, 
 *                        "$flatten":  true
 *                      } 
 *            });
 * // => [ 5, 5, 5, 7, 7, 7, 9, 9, 9 ]
 * 
 * t.transform({ value: { "$function": "$duplicate", 
 *                        "$value":    [5, 7, 9], 
 *                        "$times":    3, 
 *                      //"$flatten":  false
 *                      } 
 *            });
 * // => [ [5, 7, 9], [5, 7, 9], [5, 7, 9] ]
 * // please note, applying ```$unnest```
 * // to this result would yield
 * //    [ 5, 7, 9, 5, 7, 9, 5, 7, 9 ] 
 * // which differs from the flattend result above.
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonObject>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _.value
 *   The JSON array to be transformed.
 * @param {Init}    _.init
 * @param {number}  [_.init.times   = 1]  
 *   How often the elements are to be duplicated.
 * @param {number}  [_.init.flatten = false]
 *   Flattens the resulting array, if ```true```.
 *   
 */
export 
function duplicate({value, init, rename = name => name}: 
         JsonFunctionParameters<JsonObject>)
{ const 
    c_clone_transformer = new JsonTransformerTraversal(),
    c_init              = init as InitMap,
    c_value             = (value?.[rename(VALUE)]   ?? null) as JsonValue,
    c_times             = (value?.[rename(TIMES)]   ?? c_init.times) as number,
    c_flatten           = (value?.[rename(FLATTEN)] ?? c_init.flatten) as boolean,
    c_result: JsonArray = [];

  if (c_flatten && Array.isArray(c_value))
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

/**
 * This constant defines a JSON function that duplicates
 * the number of the elements of an array several times. 
 * It may also flatten the array.
 * @constant
 * @type {JsonFunctionDescriptor}
 */
export
const JsonFunctionDuplicate: JsonFunctionDescriptor =
{ name:     '$duplicate',
  type:     JsonType.Object,
  function: duplicate,
  init:     { times:       1,
              withinArray: false
            }
}

export default JsonFunctionDuplicate;
