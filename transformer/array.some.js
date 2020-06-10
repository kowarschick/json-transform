"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerArraySome = void 0;
const root_1 = require("./root");
class JsonTransformerArraySome extends root_1.JsonTransformer {
    constructor(options = {}) {
        var _a;
        super(Object.assign(Object.assign({}, options), { init: (_a = options === null || options === void 0 ? void 0 : options.init) !== null && _a !== void 0 ? _a : '$some' }));
        this.transformArrayAfter = ({ value }) => {
            const c_length = value.length;
            if (c_length === 0 || value[0] !== this.init) {
                return value;
            }
            return (c_length === 1)
                ? undefined
                : value[Math.floor(Math.random() * (c_length - 1)) + 1];
        };
    }
}
exports.JsonTransformerArraySome = JsonTransformerArraySome;
exports.default = JsonTransformerArraySome;
//# sourceMappingURL=array.some.js.map