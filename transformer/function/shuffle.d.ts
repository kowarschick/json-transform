import { JsonArray } from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor } from '../types';
export declare function shuffle({ value }: JsonFunctionParameters<JsonArray>, begin?: number): JsonArray;
export declare const JsonFunctionShuffle: JsonFunctionDescriptor;
export default JsonFunctionShuffle;
