import { JsonArray, JsonMap } from './interfaces';
import { JsonFunction } from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerTraversal extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    transformerJsonArrayAfter: JsonFunction<JsonArray>;
    transformerJsonMapAfter: JsonFunction<JsonMap>;
}
export default JsonTransformerTraversal;
