/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { JsonTransformerParameters } from './interfaces';
import { JsonTransformerString, JsonTransformerArray, JsonTransformerMap } from './interfaces';
import { JsonTransformer } from './root';
export declare class JsonTransformerFunction extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    private v_functions_before;
    private v_functions_after;
    protected transformStringBefore: JsonTransformerString;
    protected transformArrayBefore: JsonTransformerArray;
    protected transformMapBefore: JsonTransformerMap;
    protected transformStringAfter: JsonTransformerString;
    protected transformArrayAfter: JsonTransformerArray;
    protected transformMapAfter: JsonTransformerMap;
}
export default JsonTransformerFunction;
