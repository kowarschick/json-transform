"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionSequence = exports.sequence = void 0;
const types_1 = require("../types");
const FIRST = '$first', LAST = '$last', PREFIX = '$prefix', FORMAT = '$format';
function sequence({ value, data, init, rename = name => name }) {
    var _a, _b, _c, _d;
    const c_init = init, c_first = ((_a = value === null || value === void 0 ? void 0 : value[rename(FIRST)]) !== null && _a !== void 0 ? _a : c_init.first), c_last = ((_b = value === null || value === void 0 ? void 0 : value[rename(LAST)]) !== null && _b !== void 0 ? _b : c_init.last), c_prefix = ((_c = value === null || value === void 0 ? void 0 : value[rename(PREFIX)]) !== null && _c !== void 0 ? _c : c_init.prefix), c_format_data = ((_d = value === null || value === void 0 ? void 0 : value[rename(FORMAT)]) !== null && _d !== void 0 ? _d : c_init.format), c_format = ((typeof c_format_data === 'string') ? data[c_format_data] : c_format_data), c_result = [];
    for (let i = c_first; i <= c_last; i++) {
        let l_result = i;
        if (c_prefix != null) {
            l_result = c_prefix + l_result;
        }
        if (c_format != null) {
            if (c_format != null) {
                l_result = c_format(l_result);
            }
        }
        c_result.push(l_result);
    }
    return c_result;
}
exports.sequence = sequence;
exports.JsonFunctionSequence = { name: '$sequence',
    type: types_1.JsonType.Object,
    function: sequence,
    init: { first: 1,
        last: 1,
        prefix: null,
        format: null
    }
};
exports.default = exports.JsonFunctionSequence;
//# sourceMappingURL=sequence.js.map