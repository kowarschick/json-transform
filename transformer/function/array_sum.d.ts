import { JsonArray, JsonFunctionParameters, JsonType } from '../types';
export declare function JsonFunctionArraySum({ value }: JsonFunctionParameters<JsonArray>): import("../types").JsonValue;
export declare namespace JsonFunctionArraySum {
    var type: JsonType;
    var init: {
        function: string;
    };
}
export default JsonFunctionArraySum;
