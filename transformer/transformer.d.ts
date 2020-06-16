import { JsonValue, JsonNull } from "./interfaces";
import { JsonFunctionParameters } from "./interfaces";
import { JsonTransformerProperties, Data } from "./interfaces";
export declare type JsonTransformerParameters = Partial<JsonTransformerProperties>;
export interface JsonTransformerInitProperties {
    readonly init: any;
    readonly data: Data;
    readonly level: number;
    transformer: JsonTransformer<JsonValue>;
}
export interface JsonTransformer<T extends JsonValue> extends JsonTransformerInitProperties, JsonTransformerProperties {
}
export declare class JsonTransformer<T extends JsonValue = JsonValue> {
    constructor({ init, data, level, transformer, }?: JsonTransformerParameters);
    private _root;
    get root(): JsonTransformer<JsonValue>;
    transformerPipe(_: JsonFunctionParameters): JsonValue;
    transform({ value, data, level }: Partial<JsonFunctionParameters<T>>): JsonValue;
    pipe(transformer: JsonTransformer): JsonTransformer;
    transformerJsonNullAfter(_: JsonFunctionParameters<JsonNull>): JsonValue;
}
export default JsonTransformer;
