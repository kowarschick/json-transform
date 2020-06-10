import { JsonFunctionStringParameters, EnumJsonFunctionType } from '~/interfaces';
export declare function JsonFunctionStringLevel({ value, level }: JsonFunctionStringParameters): string | number;
export declare namespace JsonFunctionStringLevel {
    var type: EnumJsonFunctionType;
    var init: string;
}
export default JsonTransformerStringLevel;
