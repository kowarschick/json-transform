import { JsonString, JsonFunctionParameters, EJsonType } from '../interfaces';
export declare function JsonFunctionStringLevel({ value, level }: JsonFunctionParameters<JsonString>): string | number;
export declare namespace JsonFunctionStringLevel {
    var type: EJsonType;
    var init: string;
}
export default JsonFunctionStringLevel;
