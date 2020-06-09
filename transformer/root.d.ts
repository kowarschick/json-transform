import { JsonValue } from "./interfaces";
import { JsonTransformerProperties, JsonTransformerParameters } from "./interfaces";
import { JsonTransformerString, JsonTransformerArray, JsonTransformerMap } from "./interfaces";
import { Data } from "./interfaces";
export interface JsonTransformer extends JsonTransformerProperties {
}
export declare class JsonTransformer {
    constructor({ init, data, level, transformer, }?: JsonTransformerParameters);
    private _root;
    get root(): JsonTransformer;
    protected readonly transformStringBefore: JsonTransformerString;
    protected readonly transformArrayBefore: JsonTransformerArray;
    protected readonly transformMapBefore: JsonTransformerMap;
    protected pipe(value: JsonValue, data: Data, level: number): JsonValue;
    protected readonly transformStringAfter: JsonTransformerString;
    protected readonly transformArrayAfter: JsonTransformerArray;
    protected readonly transformMapAfter: JsonTransformerMap;
    transform(value: JsonValue, data?: Data, level?: number): JsonValue;
    add(transformer: JsonTransformer): JsonTransformer;
}
export default JsonTransformer;
