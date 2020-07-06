import { JsonObject, JsonType } from '../types';
import { JsonFunctionParameters } from '../types';
export declare function JsonFunctionRandom({ value, data }: JsonFunctionParameters<JsonObject>): number | JsonObject;
export declare namespace JsonFunctionRandom {
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
export default JsonFunctionRandom;
