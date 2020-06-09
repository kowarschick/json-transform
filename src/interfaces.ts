/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

 import { JsonTransformer } from './transformer';

export type JsonValue     = JsonPrimitive | JsonMap | JsonArray ;
export type JsonPrimitive = string | number | boolean | null | undefined;
export type JsonMap       = {[key: string]: JsonValue};
export type JsonArray     = JsonValue[];

export interface Data 
{ [key: string]: JsonValue | JsonFunction | null; }

export type JsonTransformerProperties =
  { readonly init:        any,
    readonly data:        Data,
    readonly level:       number,
             transformer: JsonTransformer
  };

export type JsonTransformerParameters = Partial<JsonTransformerProperties>;

export type JsonTransformerString = { (value: string,    data: Data, level: number): JsonValue } | null;
export type JsonTransformerArray  = { (value: JsonArray, data: Data, level: number): JsonValue } | null;
export type JsonTransformerMap    = { (value: JsonMap,   data: Data, level: number): JsonValue } | null;

export type JsonFunctionParameters = 
  Partial<{ value: JsonValue,
            data:  Data,
            level: number
         }>;

export type JsonFunction = { (_: JsonFunctionParameters): JsonValue };

