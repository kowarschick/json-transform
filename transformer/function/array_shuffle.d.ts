import { JsonArray, JsonFunctionParameters, JsonType } from '../types';
export declare function shuffle(value: JsonArray, begin?: number): JsonArray;
export declare function JsonFunctionShuffle({ value }: JsonFunctionParameters<JsonArray>): JsonArray;
export declare namespace JsonFunctionShuffle {
    var type: JsonType;
    var init: {
        function: string;
    };
}
export default JsonFunctionShuffle;
