import { JsonObject, JsonNumber } from '../types';
import { JsonFunctionParameters, JsonFunctionDescriptor } from '../types';
export declare function random({ value, data, init, rename }: JsonFunctionParameters<JsonObject>): JsonNumber;
export declare const JsonFunctionRandom: JsonFunctionDescriptor;
export default JsonFunctionRandom;
