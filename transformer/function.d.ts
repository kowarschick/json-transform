import { JsonString, JsonArray, JsonObject } from './interfaces';
import { JsonFunction } from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerFunction extends JsonTransformer {
    static functionAttribute: string;
    constructor(_?: JsonTransformerParameters);
    private a_functions;
    transformerJsonArray: JsonFunction<JsonArray>;
    transformerJsonObject: JsonFunction<JsonObject>;
    transformerJsonString: JsonFunction<JsonString>;
}
export default JsonTransformerFunction;
