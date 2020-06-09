"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerTraversal = void 0;
const root_1 = require("./root");
class JsonTransformerTraversal extends root_1.JsonTransformer {
    constructor(options = {}) {
        super(options);
        this.transformArrayAfter = (value, data, level) => {
            const c_level = level + 1, c_result = [];
            for (const c_json_value of value) {
                c_result.push(this.transform(c_json_value, data, c_level));
            }
            return c_result;
        };
        this.transformMapAfter = (value, data, level) => {
            const c_level = level + 1, c_result = {};
            for (const [c_key, c_value] of Object.entries(value)) {
                c_result[this.transform(c_key, data, c_level)]
                    = this.transform(c_value, data, c_level);
            }
            return c_result;
        };
    }
}
exports.JsonTransformerTraversal = JsonTransformerTraversal;
//# sourceMappingURL=traversal.js.map