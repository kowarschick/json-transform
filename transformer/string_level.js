"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerStringLevel = void 0;
const transformer_1 = require("./transformer");
class JsonTransformerStringLevel extends transformer_1.JsonTransformer {
    constructor(_ = {}) {
        var _a;
        super(Object.assign(Object.assign({}, _), { init: (_a = _ === null || _ === void 0 ? void 0 : _.init) !== null && _a !== void 0 ? _a : '$level' }));
        this.transformerJsonString = ({ value, level }) => { return (value === this.init) ? level : value; };
    }
}
exports.JsonTransformerStringLevel = JsonTransformerStringLevel;
exports.default = JsonTransformerStringLevel;
//# sourceMappingURL=string_level.js.map