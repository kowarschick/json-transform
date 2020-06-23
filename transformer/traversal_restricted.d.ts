import { JsonValue } from './types';
import { JsonFunctionParameters } from './types';
import { JsonTransformerTraversal } from './traversal';
import { JsonTransformerParameters } from './transformer';
export declare class JsonTransformerTraversalRestricted extends JsonTransformerTraversal {
    constructor(_?: JsonTransformerParameters);
    transformerPipe(_: JsonFunctionParameters): JsonValue;
}
export default JsonTransformerTraversalRestricted;
