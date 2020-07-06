"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionShuffle = exports.shuffle = void 0;
const types_1 = require("../types");
function shuffle(value, begin = 0) {
    const c_value = value.slice(begin);
    for (let i = c_value.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        if (i !== j) {
            [c_value[i], c_value[j]] = [c_value[j], c_value[i]];
        }
        ;
    }
    return c_value;
}
exports.shuffle = shuffle;
function JsonFunctionShuffle({ value }) {
    return (value.length === 0 || value[0] !== JsonFunctionShuffle.init.function)
        ? value
        : shuffle(value, 1);
}
exports.JsonFunctionShuffle = JsonFunctionShuffle;
JsonFunctionShuffle.type = types_1.JsonType.Array;
JsonFunctionShuffle.init = { function: "$shuffle" };
exports.default = JsonFunctionShuffle;
//# sourceMappingURL=array_shuffle.js.map