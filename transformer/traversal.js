"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerTraversal = void 0;
const transformer_1 = require("./transformer");
class JsonTransformerTraversal extends transformer_1.JsonTransformer {
    constructor(options = {}) {
        super(options);
        this.transformerJsonPrimitiveAfter = ({ value }) => value;
        this.transformerJsonArrayAfter = ({ value, data, level }) => {
            const c_level = level + 1, c_result = [];
            for (const c_json_value of value) {
                c_result.push(this.transform({ value: c_json_value, data, level: c_level }));
            }
            return c_result;
        };
        this.transformerJsonObjectAfter = ({ value, data, level }) => {
            const c_level = level + 1, c_result = {};
            for (const [c_key, c_value] of Object.entries(value)) {
                c_result[this.transform({ value: c_key, data, level: c_level })]
                    = this.transform({ value: c_value, data, level: c_level });
            }
            return c_result;
        };
    }
}
exports.JsonTransformerTraversal = JsonTransformerTraversal;
exports.default = JsonTransformerTraversal;
//# sourceMappingURL=traversal.js.map