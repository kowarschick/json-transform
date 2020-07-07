"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionDuplicate = exports.duplicate = void 0;
const types_1 = require("../types");
const traversal_1 = require("../traversal");
const VALUE = '$value', TIMES = '$times', FLATTEN = '$flatten';
function duplicate({ value, init, rename = name => name }) {
    var _a, _b, _c;
    const c_clone_transformer = new traversal_1.JsonTransformerTraversal(), c_init = init, c_value = ((_a = value === null || value === void 0 ? void 0 : value[rename(VALUE)]) !== null && _a !== void 0 ? _a : null), c_times = ((_b = value === null || value === void 0 ? void 0 : value[rename(TIMES)]) !== null && _b !== void 0 ? _b : c_init.times), c_flatten = ((_c = value === null || value === void 0 ? void 0 : value[rename(FLATTEN)]) !== null && _c !== void 0 ? _c : c_init.flatten), c_result = [];
    if (c_flatten && Array.isArray(c_value)) {
        for (let l_value of c_value) {
            for (let i = 0; i < c_times; i++) {
                c_result.push(c_clone_transformer.transform({ value: l_value }));
            }
        }
    }
    else {
        for (let i = 0; i < c_times; i++) {
            c_result.push(c_clone_transformer.transform({ value: c_value }));
        }
    }
    return c_result;
}
exports.duplicate = duplicate;
exports.JsonFunctionDuplicate = { name: '$duplicate',
    type: types_1.JsonType.Object,
    function: duplicate,
    init: { times: 1,
        withinArray: false
    }
};
exports.default = exports.JsonFunctionDuplicate;
//# sourceMappingURL=duplicate.js.map