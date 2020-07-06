import { JsonObject, JsonType, JsonArray } from '../types';
import { JsonFunctionParameters } from '../types';
export declare function JsonFunctionDuplicate({ value }: JsonFunctionParameters<JsonObject>): JsonArray | JsonObject;
export declare namespace JsonFunctionDuplicate {
    var type: JsonType;
    var init: {
        function: string;
        valueAttr: string;
        timesAttr: string;
        times: number;
        withinArrayAttr: string;
        withinArray: boolean;
    };
}
export default JsonFunctionDuplicate;
