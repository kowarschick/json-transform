/**
 * @module    module:function/string_level
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonString, JsonFunctionParameters, EnumJsonFunctionType } from '../interfaces';

/**
  * @function 
  * @description
  * The string <code>JsonFunctionStringLevel.init</code> 
  * (default: <code>'$level'</code>) 
  * is transformed into the current level number.
  * <p>
  * All other Templates are returned without modification.
  * 
  * @param {Partial<JsonFunctionArrayParameters>} _
  *   An object containing the following attributes.
  * @param {string} _.value
  *   The string to be transformed into the lenumber.
  * @param {number}_.level
  *   The current level of <code>_.value</code>
  */
export function JsonFunctionStringLevel({value, level}: JsonFunctionParameters<JsonString>)
{ return (value === JsonFunctionStringLevel.init) ? level : value; }

JsonFunctionStringLevel.type = EnumJsonFunctionType.JsonString;
JsonFunctionStringLevel.init = "$level";

export default JsonFunctionStringLevel;
