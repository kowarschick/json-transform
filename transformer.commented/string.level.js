"use strict";
/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerStringLevel = void 0;
const root_1 = require("./root");
class JsonTransformerStringLevel extends root_1.JsonTransformer {
    constructor(options = {}) {
        super({ ...options, init: options?.init ?? '$level' });
        this.transformStringBefore = ({ value, level }) => { return (value === this.init) ? level : value; };
    }
}
exports.JsonTransformerStringLevel = JsonTransformerStringLevel;
exports.default = JsonTransformerStringLevel;
