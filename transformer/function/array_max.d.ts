import { JsonArray, JsonFunctionParameters, JsonType } from '../types';
export declare function JsonFunctionMax({ value }: JsonFunctionParameters<JsonArray>): import("../types").JsonValue;
export declare namespace JsonFunctionMax {
    var type: JsonType;
    var init: {
        function: string;
        default: number;
    };
}
export default JsonFunctionMax;
