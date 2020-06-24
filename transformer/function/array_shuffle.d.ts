import { JsonArray, JsonFunctionParameters, JsonType } from '../types';
export declare function shuffle(value: JsonArray, begin?: number): JsonArray;
export declare function JsonFunctionArrayShuffle({ value }: JsonFunctionParameters<JsonArray>): JsonArray;
export declare namespace JsonFunctionArrayShuffle {
    var type: JsonType;
    var init: {
        function: string;
    };
}
export default JsonFunctionArrayShuffle;
