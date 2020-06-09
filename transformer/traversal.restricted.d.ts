import { Data, JsonValue } from './interfaces';
import { JsonTransformerParameters, JsonTransformerArray, JsonTransformerMap } from './interfaces';
import { JsonTransformer } from './root';
export declare class JsonTransformerTraversalRestricted extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    protected pipe(value: JsonValue, data: Data, level: number): JsonValue;
    protected transformArrayAfter: JsonTransformerArray;
    protected transformMapAfter: JsonTransformerMap;
}
export default JsonTransformerTraversalRestricted;
