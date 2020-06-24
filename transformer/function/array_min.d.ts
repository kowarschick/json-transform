import { JsonArray, JsonFunctionParameters, JsonType } from '../types';
export declare function JsonFunctionArrayMin({ value }: JsonFunctionParameters<JsonArray>): import("../types").JsonValue;
export declare namespace JsonFunctionArrayMin {
    var type: JsonType;
    var init: {
        function: string;
    };
}
export default JsonFunctionArrayMin;
