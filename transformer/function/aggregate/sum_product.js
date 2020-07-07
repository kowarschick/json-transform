"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFunctionProduct = exports.JsonFunctionSum = void 0;
const types_1 = require("../../types");
const aggregate_1 = require("../aggregate");
exports.JsonFunctionSum = { name: '$sum',
    type: types_1.JsonType.Array,
    function: aggregate_1.aggregate, init: { default: 0, aggregate: (a, b) => a + b
    }
};
exports.JsonFunctionProduct = { name: '$product',
    type: types_1.JsonType.Array,
    function: aggregate_1.aggregate, init: { default: 1, aggregate: (a, b) => a * b
    }
};
//# sourceMappingURL=sum_product.js.map