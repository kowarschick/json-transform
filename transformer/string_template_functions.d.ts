import { JsonString } from './interfaces';
import { JsonFunction } from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerStringTemplateFunctions extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    transformerJsonString: JsonFunction<JsonString>;
}
export default JsonTransformerStringTemplateFunctions;
