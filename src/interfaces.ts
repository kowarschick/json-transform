/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonTransformer } from './root';

export type JsonString    = string;
export type JsonNumber    = number;
export type JsonBoolean   = boolean;
export type JsonNull      = null | undefined;

export type JsonPrimitive = (JsonString | JsonNumber | JsonBoolean | JsonNull);
export type JsonArray     = JsonValue[];
export type JsonMap       = {[key: string]: JsonValue};

export type JsonValue     = JsonPrimitive | JsonArray | JsonMap ;

export enum EnumJsonFunctionType 
{ JsonPrimitive = 1,
  JsonArray     = 2, 
  JsonMap       = 3,
  JsonString    = 4,
  JsonNumber    = 5,
  JsonBoolean   = 6,
  JsonNull      = 7
}

export type JsonFunctionParameters<T extends JsonValue = JsonValue> = 
{value: T, data: Data, level: number};

export type JsonFunction<T extends JsonValue = JsonValue> = 
{ (_: JsonFunctionParameters<T>): JsonValue, 
  type?: EnumJsonFunctionType, 
  init?: any 
};

/** @interface JsonTransformerProperties */
export interface JsonTransformerProperties 
{ readonly init:        any,
  readonly data:        Data,
  readonly level:       number,
  
           transformer: JsonTransformer<JsonValue>
         
  readonly transformerJsonArrayBefore:  JsonFunction<JsonArray>  | null;
  readonly transformerJsonMapBefore:    JsonFunction<JsonMap>    | null;
  readonly transformerJsonStringBefore: JsonFunction<JsonString> | null;
          
  readonly transformerJsonArrayAfter:   JsonFunction<JsonArray>  | null;
  readonly transformerJsonMapAfter:     JsonFunction<JsonMap>    | null;
  readonly transformerJsonStringAfter:  JsonFunction<JsonString> | null;
  
  readonly [key: string]: any; // to be able to access JsonTransformer properties dynamically
};
            
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
