import { JsonObject, JsonType } from '../types';
import { JsonFunctionParameters } from '../types';
export declare function JsonFunctionObjectCount({ value }: JsonFunctionParameters<JsonObject>): number | JsonObject;
export declare namespace JsonFunctionObjectCount {
    var type: JsonType;
    var init: {
        function: string;
        valueAttr: string;
    };
}
export default JsonFunctionObjectCount;
