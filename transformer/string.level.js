"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerStringLevel = void 0;
const root_1 = require("./root");
class JsonTransformerStringLevel extends root_1.JsonTransformer {
    constructor(options = {}) {
        var _a;
        super(Object.assign(Object.assign({}, options), { init: (_a = options === null || options === void 0 ? void 0 : options.init) !== null && _a !== void 0 ? _a : '$level' }));
        this.transformStringBefore = (value, data, level) => { return (value === this.init) ? level : value; };
    }
}
exports.JsonTransformerStringLevel = JsonTransformerStringLevel;
//# sourceMappingURL=string.level.js.map