/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { EnumJsonFunctionType } from './interfaces';
import { JsonTransformer } from './root';
export class JsonTransformerFunction extends JsonTransformer {
    constructor(options = {}) {
        var _a, _b, _c, _d;
        super(Object.assign(Object.assign({}, options), { init: Object.assign(Object.assign({}, options.init), { functionAttribute: (_b = (_a = options === null || options === void 0 ? void 0 : options.init) === null || _a === void 0 ? void 0 : _a.functionAttribute) !== null && _b !== void 0 ? _b : '$function' })
        }));
        this.v_functions_before = { [EnumJsonFunctionType.String]: {},
            [EnumJsonFunctionType.Array]: {},
            [EnumJsonFunctionType.Map]: {},
        };
        this.v_functions_after = { [EnumJsonFunctionType.String]: {},
            [EnumJsonFunctionType.Array]: {},
            [EnumJsonFunctionType.Map]: {},
        };
        this.transformStringBefore = (_) => {
            const f = this.v_functions_before[EnumJsonFunctionType.String][_.value];
            return f == null ? _.value : f(_);
        };
        this.transformArrayBefore = (_) => {
            if (_.value.length === 0) {
                return _.value;
            }
            const f = this.v_functions_before[EnumJsonFunctionType.Array][_.value[0]];
            return f == null ? _.value : f(_);
        };
        this.transformMapBefore = (_) => {
            var _a;
            const c_function_name = (_a = _.value[this.init.functionAttribute]) !== null && _a !== void 0 ? _a : '';
            if (typeof c_function_name === 'string' && _.value[c_function_name] != null) {
                const f = this.v_functions_before[EnumJsonFunctionType.Map][c_function_name];
                return f == null ? _.value : f(_);
            }
            else {
                return _.value;
            }
        };
        this.transformStringAfter = (_) => {
            const f = this.v_functions_after[EnumJsonFunctionType.String][_.value];
            return f == null ? _.value : f(_);
        };
        this.transformArrayAfter = (_) => {
            if (_.value.length === 0) {
                return _.value;
            }
            const f = this.v_functions_after[EnumJsonFunctionType.Array][_.value[0]];
            return f == null ? _.value : f(_);
        };
        this.transformMapAfter = (_) => {
            var _a;
            const c_function_name = (_a = _.value[this.init.functionAttribute]) !== null && _a !== void 0 ? _a : '';
            if (typeof c_function_name === 'string' && _.value[c_function_name] != null) {
                const f = this.v_functions_after[EnumJsonFunctionType.Map][c_function_name];
                return f == null ? _.value : f(_);
            }
            else {
                return _.value;
            }
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
export default JsonTransformerFunction;
//# sourceMappingURL=function.js.map