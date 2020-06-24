import { JsonObject, JsonType } from '../types';
import { JsonFunctionParameters } from '../types';
export declare function JsonFunctionObjectUnnest({ value }: JsonFunctionParameters<JsonObject>): import("../types").JsonArray | JsonObject;
export declare namespace JsonFunctionObjectUnnest {
    var type: JsonType;
    var init: {
        function: string;
        valueAttr: string;
    };
}
export default JsonFunctionObjectUnnest;
