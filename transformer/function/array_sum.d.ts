import { JsonArray, JsonFunctionParameters, EnumJsonFunctionType } from '../interfaces';
export declare function JsonFunctionArraySum({ value }: JsonFunctionParameters<JsonArray>): import("../interfaces").JsonValue;
export declare namespace JsonFunctionArraySum {
    var type: EnumJsonFunctionType;
    var init: string;
}
export default JsonFunctionArraySum;