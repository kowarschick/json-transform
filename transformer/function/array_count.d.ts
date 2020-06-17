import { JsonArray, JsonFunctionParameters, EJsonType } from '../interfaces';
export declare function JsonFunctionArrayCount({ value }: JsonFunctionParameters<JsonArray>): number | JsonArray;
export declare namespace JsonFunctionArrayCount {
    var type: EJsonType;
    var init: string;
}
export default JsonFunctionArrayCount;
