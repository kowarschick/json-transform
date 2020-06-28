import { JsonArray, JsonFunctionParameters, JsonType } from '../types';
export declare function JsonFunctionArrayMax({ value }: JsonFunctionParameters<JsonArray>): import("../types").JsonValue;
export declare namespace JsonFunctionArrayMax {
    var type: JsonType;
    var init: {
        function: string;
        default: number;
    };
}
export default JsonFunctionArrayMax;
