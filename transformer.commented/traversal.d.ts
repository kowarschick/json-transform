/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { JsonTransformerParameters, JsonTransformerArray, JsonTransformerMap } from './interfaces';
import { JsonTransformer } from './root';
export declare class JsonTransformerTraversal extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    protected transformArrayAfter: JsonTransformerArray;
    protected transformMapAfter: JsonTransformerMap;
}
export default JsonTransformerTraversal;
