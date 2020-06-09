import { JsonTransformer } from './root';
export declare type JsonValue = JsonPrimitive | JsonMap | JsonArray;
export declare type JsonPrimitive = string | number | boolean | null | undefined;
export declare type JsonMap = {
    [key: string]: JsonValue;
};
export declare type JsonArray = JsonValue[];
export interface Data {
    [key: string]: JsonValue | JsonFunction | null;
}
export declare type JsonTransformerProperties = {
    readonly init: any;
    readonly data: Data;
    readonly level: number;
    transformer: JsonTransformer;
};
export declare type JsonTransformerParameters = Partial<JsonTransformerProperties>;
export declare type JsonTransformerString = {
    (value: string, data: Data, level: number): JsonValue;
} | null;
export declare type JsonTransformerArray = {
    (value: JsonArray, data: Data, level: number): JsonValue;
} | null;
export declare type JsonTransformerMap = {
    (value: JsonMap, data: Data, level: number): JsonValue;
} | null;
export declare type JsonFunctionParameters = Partial<{
    value: JsonValue;
    data: Data;
    level: number;
}>;
export declare type JsonFunction = {
    (_: JsonFunctionParameters): JsonValue;
};
