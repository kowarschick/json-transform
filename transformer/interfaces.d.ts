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
export declare enum EnumJsonFunctionType {
    String = 1,
    Array = 2,
    Map = 3
}
export declare type JsonFunctionParameters = {
    value: JsonValue;
    data: Data;
    level: number;
};
export declare type JsonFunction = {
    (_: JsonFunctionParameters): JsonValue;
};
export declare type JsonFunctionStringParameters = {
    value: string;
    data: Data;
    level: number;
};
export declare type JsonFunctionString = {
    (_: JsonFunctionStringParameters): JsonValue;
    type: EnumJsonFunctionType;
    init?: any;
};
export declare type JsonFunctionArrayParameters = {
    value: JsonArray;
    data: Data;
    level: number;
};
export declare type JsonFunctionArray = {
    (_: JsonFunctionArrayParameters): JsonValue;
    type: EnumJsonFunctionType;
    init?: any;
};
export declare type JsonFunctionMapParameters = {
    value: JsonMap;
    data: Data;
    level: number;
};
export declare type JsonFunctionMap = {
    (_: JsonFunctionMapParameters): JsonValue;
    type: EnumJsonFunctionType;
    init?: any;
};
export declare type JsonTransformerProperties = {
    readonly init: any;
    readonly data: Data;
    readonly level: number;
    transformer: JsonTransformer;
};
export declare type JsonTransformerParameters = Partial<JsonTransformerProperties>;
export declare type JsonTransformerString = {
    (_: JsonFunctionStringParameters): JsonValue;
} | null;
export declare type JsonTransformerArray = {
    (_: JsonFunctionArrayParameters): JsonValue;
} | null;
export declare type JsonTransformerMap = {
    (_: JsonFunctionMapParameters): JsonValue;
} | null;
