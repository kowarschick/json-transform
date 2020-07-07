"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionShuffle = exports.shuffle = void 0;
const types_1 = require("../types");
function shuffle({ value }, begin = 0) {
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
exports.JsonFunctionShuffle = { name: '$shuffle',
    type: types_1.JsonType.Array,
    function: shuffle,
};
exports.default = exports.JsonFunctionShuffle;
//# sourceMappingURL=shuffle.js.map