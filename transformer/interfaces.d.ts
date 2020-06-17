export declare type JsonString = string;
export declare type JsonNumber = number;
export declare type JsonBoolean = boolean;
export declare type JsonNull = null | undefined;
export declare type JsonPrimitive = (JsonString | JsonNumber | JsonBoolean | JsonNull);
export declare type JsonArray = JsonValue[];
export declare type JsonObject = {
    [key: string]: JsonValue;
};
export declare type JsonValue = JsonPrimitive | JsonArray | JsonObject;
export declare enum EJsonType {
    Primitive = 1,
    Array = 2,
    Object = 3,
    String = 4,
    Number = 5,
    Boolean = 6,
    Null = 7
}
export declare type JsonFunctionParameters<T extends JsonValue = JsonValue> = {
    value: T;
    data: Data;
    level: number;
};
export declare type JsonFunction<T extends JsonValue = JsonValue> = {
    (_: JsonFunctionParameters<T>): JsonValue;
    type?: EJsonType;
    init?: any;
};
export interface JsonTransformerProperties {
    readonly transformerJsonPrimitive: JsonFunction<JsonPrimitive> | null;
    readonly transformerJsonArray: JsonFunction<JsonArray> | null;
    readonly transformerJsonObject: JsonFunction<JsonObject> | null;
    readonly transformerJsonString: JsonFunction<JsonString> | null;
    readonly transformerJsonNumber: JsonFunction<JsonNumber> | null;
    readonly transformerJsonBoolean: JsonFunction<JsonBoolean> | null;
    readonly transformerJsonNull: JsonFunction<JsonNull> | null;
    transformerPipe: JsonFunction;
    readonly transformerJsonPrimitiveAfter: JsonFunction<JsonPrimitive> | null;
    readonly transformerJsonArrayAfter: JsonFunction<JsonArray> | null;
    readonly transformerJsonObjectAfter: JsonFunction<JsonObject> | null;
    readonly transformerJsonStringAfter: JsonFunction<JsonString> | null;
    readonly transformerJsonNumberAfter: JsonFunction<JsonNumber> | null;
    readonly transformerJsonBooleanAfter: JsonFunction<JsonBoolean> | null;
    readonly transformerJsonNullAfter: JsonFunction<JsonNull> | null;
    readonly [key: string]: any;
}
export interface Data {
    [key: string]: JsonValue | JsonFunction | null;
}
