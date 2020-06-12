/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

 import { JsonTransformer } from './root';

export type JsonValue = JsonPrimitive | JsonArray | JsonMap | undefined ;
export type JsonPrimitive = (string | number | boolean | null);
export type JsonMap = {[key: string]: JsonValue};
export type JsonArray = JsonValue[];

export enum EnumJsonFunctionType 
            { Other  = 0,
              String = 1, 
              Array  = 2, 
              Map    = 3
            }

export type JsonFunctionParameters = 
            {value: JsonValue, data: Data, level: number};

export type JsonFunction = 
            { (_: JsonFunctionParameters): JsonValue, 
              type?: EnumJsonFunctionType, 
              init?: any 
            };

/** @type {JsonFunctionStringParameters} */
export type JsonFunctionStringParameters =
            {value: string, data: Data, level: number};

/** @type {JsonFunctionString} */
export type JsonFunctionString = 
            { (_: JsonFunctionStringParameters): JsonValue, 
              type: EnumJsonFunctionType /* = EnumJsonFunctionType.String */, 
              init: string 
            }

/** @type {JsonFunctionArrayParameter} */
export type JsonFunctionArrayParameters = 
            {value: JsonArray, data: Data, level: number};
/** @type {JsonFunctionArray} */
export type JsonFunctionArray =
            { (_: JsonFunctionArrayParameters): JsonValue, 
              type: EnumJsonFunctionType /* = EnumJsonFunctionType.Array */, 
              init: string 
            }

/** @type {JsonFunctionMapParameters} */
export type JsonFunctionMapParameters = 
            {value: JsonMap, data: Data, level: number};

/** @type {JsonFunctionMap} */
export type JsonFunctionMap =
            { (_: JsonFunctionMapParameters): JsonValue, 
              type: EnumJsonFunctionType /* = EnumJsonFunctionType.Map */, 
              init: string 
            }

/** @type {JsonTransformerProperties} */
export type JsonTransformerProperties =
            { readonly init:        any,
              readonly data:        Data,
              readonly level:       number,
                       transformer: JsonTransformer
            };
            
/** @type {JsonTransformerParameters} */
export type JsonTransformerParameters = 
            Partial<JsonTransformerProperties>;

/** @type {JsonTransformerString} */
export type JsonTransformerString = 
            { (_: JsonFunctionStringParameters): JsonValue } | null;

/** @type {JsonTransformerArray} */
export type JsonTransformerArray = 
            { (_: JsonFunctionArrayParameters):  JsonValue } | null;

/** @type {JsonTransformerMap} */
export type JsonTransformerMap =
            { (_: JsonFunctionMapParameters):    JsonValue } | null;

/**
 * @interface   {Data} 
 * @description 
 *   To JSON transformers and to JSON transformer functions
 *   data objects can be passed. The keys of those data objects
 *   must be strings, the values either JSON values ({@Link JsonValue})
 *   or JSON functions ({@Link JsonFunction}). Those values are nullable.
 * @property {(JsonValue|JsonFunction|null)} [key: string]
 */
export interface Data 
{ [key: string]: JsonValue | JsonFunction | null; }
