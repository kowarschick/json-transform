import { JsonTransformerParameters, JsonTransformerString } from './interfaces';
import { JsonTransformer } from './root';
export declare class JsonTransformerStringTemplateFunctions extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    protected transformStringBefore: JsonTransformerString;
}
export default JsonTransformerStringTemplateFunctions;
