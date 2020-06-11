"use strict";
/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerFunction = void 0;
const interfaces_1 = require("./interfaces");
const root_1 = require("./root");
class JsonTransformerFunction extends root_1.JsonTransformer {
    constructor(options = {}) {
        super({ ...options,
            ...{ init: { ...options.init,
                    functionAttribute: options?.init?.functionAttribute ?? '$function'
                }
            }
        });
        this.v_functions_before = { [interfaces_1.EnumJsonFunctionType.String]: {},
            [interfaces_1.EnumJsonFunctionType.Array]: {},
            [interfaces_1.EnumJsonFunctionType.Map]: {},
        };
        this.v_functions_after = { [interfaces_1.EnumJsonFunctionType.String]: {},
            [interfaces_1.EnumJsonFunctionType.Array]: {},
            [interfaces_1.EnumJsonFunctionType.Map]: {},
        };
        this.transformStringBefore = (_) => {
            const f = this.v_functions_before[interfaces_1.EnumJsonFunctionType.String][_.value];
            return f == null ? _.value : f(_);
        };
        this.transformArrayBefore = (_) => {
            if (_.value.length === 0) {
                return _.value;
            }
            const f = this.v_functions_before[interfaces_1.EnumJsonFunctionType.Array][_.value[0]];
            return f == null ? _.value : f(_);
        };
        this.transformMapBefore = (_) => {
            const c_function_name = _.value[this.init.functionAttribute] ?? '';
            if (typeof c_function_name === 'string' && _.value[c_function_name] != null) {
                const f = this.v_functions_before[interfaces_1.EnumJsonFunctionType.Map][c_function_name];
                return f == null ? _.value : f(_);
            }
            else {
                return _.value;
            }
        };
        this.transformStringAfter = (_) => {
            const f = this.v_functions_after[interfaces_1.EnumJsonFunctionType.String][_.value];
            return f == null ? _.value : f(_);
        };
        this.transformArrayAfter = (_) => {
            if (_.value.length === 0) {
                return _.value;
            }
            const f = this.v_functions_after[interfaces_1.EnumJsonFunctionType.Array][_.value[0]];
            return f == null ? _.value : f(_);
        };
        this.transformMapAfter = (_) => {
            const c_function_name = _.value[this.init.functionAttribute] ?? '';
            if (typeof c_function_name === 'string' && _.value[c_function_name] != null) {
                const f = this.v_functions_after[interfaces_1.EnumJsonFunctionType.Map][c_function_name];
                return f == null ? _.value : f(_);
            }
            else {
                return _.value;
            }
        };
        if (Array.isArray(options?.init?.before)) {
            for (const c_function of options.init.before)
                if (c_function.type != null) {
                    this.v_functions_before[c_function.type][c_function.init] = c_function;
                }
        }
        if (Array.isArray(options?.init?.after)) {
            for (const c_function of options.init.after) {
                this.v_functions_after[c_function.type][c_function.init] = c_function;
            }
        }
    }
}
exports.JsonTransformerFunction = JsonTransformerFunction;
exports.default = JsonTransformerFunction;
