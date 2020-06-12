/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */
import { JsonTransformer } from './root';
export declare type JsonValue = JsonPrimitive | JsonArray | JsonMap | undefined;
export declare type JsonPrimitive = (string | number | boolean | null);
/**
 * @type    {JsonMap}
 * @typedef {Object<JsonValue>}
 */
export declare type JsonMap = {
    [key: string]: JsonValue;
};
/** @type {JsonArray} */
export declare type JsonArray = JsonValue[];
/** @Interface {Data} */
export interface Data {
    [key: string]: JsonValue | JsonFunction | null;
}
/** @enum */
export declare enum EnumJsonFunctionType {
    String = 1,
    Array = 2,
    Map = 3
}
/** @type {JsonFunctionParameters} */
export declare type JsonFunctionParameters = {
    value: JsonValue;
    data: Data;
    level: number;
};
/** @type {JsonFunctionParameters} */
export declare type JsonFunction = {
    (_: JsonFunctionParameters): JsonValue;
    type?: EnumJsonFunctionType;
    init?: any;
};
/** @type {JsonFunctionStringParameters} */
export declare type JsonFunctionStringParameters = {
    value: string;
    data: Data;
    level: number;
};
/** @type {JsonFunctionString} */
export declare type JsonFunctionString = {
    (_: JsonFunctionStringParameters): JsonValue;
    type: EnumJsonFunctionType;
    init: string;
};
/** @type {JsonFunctionArrayParameter} */
export declare type JsonFunctionArrayParameters = {
    value: JsonArray;
    data: Data;
    level: number;
};
/** @type {JsonFunctionArray} */
export declare type JsonFunctionArray = {
    (_: JsonFunctionArrayParameters): JsonValue;
    type: EnumJsonFunctionType;
    init: string;
};
/** @type {JsonFunctionMapParameters} */
export declare type JsonFunctionMapParameters = {
    value: JsonMap;
    data: Data;
    level: number;
};
/** @type {JsonFunctionMap} */
export declare type JsonFunctionMap = {
    (_: JsonFunctionMapParameters): JsonValue;
    type: EnumJsonFunctionType;
    init: string;
};
/** @type {JsonTransformerProperties} */
export declare type JsonTransformerProperties = {
    readonly init: any;
    readonly data: Data;
    readonly level: number;
    transformer: JsonTransformer;
};
/** @type {JsonTransformerParameters} */
export declare type JsonTransformerParameters = Partial<JsonTransformerProperties>;
/** @type {JsonTransformerString} */
export declare type JsonTransformerString = {
    (_: JsonFunctionStringParameters): JsonValue;
} | null;
/** @type {JsonTransformerArray} */
export declare type JsonTransformerArray = {
    (_: JsonFunctionArrayParameters): JsonValue;
} | null;
/** @type {JsonTransformerMap} */
export declare type JsonTransformerMap = {
    (_: JsonFunctionMapParameters): JsonValue;
} | null;
export {};
