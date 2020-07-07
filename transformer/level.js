"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerLevel = void 0;
const LEVEL = '$level';
const transformer_1 = require("./transformer");
class JsonTransformerLevel extends transformer_1.JsonTransformer {
    constructor(_ = {}) {
        super(_);
        this.transformerJsonString = ({ value, level }) => { return (value === this.rename(LEVEL)) ? level : value; };
        this.initialize();
    }
}
exports.JsonTransformerLevel = JsonTransformerLevel;
exports.default = JsonTransformerLevel;
//# sourceMappingURL=level.js.map