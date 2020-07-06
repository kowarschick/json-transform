import { JsonArray, JsonType } from '../types';
import { JsonFunctionParameters } from '../types';
export declare function unnest(value: JsonArray, begin?: number): JsonArray;
export declare function JsonFunctionUnnest({ value }: JsonFunctionParameters<JsonArray>): JsonArray;
export declare namespace JsonFunctionUnnest {
    var type: JsonType;
    var init: {
        function: string;
    };
}
export default JsonFunctionUnnest;
