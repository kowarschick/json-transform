import { JsonString, JsonFunctionParameters, JsonType } from '../interfaces';
export declare function JsonFunctionStringLevel({ value, level }: JsonFunctionParameters<JsonString>): string | number;
export declare namespace JsonFunctionStringLevel {
    var type: JsonType;
    var init: string;
}
export default JsonFunctionStringLevel;
