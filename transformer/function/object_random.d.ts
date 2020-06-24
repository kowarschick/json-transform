import { JsonObject, JsonType } from '../types';
import { JsonFunctionParameters } from '../types';
export declare function JsonFunctionObjectRandom({ value, data }: JsonFunctionParameters<JsonObject>): number | JsonObject;
export declare namespace JsonFunctionObjectRandom {
    var type: JsonType;
    var init: {
        function: string;
        minAttr: string;
        min: number;
        maxAttr: string;
        max: number;
        isIntegerAttr: string;
        isInteger: boolean;
        scaleAttr: string;
        scale: null;
        gzpAttr: string;
        gzp: number;
    };
}
export default JsonFunctionObjectRandom;
