import { JsonArray, JsonValue } from '../types';
import { JsonFunctionParameters } from '../types';
export declare function aggregate({ value, init }: JsonFunctionParameters<JsonArray>, begin?: number): JsonValue;
export default aggregate;
