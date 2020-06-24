import { JsonString, JsonFunctionParameters, JsonType } from '../types';
export declare function JsonFunctionStringLevel({ value, level }: JsonFunctionParameters<JsonString>): string | number;
export declare namespace JsonFunctionStringLevel {
    var type: JsonType;
    var init: {
        function: string;
    };
}
export default JsonFunctionStringLevel;
