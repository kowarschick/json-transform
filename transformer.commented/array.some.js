"use strict";
/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerArraySome = void 0;
const root_1 = require("./root");
class JsonTransformerArraySome extends root_1.JsonTransformer {
    constructor(options = {}) {
        super({ ...options, init: options?.init ?? '$some' });
        this.transformArrayAfter = ({ value }) => {
            const c_length = value.length;
            if (c_length === 0 || value[0] !== this.init) {
                return value;
            }
            return (c_length === 1)
                ? undefined
                : value[Math.floor(Math.random() * (c_length - 1)) + 1];
        };
    }
}
exports.JsonTransformerArraySome = JsonTransformerArraySome;
exports.default = JsonTransformerArraySome;
