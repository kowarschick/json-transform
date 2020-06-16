export declare type JsonString = string;
export declare type JsonNumber = number;
export declare type JsonBoolean = boolean;
export declare type JsonNull = null | undefined;
export declare type JsonPrimitive = (JsonString | JsonNumber | JsonBoolean | JsonNull);
export declare type JsonArray = JsonValue[];
export declare type JsonMap = {
    [key: string]: JsonValue;
};
export declare type JsonValue = JsonPrimitive | JsonArray | JsonMap;
export declare enum EnumJsonFunctionType {
    JsonPrimitive = 1,
    JsonArray = 2,
    JsonMap = 3,
    JsonString = 4,
    JsonNumber = 5,
    JsonBoolean = 6,
    JsonNull = 7
}
export declare type JsonFunctionParameters<T extends JsonValue = JsonValue> = {
    value: T;
    data: Data;
    level: number;
};
export declare type JsonFunction<T extends JsonValue = JsonValue> = {
    (_: JsonFunctionParameters<T>): JsonValue;
    type?: EnumJsonFunctionType;
    init?: any;
};
export interface JsonTransformerProperties {
    readonly transformerJsonPrimitiveBefore: JsonFunction<JsonArray> | null;
    readonly transformerJsonArrayBefore: JsonFunction<JsonArray> | null;
    readonly transformerJsonMapBefore: JsonFunction<JsonMap> | null;
    readonly transformerJsonStringBefore: JsonFunction<JsonString> | null;
    readonly transformerJsonNumberBefore: JsonFunction<JsonNumber> | null;
    readonly transformerJsonBooleanBefore: JsonFunction<JsonBoolean> | null;
    readonly transformerJsonNullBefore: JsonFunction<JsonNull> | null;
    transformerPipe: JsonFunction;
    readonly transformerJsonPrimitiveAfter: JsonFunction<JsonArray> | null;
    readonly transformerJsonArrayAfter: JsonFunction<JsonArray> | null;
    readonly transformerJsonMapAfter: JsonFunction<JsonMap> | null;
    readonly transformerJsonStringAfter: JsonFunction<JsonString> | null;
    readonly transformerJsonNumberAfter: JsonFunction<JsonNumber> | null;
    readonly transformerJsonBooleanAfter: JsonFunction<JsonBoolean> | null;
    readonly transformerJsonNullAfter: JsonFunction<JsonNull> | null;
    readonly [key: string]: any;
}
export interface Data {
    [key: string]: JsonValue | JsonFunction | null;
}
