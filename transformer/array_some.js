"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerArraySome = void 0;
const transformer_1 = require("./transformer");
class JsonTransformerArraySome extends transformer_1.JsonTransformer {
    constructor(_ = {}) {
        var _a;
        super(Object.assign(Object.assign({}, _), { init: (_a = _ === null || _ === void 0 ? void 0 : _.init) !== null && _a !== void 0 ? _a : '$some' }));
        this.transformerJsonArrayBefore = ({ value }) => {
            const c_length = value.length;
            if (c_length === 0 || value[0] !== this.init) {
                return value;
            }
            return (c_length === 1)
                ? null
                : value[Math.floor(Math.random() * (c_length - 1)) + 1];
        };
        this.transformerJsonArrayAfter = this.transformerJsonArrayBefore;
    }
}
exports.JsonTransformerArraySome = JsonTransformerArraySome;
exports.default = JsonTransformerArraySome;
//# sourceMappingURL=array_some.js.map