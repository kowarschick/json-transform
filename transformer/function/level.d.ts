import { JsonString, JsonFunctionParameters, JsonType } from '../interfaces';
export declare function JsonFunctionLevel({ value, level }: JsonFunctionParameters<JsonString>): string | number;
export declare namespace JsonFunctionLevel {
    var type: JsonType;
    var init: string;
}
export default JsonFunctionLevel;
