/**
 * @module    'function/array.count'
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 *
 */
import { JsonFunctionArrayParameters, EnumJsonFunctionType } from '~/interfaces';
/**
  * @function
  * @description
  *   If the first element of the Array is equal to
  *   <code>JsonFunctionArrayCount.init</code>
  *   (default: <code>'$count'</code>),
  *   the number of the other elements is returned.
  *   <p>
  *   Otherwise the Array itself is returned as value.
  *
  * @param {Partial<JsonFunctionArrayParameters>} _
  *   An object containing the following attributes.
  * @param {JsonArray} _.value
  *   The JSON array to be transformed.
  * @returns {JsonValue}
  */
export declare function JsonFunctionArrayCount({ value }: JsonFunctionArrayParameters): number | import("../interfaces").JsonArray;
export declare namespace JsonFunctionArrayCount {
    var type: EnumJsonFunctionType;
    var init: string;
}
export default JsonFunctionArrayCount;
