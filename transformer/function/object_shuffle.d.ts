import { JsonObject, JsonType } from '../types';
import { JsonFunctionParameters } from '../types';
export declare function JsonFunctionObjectShuffle({ value }: JsonFunctionParameters<JsonObject>): import("../types").JsonArray | JsonObject;
export declare namespace JsonFunctionObjectShuffle {
    var type: JsonType;
    var init: {
        function: string;
        valueAttr: string;
    };
}
export default JsonFunctionObjectShuffle;
