"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionStringLevel = void 0;
const interfaces_1 = require("../interfaces");
function JsonFunctionStringLevel({ value, level }) { return (value === JsonFunctionStringLevel.init) ? level : value; }
exports.JsonFunctionStringLevel = JsonFunctionStringLevel;
JsonFunctionStringLevel.type = interfaces_1.EnumJsonFunctionType.JsonString;
JsonFunctionStringLevel.init = "$level";
exports.default = JsonFunctionStringLevel;
//# sourceMappingURL=string_level.js.map