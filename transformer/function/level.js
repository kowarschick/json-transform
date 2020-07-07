"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionLevel = exports.level = void 0;
const types_1 = require("../types");
function level({ level }) { return level; }
exports.level = level;
exports.JsonFunctionLevel = { name: '$level',
    type: types_1.JsonType.String,
    function: level,
};
exports.default = exports.JsonFunctionLevel;
//# sourceMappingURL=level.js.map