import { JsonArray, JsonFunctionParameters, JsonType } from '../types';
export declare function JsonFunctionSome({ value }: JsonFunctionParameters<JsonArray>): import("../types").JsonValue;
export declare namespace JsonFunctionSome {
    var type: JsonType;
    var init: {
        function: string;
    };
}
export default JsonFunctionSome;
