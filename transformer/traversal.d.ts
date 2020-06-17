import { JsonPrimitive, JsonArray, JsonObject } from './interfaces';
import { JsonFunction } from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerTraversal extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    transformerJsonPrimitive: JsonFunction<JsonPrimitive>;
    transformerJsonArray: JsonFunction<JsonArray>;
    transformerJsonObject: JsonFunction<JsonObject>;
}
export default JsonTransformerTraversal;
