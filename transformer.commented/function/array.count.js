"use strict";
/** @module function/array.count **/
/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionArrayCount = void 0;
const interfaces_1 = require("~/interfaces");
/**
  * If the first element of the Array is equal to
  * <code>JsonFunctionArrayCount.init<code> (<code>$count</code>)
  * the number of the other elements is returned.
  *
  * Otherwise the Array itself is returned as value.
  */
function JsonFunctionArrayCount({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionArrayCount.init) {
        return value;
    }
    return value.length - 1;
}
exports.JsonFunctionArrayCount = JsonFunctionArrayCount;
JsonFunctionArrayCount.type = interfaces_1.EnumJsonFunctionType.Array;
JsonFunctionArrayCount.init = "$count";
exports.default = JsonFunctionArrayCount;
