"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerLevel = void 0;
const transformer_1 = require("./transformer");
class JsonTransformerLevel extends transformer_1.JsonTransformer {
    constructor(_ = {}) {
        var _a;
        super(Object.assign(Object.assign({}, _), { init: (_a = _ === null || _ === void 0 ? void 0 : _.init) !== null && _a !== void 0 ? _a : { level: '$level' } }));
        this.transformerJsonString = ({ value, level }) => { var _a; return (value === ((_a = this.init) === null || _a === void 0 ? void 0 : _a.level)) ? level : value; };
    }
}
exports.JsonTransformerLevel = JsonTransformerLevel;
exports.default = JsonTransformerLevel;
//# sourceMappingURL=level.js.map