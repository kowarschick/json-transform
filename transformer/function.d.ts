import { JsonString, JsonArray, JsonMap } from './interfaces';
import { JsonFunction } from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerFunction extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    private v_functions_before;
    private v_functions_after;
    transformerJsonArrayBefore: JsonFunction<JsonArray>;
    transformerJsonMapBefore: JsonFunction<JsonMap>;
    transformerJsonStringBefore: JsonFunction<JsonString>;
    transformerJsonArrayAfter: JsonFunction<JsonArray>;
    transformerJsonMapAfter: JsonFunction<JsonMap>;
    transformerJsonStringAfter: JsonFunction<JsonString>;
}
export default JsonTransformerFunction;
