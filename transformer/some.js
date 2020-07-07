"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerSome = void 0;
const transformer_1 = require("./transformer");
const SOME = '$some';
class JsonTransformerSome extends transformer_1.JsonTransformer {
    constructor(_ = {}) {
        super(_);
        this.transformerJsonArray = ({ value }) => {
            const c_length = value.length;
            if (c_length === 0 || value[0] !== this.rename(SOME)) {
                return value;
            }
            return (c_length === 1)
                ? null
                : value[Math.floor(Math.random() * (c_length - 1)) + 1];
        };
        this.transformerJsonObject = ({ value, data, level }) => {
            const c_value = this.arrayFunctionValue(SOME, value);
            return (c_value != null)
                ? this.transformerJsonArray({ value: c_value, data, level })
                : value;
        };
        this.initialize();
    }
}
exports.JsonTransformerSome = JsonTransformerSome;
exports.default = JsonTransformerSome;
//# sourceMappingURL=some.js.map