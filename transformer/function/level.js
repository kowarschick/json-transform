"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionLevel = void 0;
const interfaces_1 = require("../interfaces");
function JsonFunctionLevel({ value, level }) { return (value === JsonFunctionLevel.init) ? level : value; }
exports.JsonFunctionLevel = JsonFunctionLevel;
JsonFunctionLevel.type = interfaces_1.JsonType.String;
JsonFunctionLevel.init = "$level";
exports.default = JsonFunctionLevel;
//# sourceMappingURL=level.js.map