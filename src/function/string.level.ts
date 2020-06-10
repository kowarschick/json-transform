/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

import { JsonFunctionStringParameters, EnumJsonFunctionType } from '~/interfaces';

/**
  * The string <code>JsonFunctionStringLevel.init<code> (<code>$level<code>) 
  * is transformed into the current level number.
  * All other Templates are returned without modification.

  */
export function JsonFunctionStringLevel({value, level}: JsonFunctionStringParameters)
{ return (value === JsonFunctionStringLevel.init) ? level : value; }

JsonFunctionStringLevel.type = EnumJsonFunctionType.String;
JsonFunctionStringLevel.init = "$level";

export default JsonTransformerStringLevel;
