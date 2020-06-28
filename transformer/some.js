"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerSome = void 0;
const transformer_1 = require("./transformer");
const function_1 = require("./function");
class JsonTransformerSome extends transformer_1.JsonTransformer {
    constructor(_ = {}) {
        var _a;
        super(Object.assign(Object.assign({}, _), { init: (_a = _ === null || _ === void 0 ? void 0 : _.init) !== null && _a !== void 0 ? _a : { some: '$some' } }));
        this.transformerJsonArray = ({ value }) => {
            const c_length = value.length;
            if (c_length === 0 || value[0] !== this.init.some) {
                return value;
            }
            return (c_length === 1)
                ? null
                : value[Math.floor(Math.random() * (c_length - 1)) + 1];
        };
        this.transformerJsonObject = ({ value, data, level }) => {
            const c_value = value === null || value === void 0 ? void 0 : value['$value'];
            return ((value === null || value === void 0 ? void 0 : value[function_1.JsonTransformerFunction.functionAttribute]) === this.init
                && Array.isArray(c_value))
                ? this.transformerJsonArray({ value: c_value, data, level })
                : value;
        };
    }
}
exports.JsonTransformerSome = JsonTransformerSome;
exports.default = JsonTransformerSome;
//# sourceMappingURL=some.js.map