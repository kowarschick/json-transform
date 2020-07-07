import { JsonArray, JsonValue } from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor } from '../types';
export declare function count({ value }: JsonFunctionParameters<JsonArray>, begin?: number): JsonValue;
export declare const JsonFunctionCount: JsonFunctionDescriptor;
export default JsonFunctionCount;
