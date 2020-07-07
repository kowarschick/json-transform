import { JsonArray, JsonValue } from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor } from '../types';
export declare function some({ value }: JsonFunctionParameters<JsonArray>, begin?: number): JsonValue;
export declare const JsonFunctionSome: JsonFunctionDescriptor;
export default JsonFunctionSome;
