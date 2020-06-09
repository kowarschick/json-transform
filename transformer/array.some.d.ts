import { JsonTransformerParameters, JsonTransformerArray } from './interfaces';
import { JsonTransformer } from './root';
export declare class JsonTransformerArraySome extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    protected transformArrayAfter: JsonTransformerArray;
}
