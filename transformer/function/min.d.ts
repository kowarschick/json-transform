import { JsonArray, JsonFunctionParameters, JsonType } from '../types';
export declare function JsonFunctionMin({ value }: JsonFunctionParameters<JsonArray>): import("../types").JsonValue;
export declare namespace JsonFunctionMin {
    var type: JsonType;
    var init: {
        function: string;
    };
}
export default JsonFunctionMin;
