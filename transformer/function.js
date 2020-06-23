"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerFunction = void 0;
const types_1 = require("./types");
const transformer_1 = require("./transformer");
class JsonTransformerFunction extends transformer_1.JsonTransformer {
    constructor(_ = {}) {
        var _a;
        super(_);
        this.a_functions = { [types_1.JsonType.Array]: {},
            [types_1.JsonType.Object]: {},
            [types_1.JsonType.String]: {},
        };
        this.transformerJsonArray = (_) => {
            if (_.value.length === 0) {
                return _.value;
            }
            const f = this.a_functions[types_1.JsonType.Array][_.value[0]];
            return f == null ? _.value : f(_);
        };
        this.transformerJsonObject = (_) => {
            var _a;
            const c_function_name = (_a = _.value[JsonTransformerFunction.functionAttribute]) !== null && _a !== void 0 ? _a : '';
            if (typeof c_function_name === 'string') {
                const f = this.a_functions[types_1.JsonType.Object][c_function_name];
                return f == null ? _.value : f(_);
            }
            else {
                return _.value;
            }
        };
        this.transformerJsonString = (_) => {
            const f = this.a_functions[types_1.JsonType.String][_.value];
            return f == null ? _.value : f(_);
        };
        if (Array.isArray((_a = _ === null || _ === void 0 ? void 0 : _.init) === null || _a === void 0 ? void 0 : _a.functions)) {
            for (const c_function of _.init.functions)
                if (c_function.type != null) {
                    this.a_functions[c_function.type][c_function.init.function] = c_function;
                }
        }
    }
}
exports.JsonTransformerFunction = JsonTransformerFunction;
JsonTransformerFunction.functionAttribute = '$function';
exports.default = JsonTransformerFunction;
//# sourceMappingURL=function.js.map