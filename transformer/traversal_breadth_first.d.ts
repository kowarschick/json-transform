import { JsonValue, JsonPrimitive, JsonArray, JsonObject } from './types';
import { JsonFunction, JsonFunctionParameters } from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerTraversalBreadthFirst extends JsonTransformer {
    constructor(_?: JsonTransformerParameters);
    transformerPipe({ value }: JsonFunctionParameters): JsonValue;
    transformerJsonPrimitive: JsonFunction<JsonPrimitive>;
    transformerJsonArray: JsonFunction<JsonArray>;
    transformerJsonObject: JsonFunction<JsonObject>;
}
export default JsonTransformerTraversalBreadthFirst;
