"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerFunction = void 0;
const interfaces_1 = require("./interfaces");
const transformer_1 = require("./transformer");
class JsonTransformerFunction extends transformer_1.JsonTransformer {
    constructor(_ = {}) {
        var _a, _b, _c;
        super(Object.assign(Object.assign({}, _), { init: Object.assign(Object.assign({}, _.init), { functionAttribute: (_b = (_a = _ === null || _ === void 0 ? void 0 : _.init) === null || _a === void 0 ? void 0 : _a.functionAttribute) !== null && _b !== void 0 ? _b : '$function' })
        }));
        this.v_functions = { [interfaces_1.JsonType.Array]: {},
            [interfaces_1.JsonType.Object]: {},
            [interfaces_1.JsonType.String]: {},
        };
        this.transformerJsonArray = (_) => {
            if (_.value.length === 0) {
                return _.value;
            }
            const f = this.v_functions_before[interfaces_1.JsonType.Array][_.value[0]];
            return f == null ? _.value : f(_);
        };
        this.transformerJsonObject = (_) => {
            var _a;
            const c_function_name = (_a = _.value[this.init.functionAttribute]) !== null && _a !== void 0 ? _a : '';
            if (typeof c_function_name === 'string' && _.value[c_function_name] != null) {
                const f = this.v_functions[interfaces_1.JsonType.Object][c_function_name];
                return f == null ? _.value : f(_);
            }
            else {
                return _.value;
            }
        };
        this.transformerJsonString = (_) => {
            const f = this.v_functions[interfaces_1.JsonType.String][_.value];
            return f == null ? _.value : f(_);
        };
        if (Array.isArray((_c = _ === null || _ === void 0 ? void 0 : _.init) === null || _c === void 0 ? void 0 : _c.functions)) {
            for (const c_function of _.init.functions)
                if (c_function.type != null) {
                    this.v_functions[c_function.type][c_function.init] = c_function;
                }
        }
    }
}
exports.JsonTransformerFunction = JsonTransformerFunction;
exports.default = JsonTransformerFunction;
//# sourceMappingURL=function.js.map