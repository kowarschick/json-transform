"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerNull = void 0;
const transformer_1 = require("./transformer");
class JsonTransformerNull extends transformer_1.JsonTransformer {
    constructor(_ = {}) {
        super(_);
        this.transformerJsonNull = ({}) => { return null; };
    }
}
exports.JsonTransformerNull = JsonTransformerNull;
exports.default = JsonTransformerNull;
//# sourceMappingURL=null.js.map