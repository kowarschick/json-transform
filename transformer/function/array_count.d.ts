import { JsonArray, JsonFunctionParameters, JsonType } from '../types';
export declare function JsonFunctionArrayCount({ value }: JsonFunctionParameters<JsonArray>): number | JsonArray;
export declare namespace JsonFunctionArrayCount {
    var type: JsonType;
    var init: {
        function: string;
    };
}
export default JsonFunctionArrayCount;
