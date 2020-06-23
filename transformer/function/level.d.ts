import { JsonString, JsonFunctionParameters, JsonType } from '../types';
export declare function JsonFunctionLevel({ value, level }: JsonFunctionParameters<JsonString>): string | number;
export declare namespace JsonFunctionLevel {
    var type: JsonType;
    var init: {
        function: string;
    };
}
export default JsonFunctionLevel;
