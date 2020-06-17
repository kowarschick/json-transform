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
export declare enum JsonType {
    Primitive = 1,
    Array = 2,
    Object = 3,
    String = 4,
    Number = 5,
    Boolean = 6,
    Null = 7
}
export declare enum DoIt {
    Before = 1,
    After = 2,
    Twice = 3
}
export declare type JsonFunctionParameters<T extends JsonValue = JsonValue> = {
    value: T;
    data: Data;
    level: number;
};
export declare type JsonFunction<T extends JsonValue = JsonValue> = {
    (_: JsonFunctionParameters<T>): JsonValue;
    type?: JsonType;
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
    readonly [key: string]: any;
}
export interface Data {
    [key: string]: JsonValue | JsonFunction | null;
}
