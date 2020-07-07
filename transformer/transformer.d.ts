import { Init, Data } from "./types";
import { JsonFunction, JsonFunctionParameters } from "./types";
import { JsonPrimitive, JsonArray, JsonObject, JsonString, JsonNumber, JsonBoolean, JsonNull, JsonValue } from "./types";
export declare type JsonTransformerParameters = {
    init?: Init;
    data?: Data;
    rename?: Record<string, string>;
};
export interface JsonTransformer {
    readonly [key: string]: any;
}
export declare class JsonTransformer {
    constructor({ init, data, rename }?: JsonTransformerParameters);
    protected initialize(): void;
    private v_root;
    private readonly v_name;
    private readonly v_init_root;
    private readonly v_data;
    private readonly v_rename;
    private readonly v_rename_reverse;
    private readonly v_transformer_tests;
    private merge;
    protected init: Init;
    protected rename(name: string): string;
    protected rerename(name: string): string;
    protected functionName(value: JsonArray | JsonObject): string | null;
    protected isFunctionName(name: string, value: JsonArray | JsonObject): boolean;
    protected arrayFunctionValue(name: string, value: JsonObject): JsonArray | null;
    private _pipe_tail;
    private _pipe_transformers;
    pipe(...transformers: JsonTransformer[]): this;
    protected readonly transformerJsonPrimitive: JsonFunction<JsonPrimitive> | null;
    protected readonly transformerJsonArray: JsonFunction<JsonArray> | null;
    protected readonly transformerJsonObject: JsonFunction<JsonObject> | null;
    protected readonly transformerJsonString: JsonFunction<JsonString> | null;
    protected readonly transformerJsonNumber: JsonFunction<JsonNumber> | null;
    protected readonly transformerJsonBoolean: JsonFunction<JsonBoolean> | null;
    protected readonly transformerJsonNull: JsonFunction<JsonNull> | null;
    protected transformerPipe(_: JsonFunctionParameters): JsonValue;
    transform({ value, data, level }: Partial<JsonFunctionParameters<JsonValue>>): JsonValue;
}
export default JsonTransformer;
