import { JsonPrimitive, JsonArray, JsonObject } from './types';
import { JsonFunction } from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerTraversal extends JsonTransformer {
    constructor(_?: JsonTransformerParameters);
    transformerJsonPrimitive: JsonFunction<JsonPrimitive>;
    transformerJsonArray: JsonFunction<JsonArray>;
    transformerJsonObject: JsonFunction<JsonObject>;
}
export default JsonTransformerTraversal;
