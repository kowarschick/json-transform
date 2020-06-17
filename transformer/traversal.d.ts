import { JsonPrimitive, JsonArray, JsonObject } from './interfaces';
import { JsonFunction } from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerTraversal extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    transformerJsonPrimitiveAfter: JsonFunction<JsonPrimitive>;
    transformerJsonArrayAfter: JsonFunction<JsonArray>;
    transformerJsonObjectAfter: JsonFunction<JsonObject>;
}
export default JsonTransformerTraversal;
