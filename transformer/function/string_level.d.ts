import { JsonString, JsonFunctionParameters, EnumJsonFunctionType } from '../interfaces';
export declare function JsonFunctionStringLevel({ value, level }: JsonFunctionParameters<JsonString>): string | number;
export declare namespace JsonFunctionStringLevel {
    var type: EnumJsonFunctionType;
    var init: string;
}
export default JsonFunctionStringLevel;
