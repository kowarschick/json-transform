/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { JsonTransformerParameters, JsonTransformerString } from './interfaces';
import { JsonTransformer } from './root';
export declare class JsonTransformerStringTemplateFunctions extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    protected transformStringBefore: JsonTransformerString;
}
export default JsonTransformerStringTemplateFunctions;
