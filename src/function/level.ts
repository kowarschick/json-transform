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
  * The string <code>JsonFunctionLevel.init</code> 
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
export function JsonFunctionLevel({value, level}: JsonFunctionParameters<JsonString>)
{ return (value === JsonFunctionLevel.init.function) ? level : value; }

JsonFunctionLevel.type = JsonType.String;
JsonFunctionLevel.init = { function: "$level" };

export default JsonFunctionLevel;
