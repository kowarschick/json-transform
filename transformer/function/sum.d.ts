import { JsonArray, JsonFunctionParameters, JsonType } from '../types';
export declare function JsonFunctionSum({ value }: JsonFunctionParameters<JsonArray>): import("../types").JsonValue;
export declare namespace JsonFunctionSum {
    var type: JsonType;
    var init: {
        function: string;
    };
}
export default JsonFunctionSum;
