"use strict";
/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionArraySome = void 0;
const interfaces_1 = require("~/interfaces");
/**
  * If the first element of the Array is equal to
  * <code>JsonFunctionArraySome.init<code> (<code>$some</code>)
  * some of the other elements is returned as value.
  * If there are no other elements, <code>undefined</code>
  * is returned.
  *
  * Otherwise the Array itself is returned as value.
  */
function JsonFunctionArraySome({ value }) {
    const c_length = value.length;
    if (c_length === 0 || value[0] !== JsonFunctionArraySome.init) {
        return value;
    }
    return (c_length === 1)
        ? undefined
        : value[Math.floor(Math.random() * (c_length - 1)) + 1];
}
exports.JsonFunctionArraySome = JsonFunctionArraySome;
JsonFunctionArraySome.type = interfaces_1.EnumJsonFunctionType.Array;
JsonFunctionArraySome.init = "$some";
exports.default = JsonFunctionArraySome;
