import { JsonObject, JsonType, JsonArray } from '../types';
import { JsonFunctionParameters } from '../types';
export declare function JsonFunctionSequence({ value, data }: JsonFunctionParameters<JsonObject>): JsonArray | JsonObject;
export declare namespace JsonFunctionSequence {
    var type: JsonType;
    var init: {
        function: string;
        minAttr: string;
        min: number;
        maxAttr: string;
        max: number;
        formatAttr: string;
        format: null;
    };
}
export default JsonFunctionSequence;
