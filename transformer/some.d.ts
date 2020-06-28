import { JsonArray, JsonObject } from './types';
import { JsonFunction } from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerSome extends JsonTransformer {
    constructor(_?: JsonTransformerParameters);
    transformerJsonArray: JsonFunction<JsonArray>;
    transformerJsonObject: JsonFunction<JsonObject>;
}
export default JsonTransformerSome;
