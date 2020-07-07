"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerTraversalBreadthFirst = void 0;
const transformer_1 = require("./transformer");
class JsonTransformerTraversalBreadthFirst extends transformer_1.JsonTransformer {
    constructor(_ = {}) {
        super(_);
        this.transformerJsonPrimitive = ({ value }) => value;
        this.transformerJsonArray = ({ value, data, level }) => {
            const c_level = level + 1;
            let l_result = [];
            for (const c_json_result of value) {
                l_result.push(this.transform({ value: c_json_result, data, level: c_level }));
            }
            return super.transformerPipe({ value: l_result, data, level: c_level });
        };
        this.transformerJsonObject = ({ value, data, level }) => {
            const c_level = level + 1;
            let l_result = {};
            for (const [c_key, c_result] of Object.entries(value)) {
                l_result[this.transform({ value: c_key, data, level: c_level })]
                    = this.transform({ value: c_result, data, level: c_level });
            }
            return super.transformerPipe({ value: l_result, data, level: c_level });
        };
        this.initialize();
    }
    transformerPipe({ value }) { return value; }
}
exports.JsonTransformerTraversalBreadthFirst = JsonTransformerTraversalBreadthFirst;
exports.default = JsonTransformerTraversalBreadthFirst;
//# sourceMappingURL=traversal_breadth_first.js.map