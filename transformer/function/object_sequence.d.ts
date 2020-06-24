import { JsonObject, JsonType, JsonArray } from '../types';
import { JsonFunctionParameters } from '../types';
export declare function JsonFunctionObjectSequence({ value, data }: JsonFunctionParameters<JsonObject>): JsonArray | JsonObject;
export declare namespace JsonFunctionObjectSequence {
    var type: JsonType;
    var init: {
        function: string;
        minAttr: string;
        min: number;
        maxAttr: string;
        max: number;
        prefixAttr: string;
        prefix: null;
    };
}
export default JsonFunctionObjectSequence;
