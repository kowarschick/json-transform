import { JsonArray, JsonFunctionParameters, JsonType } from '../interfaces';
export declare function JsonFunctionCount({ value }: JsonFunctionParameters<JsonArray>): number | JsonArray;
export declare namespace JsonFunctionCount {
    var type: JsonType;
    var init: string;
}
export default JsonFunctionCount;
