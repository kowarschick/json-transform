/**
 * @module    'function/array.sum'
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { JsonFunctionArrayParameters, EnumJsonFunctionType } from '~/interfaces';
/**
  * @function
  * @description
  * If the first element of the Array is equal to
  * <code>JsonFunctionArraySum.init</code>
  * (default: <code>'$sum'</code>),
  * the sum of the other elements, which should be numbers,
  * is returned. If there are no other elements,
  * <code>0</code> is returned.
  * <p>
  * Otherwise the Array itself is returned as value.
  *
  * @param {Partial<JsonFunctionArrayParameters>} _
  *   An object containing the following attributes.
  * @param {JsonArray} _.value
  *   The JSON array to be transformed.
  */
export declare function JsonFunctionArraySum({ value }: JsonFunctionArrayParameters): import("../interfaces").JsonValue;
export declare namespace JsonFunctionArraySum {
    var type: EnumJsonFunctionType;
    var init: string;
}
export default JsonFunctionArraySum;
