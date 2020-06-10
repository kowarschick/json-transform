/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

import { JsonTransformer } from './root';

export type JsonValue     = JsonPrimitive | JsonMap | JsonArray ;
export type JsonPrimitive = string | number | boolean | null | undefined;
export type JsonMap       = {[key: string]: JsonValue};
export type JsonArray     = JsonValue[];

export interface Data 
{ [key: string]: JsonValue | JsonFunction | null; }

export enum EnumJsonFunctionType 
            { String = 1, 
              Array  = 2, 
              Map    = 3
            }

export type JsonFunctionParameters = 
            {value: JsonValue, data:  Data, level: number};
export type JsonFunction = 
            { (_: JsonFunctionParameters): JsonValue };

export type JsonFunctionStringParameters =
            {value: string, data: Data, level: number};
export type JsonFunctionString = 
            { (_: JsonFunctionStringParameters): JsonValue, 
              type: EnumJsonFunctionType /* = EnumJsonFunctionType.String */, 
              init?: any 
            }
export type JsonFunctionArrayParameters = 
            {value: JsonArray, data: Data, level: number};
export type JsonFunctionArray =
            { (_: JsonFunctionArrayParameters): JsonValue, 
              type: EnumJsonFunctionType /* = EnumJsonFunctionType.Array */, 
              init?: any 
            }

export type JsonFunctionMapParameters = 
            {value: JsonMap, data: Data, level: number};
export type JsonFunctionMap =
            { (_: JsonFunctionMapParameters): JsonValue, 
              type: EnumJsonFunctionType /* = EnumJsonFunctionType.Map */, 
              init?: any 
            }

export type JsonTransformerProperties =
            { readonly init:        any,
              readonly data:        Data,
              readonly level:       number,
                       transformer: JsonTransformer
            };

export type JsonTransformerParameters = 
            Partial<JsonTransformerProperties>;

export type JsonTransformerString = 
            { (_: JsonFunctionStringParameters): JsonValue } | null;
export type JsonTransformerArray = 
            { (_: JsonFunctionArrayParameters):  JsonValue } | null;
export type JsonTransformerMap =
            { (_: JsonFunctionMapParameters):    JsonValue } | null;
