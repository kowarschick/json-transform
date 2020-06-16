import { JsonString } from './interfaces';
import { JsonFunction } from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerStringTemplate extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    transformerJsonStringBefore: JsonFunction<JsonString>;
}
export default JsonTransformerStringTemplate;
