/**
 * @module    function/level
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonType, JsonString, JsonNumber }               from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor } from '../types';

/**
  * @function 
  * @description
  * The string <code>'$level'</code> is transformed to the current level number.
  * 
  * @param {Partial<JsonFunctionParameters<JsonString>>} _
  *   An object containing the following attributes.
  * @param {string} _.value
  *   The string <code>'$level'</code> to be transformed.
  * @param {number} _.level
  *   The current level of <code>_.value</code>
  */
export 
function level( {level}: JsonFunctionParameters<JsonString> ): JsonNumber
{ return level; }

/**
 * This constant defines a JSON function that returns
 * the level of the string <code>'$level'</code> 
 * within the JSON value (which may be a complex 
 * nested JSON object or array).
 *
 * ```ts
 * import { JsonTransformerTraversal } from '@wljkowa/json-transformer';
 * import { JsonTransformerFunction }  from '@wljkowa/json-transformer';
 * import { JsonFunctionLevel }        from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerTraversal()
 *     .pipe(new JsonTransformerFunction({init: { [JsonFunctionLevel] })
 *
 * t.transform({ value: "$level" }
 * // => 0
 * 
 * t.transform({ value: ["$level", ["$level"], [["$level"]] }
 * // [1, [2], [[3]]]
 * ```
 * 
 * @constant
 * @type {JsonFunctionDescriptor}
 */
export
const JsonFunctionLevel: JsonFunctionDescriptor =
{ name:     '$level',
  type:     JsonType.String,
  function: level,
}

export default JsonFunctionLevel;
