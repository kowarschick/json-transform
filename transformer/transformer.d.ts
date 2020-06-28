import { Init, Data } from "./types";
import { JsonValue } from "./types";
import { JsonFunctionParameters } from "./types";
import { JsonTransformerProperties } from "./types";
export interface JsonTransformerInitProperties {
    readonly init: Init;
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
}
export default JsonTransformer;
