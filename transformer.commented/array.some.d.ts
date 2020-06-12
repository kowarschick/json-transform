/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { JsonTransformerParameters, JsonTransformerArray } from './interfaces';
import { JsonTransformer } from './root';
export declare class JsonTransformerArraySome extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    protected transformArrayAfter: JsonTransformerArray;
}
export default JsonTransformerArraySome;
