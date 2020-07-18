"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerFunction = void 0;
const types_1 = require("./types");
const transformer_1 = require("./transformer");
class JsonTransformerFunction extends transformer_1.JsonTransformer {
    constructor(_ = {}) {
        super(_);
        this.descriptors = { [types_1.JsonType.Array]: {},
            [types_1.JsonType.Object]: {},
            [types_1.JsonType.String]: {},
        };
        this.transformerJsonArray = (_) => {
            const c_value = _.value;
            if (c_value.length === 0) {
                return c_value;
            }
            const c_name = this.functionName(c_value);
            if (c_name == null) {
                return c_value;
            }
            const c_d = this.descriptors[types_1.JsonType.Array][c_name];
            return c_d == null ? c_value : c_d.function(Object.assign(Object.assign({}, _), { init: c_d.init, rename: this.rename.bind(this) }), 1);
        };
        this.transformerJsonObject = (_) => {
            const c_value = _.value, c_function_name = this.functionName(c_value);
            if (c_function_name != null) {
                const c_do = this.descriptors[types_1.JsonType.Object][c_function_name];
                if (c_do != null) {
                    return c_do.function(Object.assign(Object.assign({}, _), { init: c_do.init, rename: this.rename.bind(this) }));
                }
                const c_da = this.descriptors[types_1.JsonType.Array][c_function_name], c_a = this.arrayFunctionValue(c_function_name, c_value);
                return c_a == null ? c_value : c_da.function(Object.assign(Object.assign({}, _), { value: c_a, init: c_da.init, rename: this.rename.bind(this) }));
            }
            else {
                return c_value;
            }
        };
        this.transformerJsonString = (_) => {
            const c_d = this.descriptors[types_1.JsonType.String][_.value];
            return c_d == null ? _.value : c_d.function(Object.assign(Object.assign({}, _), { init: c_d.init, rename: this.rename.bind(this) }));
        };
        this.initialize();
        if (Array.isArray(_.init)) {
            let l_descriptor;
            for (const c_function of _.init) {
                l_descriptor = c_function;
                this.descriptors[l_descriptor.type][l_descriptor.name] = l_descriptor;
            }
        }
    }
}
exports.JsonTransformerFunction = JsonTransformerFunction;
exports.default = JsonTransformerFunction;
//# sourceMappingURL=function.js.map