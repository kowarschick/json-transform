import { JsonValue, JsonString } from './types';
import { JsonFunction, JsonFunctionParameters } from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare function JsonFunctionStringReplace({ value, data }: JsonFunctionParameters<JsonString>): string | number | boolean | import("./types").JsonArray | import("./types").JsonObject | JsonFunction<JsonValue>;
export declare class JsonTransformerStringReplace extends JsonTransformer {
    constructor(_?: JsonTransformerParameters);
    transformerJsonString: JsonFunction<JsonString>;
}
export default JsonTransformerStringReplace;
