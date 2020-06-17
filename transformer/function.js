"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerFunction = void 0;
const interfaces_1 = require("./interfaces");
const transformer_1 = require("./transformer");
class JsonTransformerFunction extends transformer_1.JsonTransformer {
    constructor(options = {}) {
        var _a, _b, _c, _d;
        super(Object.assign(Object.assign({}, options), { init: Object.assign(Object.assign({}, options.init), { functionAttribute: (_b = (_a = options === null || options === void 0 ? void 0 : options.init) === null || _a === void 0 ? void 0 : _a.functionAttribute) !== null && _b !== void 0 ? _b : '$function' })
        }));
        this.v_functions_before = { [interfaces_1.EJsonType.Array]: {},
            [interfaces_1.EJsonType.Object]: {},
            [interfaces_1.EJsonType.String]: {},
        };
        this.v_functions_after = { [interfaces_1.EJsonType.Array]: {},
            [interfaces_1.EJsonType.Object]: {},
            [interfaces_1.EJsonType.String]: {},
        };
        this.transformerJsonArrayBefore = (_) => {
            if (_.value.length === 0) {
                return _.value;
            }
            const f = this.v_functions_before[interfaces_1.EJsonType.Array][_.value[0]];
            return f == null ? _.value : f(_);
        };
        this.transformerJsonMapBefore = (_) => {
            var _a;
            const c_function_name = (_a = _.value[this.init.functionAttribute]) !== null && _a !== void 0 ? _a : '';
            if (typeof c_function_name === 'string' && _.value[c_function_name] != null) {
                const f = this.v_functions_before[interfaces_1.EJsonType.Object][c_function_name];
                return f == null ? _.value : f(_);
            }
            else {
                return _.value;
            }
        };
        this.transformerJsonStringBefore = (_) => {
            const f = this.v_functions_before[interfaces_1.EJsonType.String][_.value];
            return f == null ? _.value : f(_);
        };
        this.transformerJsonArrayAfter = (_) => {
            if (_.value.length === 0) {
                return _.value;
            }
            const f = this.v_functions_after[interfaces_1.EJsonType.Array][_.value[0]];
            return f == null ? _.value : f(_);
        };
        this.transformerJsonMapAfter = (_) => {
            var _a;
            const c_function_name = (_a = _.value[this.init.functionAttribute]) !== null && _a !== void 0 ? _a : '';
            if (typeof c_function_name === 'string' && _.value[c_function_name] != null) {
                const f = this.v_functions_after[interfaces_1.EJsonType.Object][c_function_name];
                return f == null ? _.value : f(_);
            }
            else {
                return _.value;
            }
        };
        this.transformerJsonStringAfter = (_) => {
            const f = this.v_functions_after[interfaces_1.EJsonType.String][_.value];
            return f == null ? _.value : f(_);
        };
        if (Array.isArray((_c = options === null || options === void 0 ? void 0 : options.init) === null || _c === void 0 ? void 0 : _c.before)) {
            for (const c_function of options.init.before)
                if (c_function.type != null) {
                    this.v_functions_before[c_function.type][c_function.init] = c_function;
                }
        }
        if (Array.isArray((_d = options === null || options === void 0 ? void 0 : options.init) === null || _d === void 0 ? void 0 : _d.after)) {
            for (const c_function of options.init.after) {
                this.v_functions_after[c_function.type][c_function.init] = c_function;
            }
        }
    }
}
exports.JsonTransformerFunction = JsonTransformerFunction;
exports.default = JsonTransformerFunction;
//# sourceMappingURL=function.js.map