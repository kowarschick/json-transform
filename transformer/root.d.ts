import { JsonValue } from "./interfaces";
import { JsonFunctionParameters } from "./interfaces";
import { JsonTransformerProperties, JsonTransformerParameters } from "./interfaces";
import { JsonTransformerString, JsonTransformerArray, JsonTransformerMap } from "./interfaces";
export interface JsonTransformer extends JsonTransformerProperties {
}
export declare class JsonTransformer {
    constructor({ init, data, level, transformer, }?: JsonTransformerParameters);
    private _root;
    get root(): JsonTransformer;
    protected readonly transformStringBefore: JsonTransformerString;
    protected readonly transformArrayBefore: JsonTransformerArray;
    protected readonly transformMapBefore: JsonTransformerMap;
    protected transformPipe(_: JsonFunctionParameters): JsonValue;
    protected readonly transformStringAfter: JsonTransformerString;
    protected readonly transformArrayAfter: JsonTransformerArray;
    protected readonly transformMapAfter: JsonTransformerMap;
    transform({ value, data, level }: Partial<JsonFunctionParameters>): JsonValue;
    pipe(transformer: JsonTransformer): JsonTransformer;
}
export default JsonTransformer;
