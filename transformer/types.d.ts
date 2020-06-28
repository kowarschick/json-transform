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
export declare function isJsonPrimitive(value: JsonValue): value is JsonPrimitive;
export declare function isJsonArray(value: JsonValue): value is JsonArray;
export declare function isJsonObject(value: JsonValue): value is JsonObject;
export declare function isJsonString(value: JsonValue): value is JsonString;
export declare function isJsonNumber(value: JsonValue): value is JsonNumber;
export declare function isJsonBoolean(value: JsonValue): value is JsonBoolean;
export declare function isJsonNull(value: JsonValue): value is JsonNull;
export declare type JsonFunctionParameters<T extends JsonValue = JsonValue> = {
    value: T;
    level: number;
    data: Data;
    init?: Init;
};
export declare type JsonFunction<T extends JsonValue = JsonValue> = {
    (_: JsonFunctionParameters<T>): JsonValue;
    type?: JsonType;
    name?: string;
    init?: Init;
};
export interface JsonFunctionDescriptor<T extends JsonValue = JsonValue> {
    function: (_: JsonFunctionParameters<T>) => JsonValue;
    type: JsonType;
    name: string;
    init?: Init;
}
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
export declare function isJsonValue(value: JsonValue | JsonFunction | null): value is JsonValue;
export declare function isJsonFunction(value: JsonValue | JsonFunction | null): value is JsonFunction;
export interface Data {
    [key: string]: JsonValue | JsonFunction | null;
}
export declare function isRegExp(value: Object | RegExp | JsonString | JsonNumber | JsonBoolean | JsonNull): value is RegExp;
export interface Init {
    [key: string]: Object | RegExp | JsonString | JsonNumber | JsonBoolean | JsonNull;
}
