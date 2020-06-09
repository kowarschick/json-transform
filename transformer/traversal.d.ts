import { JsonTransformerParameters, JsonTransformerArray, JsonTransformerMap } from './interfaces';
import { JsonTransformer } from './root';
export declare class JsonTransformerTraversal extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    protected transformArrayAfter: JsonTransformerArray;
    protected transformMapAfter: JsonTransformerMap;
}
