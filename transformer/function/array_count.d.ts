import { JsonArray, JsonFunctionParameters, JsonType } from '../interfaces';
export declare function JsonFunctionArrayCount({ value }: JsonFunctionParameters<JsonArray>): number | JsonArray;
export declare namespace JsonFunctionArrayCount {
    var type: JsonType;
    var init: string;
}
export default JsonFunctionArrayCount;
