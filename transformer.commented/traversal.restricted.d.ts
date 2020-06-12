/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { JsonValue } from './interfaces';
import { JsonFunctionParameters } from './interfaces';
import { JsonTransformerParameters } from './interfaces';
import { JsonTransformerTraversal } from './traversal';
export declare class JsonTransformerTraversalRestricted extends JsonTransformerTraversal {
    constructor(options?: JsonTransformerParameters);
    protected transformPipe(_: JsonFunctionParameters): JsonValue;
}
export default JsonTransformerTraversalRestricted;
