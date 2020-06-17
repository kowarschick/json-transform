import { JsonString, JsonArray, JsonObject } from './interfaces';
import { JsonFunction } from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerFunction extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    private v_functions_before;
    private v_functions_after;
    transformerJsonArrayBefore: JsonFunction<JsonArray>;
    transformerJsonObjectBefore: JsonFunction<JsonObject>;
    transformerJsonStringBefore: JsonFunction<JsonString>;
    transformerJsonArrayAfter: JsonFunction<JsonArray>;
    transformerJsonObjectAfter: JsonFunction<JsonObject>;
    transformerJsonStringAfter: JsonFunction<JsonString>;
}
export default JsonTransformerFunction;
