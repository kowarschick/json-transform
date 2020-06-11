"use strict";
/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionArraySum = void 0;
const interfaces_1 = require("~/interfaces");
/**
  * If the first element of the Array is equal to
  * <code>JsonFunctionArraySum.init<code> (<code>$sum</code>)
  * the sum of the other elements, which should be numbers,
  * is returned. If there are no other elements,
  * <code>0</code> is returned.
  *
  * Otherwise the Array itself is returned as value.
  */
function JsonFunctionArraySum({ value }) {
    if (value.length === 0 || value[0] !== JsonFunctionArraySum.init) {
        return value;
    }
    return value.slice(1).reduce((s, v) => s + v, 0);
}
exports.JsonFunctionArraySum = JsonFunctionArraySum;
JsonFunctionArraySum.type = interfaces_1.EnumJsonFunctionType.Array;
JsonFunctionArraySum.init = "$sum";
exports.default = JsonFunctionArraySum;
