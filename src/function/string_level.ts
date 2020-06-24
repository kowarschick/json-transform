/**
 * @module    function/level
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonString, JsonFunctionParameters, JsonType } from '../types';

/**
  * @function 
  * @description
  * The string <code>JsonFunctionStringLevel.init.function</code> 
  * (default: <code>'$level'</code>) 
  * is transformed to the current level number.
  * <p>
  * All other strings are returned without modification.
  * 
  * @param {Partial<JsonFunctionParameters<JsonString>>} _
  *   An object containing the following attributes.
  * @param {string} _.value
  *   The string to be transformed to the number of the curernt level.
  * @param {number}_.level
  *   The current level of <code>_.value</code>
  */
export function JsonFunctionStringLevel({value, level}: JsonFunctionParameters<JsonString>)
{ return (value === JsonFunctionStringLevel.init.function) ? level : value; }

JsonFunctionStringLevel.type = JsonType.String;
JsonFunctionStringLevel.init = { function: "$level" };

export default JsonFunctionStringLevel;
