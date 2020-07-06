"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionLevel = void 0;
const types_1 = require("../types");
function JsonFunctionLevel({ value, level }) { return (value === JsonFunctionLevel.init.function) ? level : value; }
exports.JsonFunctionLevel = JsonFunctionLevel;
JsonFunctionLevel.type = types_1.JsonType.String;
JsonFunctionLevel.init = { function: "$level" };
exports.default = JsonFunctionLevel;
//# sourceMappingURL=string_level.js.map