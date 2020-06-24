"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionStringLevel = void 0;
const types_1 = require("../types");
function JsonFunctionStringLevel({ value, level }) { return (value === JsonFunctionStringLevel.init.function) ? level : value; }
exports.JsonFunctionStringLevel = JsonFunctionStringLevel;
JsonFunctionStringLevel.type = types_1.JsonType.String;
JsonFunctionStringLevel.init = { function: "$level" };
exports.default = JsonFunctionStringLevel;
//# sourceMappingURL=string_level.js.map