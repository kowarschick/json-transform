import { JsonTransformerParameters, JsonTransformerString } from './interfaces';
import { JsonTransformer } from './root';
export declare class JsonTransformerStringTemplate extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    protected transformStringBefore: JsonTransformerString;
}
