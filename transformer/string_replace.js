"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerStringReplace = exports.JsonFunctionStringReplace = void 0;
const transformer_1 = require("./transformer");
function JsonFunctionStringReplace({ value, data }) {
    const c_value = data[value];
    return c_value != null ? c_value : value;
}
exports.JsonFunctionStringReplace = JsonFunctionStringReplace;
class JsonTransformerStringReplace extends transformer_1.JsonTransformer {
    constructor(_ = {}) {
        super(_);
        this.transformerJsonString = ({ value, data }) => {
            const c_value = data[value];
            return c_value != null ? c_value : value;
        };
        this.initialize();
    }
}
exports.JsonTransformerStringReplace = JsonTransformerStringReplace;
exports.default = JsonTransformerStringReplace;
//# sourceMappingURL=string_replace.js.map