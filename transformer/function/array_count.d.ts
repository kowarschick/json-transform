import { JsonArray, JsonFunctionParameters, JsonType } from '../types';
export declare function JsonFunctionCount({ value }: JsonFunctionParameters<JsonArray>): number | JsonArray;
export declare namespace JsonFunctionCount {
    var type: JsonType;
    var init: {
        function: string;
    };
}
export default JsonFunctionCount;
