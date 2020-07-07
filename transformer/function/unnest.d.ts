import { JsonArray, JsonValue } from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor } from '../types';
export declare function unnest({ value }: JsonFunctionParameters<JsonArray>, begin?: number): JsonValue;
export declare const JsonFunctionUnnest: JsonFunctionDescriptor;
export default JsonFunctionUnnest;
