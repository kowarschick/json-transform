import { JsonArray, JsonType } from '../types';
import { JsonFunctionParameters } from '../types';
export declare function unnest(value: JsonArray, begin?: number): JsonArray;
export declare function JsonFunctionArrayUnnest({ value }: JsonFunctionParameters<JsonArray>): JsonArray;
export declare namespace JsonFunctionArrayUnnest {
    var type: JsonType;
    var init: {
        function: string;
    };
}
export default JsonFunctionArrayUnnest;
