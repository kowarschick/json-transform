import { JsonArray, JsonObject } from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor } from '../types';
export declare function sequence({ value, data, init, rename }: JsonFunctionParameters<JsonObject>): JsonArray;
export declare const JsonFunctionSequence: JsonFunctionDescriptor;
export default JsonFunctionSequence;
