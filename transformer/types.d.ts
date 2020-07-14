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
export interface JsonFunctionParameters<T extends JsonValue = JsonValue> {
    value: T;
    level: number;
    data: Data;
    init?: Init;
    rename?: (name: string) => string;
}
export declare type JsonFunction<T extends JsonValue = JsonValue> = (_: JsonFunctionParameters<T>) => JsonValue;
export declare type JsonValueFunction<T extends JsonValue = JsonValue> = (_: T) => JsonValue;
export interface JsonFunctionDescriptorCommon {
    name: JsonString;
    type: JsonType;
    init?: Record<JsonString, Init>;
    rename?: (name: JsonString) => JsonString;
}
export interface JsonFunctionDescriptorArray extends JsonFunctionDescriptorCommon {
    type: JsonType.Array;
    function: (_: JsonFunctionParameters<JsonArray>, begin: number) => JsonValue;
}
export interface JsonFunctionDescriptorObject extends JsonFunctionDescriptorCommon {
    type: JsonType.Object;
    function: JsonFunction<JsonObject>;
}
export interface JsonFunctionDescriptorString extends JsonFunctionDescriptorCommon {
    type: JsonType.String;
    function: (_: JsonFunctionParameters<JsonString>) => JsonValue;
}
export declare type JsonFunctionDescriptor = JsonFunctionDescriptorArray | JsonFunctionDescriptorObject | JsonFunctionDescriptorString;
export declare type Init = any;
export interface InitMap {
    [key: string]: Init;
}
export interface Data {
    [key: string]: JsonValue | JsonFunction | JsonValueFunction;
}
export declare function isJsonString(value: JsonValue | JsonFunction | RegExp | Init): value is JsonString;
export declare function isJsonNumber(value: JsonValue | JsonFunction | RegExp | Init): value is JsonNumber;
export declare function isJsonBoolean(value: JsonValue | JsonFunction | RegExp | Init): value is JsonBoolean;
export declare function isJsonNull(value: JsonValue | JsonFunction | RegExp | Init): value is JsonNull;
export declare function isJsonPrimitive(value: JsonValue | JsonFunction | RegExp | Init): value is JsonPrimitive;
export declare function isJsonArray(value: JsonValue | JsonFunction | RegExp | Init): value is JsonArray;
export declare function isJsonObject(value: JsonValue | JsonFunction | RegExp | Init): value is JsonObject;
export declare function isJsonValue(value: JsonValue | JsonFunction | RegExp | Init): value is JsonValue;
export declare function isJsonFunction(value: JsonValue | JsonFunction | RegExp | Init): value is JsonFunction;
export declare function isRegExp(value: JsonValue | JsonFunction | RegExp | Init): value is RegExp;
export declare function isInitMap(value: Init): value is InitMap;
