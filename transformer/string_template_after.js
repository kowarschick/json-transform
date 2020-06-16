"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerStringTemplateAfter = void 0;
const string_template_1 = require("./string_template");
class JsonTransformerStringTemplateAfter extends string_template_1.JsonTransformerStringTemplate {
    constructor(_ = {}) {
        super(_);
        this.transformerJsonStringAfter = this.transformerJsonStringBefore;
    }
}
exports.JsonTransformerStringTemplateAfter = JsonTransformerStringTemplateAfter;
exports.default = string_template_1.JsonTransformerStringTemplate;
//# sourceMappingURL=string_template_after.js.map