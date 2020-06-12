/**
 * @module    'function/array.max'
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { JsonFunctionArrayParameters, EnumJsonFunctionType } from '~/interfaces';
/**
  * @function
  * @description
  *   If the first element of the Array is equal to
  *   <code>JsonFunctionArrayMax.init</code>
  *   (default: <code>'$max'</code>),
  *   the maximum element of the other elements,
  *   which should be numbers,
  *   is returned. If there are no other elements,
  *   <code>0</code> is returned.
  *   <p>
  *   Otherwise the Array itself is returned as value.
  *
  * @param {Partial<JsonFunctionArrayParameters>} _
  *   An object containing the following attributes.
  * @param {JsonArray} _.value
  *   The JSON array to be transformed.
  */
export declare function JsonFunctionArrayMax({ value }: JsonFunctionArrayParameters): import("../interfaces").JsonValue;
export declare namespace JsonFunctionArrayMax {
    var type: EnumJsonFunctionType;
    var init: string;
}
export default JsonFunctionArrayMax;
