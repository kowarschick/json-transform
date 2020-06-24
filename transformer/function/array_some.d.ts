import { JsonArray, JsonFunctionParameters, JsonType } from '../types';
export declare function JsonFunctionArraySome({ value }: JsonFunctionParameters<JsonArray>): import("../types").JsonValue;
export declare namespace JsonFunctionArraySome {
    var type: JsonType;
    var init: {
        function: string;
    };
}
export default JsonFunctionArraySome;
