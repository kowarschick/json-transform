/**
 * @module    'function/string.level'
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { JsonFunctionStringParameters, EnumJsonFunctionType } from '~/interfaces';
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
export declare function JsonFunctionStringLevel({ value, level }: JsonFunctionStringParameters): string | number;
export declare namespace JsonFunctionStringLevel {
    var type: EnumJsonFunctionType;
    var init: string;
}
export default JsonFunctionStringLevel;