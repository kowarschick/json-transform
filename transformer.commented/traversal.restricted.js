"use strict";
/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTransformerTraversalRestricted = void 0;
const traversal_1 = require("./traversal");
class JsonTransformerTraversalRestricted extends traversal_1.JsonTransformerTraversal {
    constructor(options = {}) {
        super({ ...options, init: { minLevel: options?.init?.minLevel ?? 0,
                maxLevel: options?.init?.maxLevel ?? Infinity,
            }
        });
    }
    transformPipe(_) {
        return (this.init.minLevel <= _.level && _.level <= this.init.maxLevel)
            ? super.transformPipe(_)
            : _.value;
    }
}
exports.JsonTransformerTraversalRestricted = JsonTransformerTraversalRestricted;
exports.default = JsonTransformerTraversalRestricted;
