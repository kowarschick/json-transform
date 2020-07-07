"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionMaxString = exports.JsonFunctionMinString = exports.JsonFunctionMax = exports.JsonFunctionMin = void 0;
const types_1 = require("../../types");
const aggregate_1 = require("../aggregate");
exports.JsonFunctionMin = { name: '$min',
    type: types_1.JsonType.Array,
    function: aggregate_1.aggregate, init: { default: Infinity, aggregate: (a, b) => Math.min(a, b)
    }
};
exports.JsonFunctionMax = { name: '$max',
    type: types_1.JsonType.Array,
    function: aggregate_1.aggregate, init: { default: -Infinity, aggregate: (a, b) => Math.max(a, b)
    }
};
exports.JsonFunctionMinString = { name: '$min_string',
    type: types_1.JsonType.Array,
    function: aggregate_1.aggregate, init: { default: null, aggregate: (a, b) => a.localeCompare(b) < 0
    }
};
exports.JsonFunctionMaxString = { name: '$max_string',
    type: types_1.JsonType.Array,
    function: aggregate_1.aggregate, init: { default: '', aggregate: (a, b) => a.localeCompare(b) > 0
    }
};
//# sourceMappingURL=min_max.js.map