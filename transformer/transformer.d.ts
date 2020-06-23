import { Data } from "./types";
import { JsonValue } from "./types";
import { JsonFunctionParameters } from "./types";
import { JsonTransformerProperties } from "./types";
export interface JsonTransformerInitProperties {
    readonly init: any;
    readonly data: Data;
    readonly level: number;
}
export declare type JsonTransformerParameters = Partial<JsonTransformerInitProperties>;
export interface JsonTransformer extends JsonTransformerInitProperties, JsonTransformerProperties {
}
export declare class JsonTransformer {
    constructor({ init, data, level, }?: JsonTransformerParameters);
    private _root;
    get root(): JsonTransformer;
    private _pipe_transformers;
    transformerPipe(_: JsonFunctionParameters): JsonValue;
    transform({ value, data, level }: Partial<JsonFunctionParameters<JsonValue>>): JsonValue;
    pipe(...transformers: JsonTransformer[]): JsonTransformer;
    static isJsonPrimitive(value: JsonValue): boolean;
    static isJsonArray(value: JsonValue): boolean;
    static isJsonObject(value: JsonValue): boolean;
    static isJsonString(value: JsonValue): boolean;
    static isJsonNumber(value: JsonValue): boolean;
    static isJsonBoolean(value: JsonValue): boolean;
    static isJsonNull(value: JsonValue): boolean;
}
export default JsonTransformer;
