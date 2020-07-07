import { JsonString, JsonArray, JsonObject } from './types';
import { JsonFunction } from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerFunction extends JsonTransformer {
    constructor(_?: JsonTransformerParameters);
    private descriptors;
    transformerJsonArray: JsonFunction<JsonArray>;
    transformerJsonObject: JsonFunction<JsonObject>;
    transformerJsonString: JsonFunction<JsonString>;
}
export default JsonTransformerFunction;
