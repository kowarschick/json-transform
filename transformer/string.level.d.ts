import { JsonTransformerParameters, JsonTransformerString } from './interfaces';
import { JsonTransformer } from './root';
export declare class JsonTransformerStringLevel extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    protected transformStringBefore: JsonTransformerString;
}
export default JsonTransformerStringLevel;
