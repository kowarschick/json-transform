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
  * <code>'$level'</code>  is transformed to the current level number.
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

export
const JsonFunctionLevel: JsonFunctionDescriptor =
{ name:     '$level',
  type:     JsonType.String,
  function: level,
}

export default JsonFunctionLevel;
