"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionCount = exports.count = void 0;
const types_1 = require("../types");
function count({ value }, begin = 0) { return value.length - begin; }
exports.count = count;
exports.JsonFunctionCount = { name: '$count',
    type: types_1.JsonType.Array,
    function: count,
};
exports.default = exports.JsonFunctionCount;
//# sourceMappingURL=count.js.map