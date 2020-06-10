import { JsonValue } from './interfaces';
import { JsonFunctionParameters } from './interfaces';
import { JsonTransformerParameters } from './interfaces';
import { JsonTransformerTraversal } from './traversal';
export declare class JsonTransformerTraversalRestricted extends JsonTransformerTraversal {
    constructor(options?: JsonTransformerParameters);
    protected pipe(_: JsonFunctionParameters): JsonValue;
}
export default JsonTransformerTraversalRestricted;
