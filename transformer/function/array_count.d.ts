import { JsonArray, JsonFunctionParameters, EnumJsonFunctionType } from '../interfaces';
export declare function JsonFunctionArrayCount({ value }: JsonFunctionParameters<JsonArray>): number | JsonArray;
export declare namespace JsonFunctionArrayCount {
    var type: EnumJsonFunctionType;
    var init: string;
}
export default JsonFunctionArrayCount;
