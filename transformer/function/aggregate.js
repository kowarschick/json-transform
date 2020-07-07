"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregate = void 0;
function aggregate({ value, init }, begin = 0) {
    const c_init = init, c_default = c_init.default, c_aggregate = c_init.aggregate;
    if (typeof c_aggregate === 'function') {
        let l_result = c_default;
        for (let i = begin, n = value.length; i < n; i++) {
            l_result = c_aggregate(l_result, value[i], begin, i, value);
        }
        return l_result;
    }
    else {
        return c_default;
    }
}
exports.aggregate = aggregate;
exports.default = aggregate;
//# sourceMappingURL=aggregate.js.map