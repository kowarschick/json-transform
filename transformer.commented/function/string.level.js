"use strict";
/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionStringLevel = void 0;
const interfaces_1 = require("~/interfaces");
/**
  * The string <code>JsonFunctionStringLevel.init<code> (<code>$level<code>)
  * is transformed into the current level number.
  * All other Templates are returned without modification.

  */
function JsonFunctionStringLevel({ value, level }) { return (value === JsonFunctionStringLevel.init) ? level : value; }
exports.JsonFunctionStringLevel = JsonFunctionStringLevel;
JsonFunctionStringLevel.type = interfaces_1.EnumJsonFunctionType.String;
JsonFunctionStringLevel.init = "$level";
exports.default = JsonFunctionStringLevel;
