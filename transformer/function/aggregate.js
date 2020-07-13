"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionAverage = exports.JsonFunctionProduct = exports.JsonFunctionSum = exports.JsonFunctionMaxString = exports.JsonFunctionMinString = exports.JsonFunctionMax = exports.JsonFunctionMin = exports.aggregate = void 0;
const types_1 = require("../types");
function aggregate({ value, init }, begin = 0) {
    var _a;
    const c_init = init, c_begin = (((_a = c_init.begin) !== null && _a !== void 0 ? _a : 0) + begin), c_default = c_init.default, c_initialize = c_init.initialize, c_aggregate = c_init.aggregate, c_finalize = c_init.finalize;
    if (typeof c_aggregate === 'function') {
        let l_aggregation = (c_initialize != null)
            ? c_initialize(value, c_begin, c_default)
            : c_default;
        for (let i = c_begin, n = value.length; i < n; i++) {
            l_aggregation = c_aggregate(l_aggregation, value[i], value, c_begin, i);
        }
        if (c_finalize != null) {
            l_aggregation = c_finalize(l_aggregation, value, c_begin);
        }
        return l_aggregation;
    }
    else {
        return c_default;
    }
}
exports.aggregate = aggregate;
exports.JsonFunctionMin = { name: '$min',
    type: types_1.JsonType.Array,
    function: aggregate, init: { default: Number.MAX_VALUE, aggregate: (a, b) => Math.min(a, b)
    }
};
exports.JsonFunctionMax = { name: '$max',
    type: types_1.JsonType.Array,
    function: aggregate, init: { default: -Number.MAX_VALUE, aggregate: (a, b) => Math.max(a, b)
    }
};
exports.JsonFunctionMinString = { name: '$min_string',
    type: types_1.JsonType.Array,
    function: aggregate, init: { default: null,
        begin: 1, initialize: (array, begin) => (array.length > begin) ? array[begin] : null,
        aggregate: (a, b) => (a.toString().localeCompare(b) < 0) ? a : b
    }
};
exports.JsonFunctionMaxString = { name: '$max_string',
    type: types_1.JsonType.Array,
    function: aggregate, init: { default: null,
        begin: 1, initialize: (array, begin) => (array.length > begin) ? array[begin] : null,
        aggregate: (a, b) => (a.toString().localeCompare(b) > 0) ? a : b
    }
};
exports.JsonFunctionSum = { name: '$sum',
    type: types_1.JsonType.Array,
    function: aggregate, init: { default: 0, aggregate: (a, b) => a + b
    }
};
exports.JsonFunctionProduct = { name: '$product',
    type: types_1.JsonType.Array,
    function: aggregate, init: { default: 1, aggregate: (a, b) => a * b
    }
};
exports.JsonFunctionAverage = { name: '$average',
    type: types_1.JsonType.Array,
    function: aggregate, init: { default: 0, aggregate: (a, b) => a + b,
        finalize: (aggregation, array, begin) => aggregation / (array.length - begin)
    }
};
exports.default = exports.JsonFunctionMin;
//# sourceMappingURL=aggregate.js.map