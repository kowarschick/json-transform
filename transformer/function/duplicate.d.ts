import { JsonArray, JsonObject } from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor } from '../types';
export declare function duplicate({ value, init, rename }: JsonFunctionParameters<JsonObject>): JsonArray;
export declare const JsonFunctionDuplicate: JsonFunctionDescriptor;
export default JsonFunctionDuplicate;
