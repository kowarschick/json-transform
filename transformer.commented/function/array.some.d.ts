/**
 * @module    'function/array.some'
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { JsonFunctionArrayParameters, EnumJsonFunctionType } from '~/interfaces';
/**
  * @function
  * @description
  * If the first element of the Array is equal to
  * <code>JsonFunctionArraySome.init</code>
  * (default: <code>'$some'</code>),
  * some of the other elements is returned as value.
  * If there are no other elements, <code>undefined</code>
  * is returned.
  * <p>
  * Otherwise the Array itself is returned as value.
  *
  * @param {Partial<JsonFunctionArrayParameters>} _
  *   An object containing the following attributes.
  * @param {JsonArray} _value
  *   The JSON array to be transformed.
  */
export declare function JsonFunctionArraySome({ value }: JsonFunctionArrayParameters): import("../interfaces").JsonValue;
export declare namespace JsonFunctionArraySome {
    var type: EnumJsonFunctionType;
    var init: string;
}
export default JsonFunctionArraySome;
