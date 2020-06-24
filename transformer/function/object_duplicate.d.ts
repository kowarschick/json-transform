import { JsonObject, JsonType, JsonArray } from '../types';
import { JsonFunctionParameters } from '../types';
export declare function JsonFunctionObjectDuplicate({ value }: JsonFunctionParameters<JsonObject>): JsonArray | JsonObject;
export declare namespace JsonFunctionObjectDuplicate {
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
export default JsonFunctionObjectDuplicate;
