import { JsonValue } from './interfaces';
import { JsonFunctionParameters } from './interfaces';
import { JsonTransformerTraversal } from './traversal';
import { JsonTransformerParameters } from './transformer';
export declare class JsonTransformerTraversalRestricted extends JsonTransformerTraversal {
    constructor(_?: JsonTransformerParameters);
    transformerPipe(_: JsonFunctionParameters): JsonValue;
}
export default JsonTransformerTraversalRestricted;
