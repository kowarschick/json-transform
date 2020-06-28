import { JsonType, JsonArray, JsonValue, JsonFunctionParameters } from '../types';
export declare function some(value: JsonArray, begin?: number): JsonValue;
export declare function JsonFunctionSome({ value, init }: JsonFunctionParameters<JsonArray>): JsonValue;
export declare namespace JsonFunctionSome {
    var type: JsonType;
    var name: string;
}
export default JsonFunctionSome;
