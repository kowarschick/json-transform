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
{ JsonPrimitive = 1,
  JsonArray     = 2, 
  JsonMap       = 3,
  JsonString    = 4,
  JsonNumber    = 5,
  JsonBoolean   = 6,
  JsonNull      = 7
}

export type JsonFunctionParameters = 
{value: JsonValue, data: Data, level: number};

export type JsonFunction = 
{ (_: JsonFunctionParameters): JsonValue, 
  type?: EnumJsonFunctionType, 
  init?: any 
};

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
  type: EnumJsonFunctionType /* = EnumJsonFunctionType.JsonArray */, 
  init?: any  
}

export type JsonFunctionMapParameters = 
{value: JsonMap, data: Data, level: number};

export type JsonFunctionMap =
{ (_: JsonFunctionMapParameters): JsonValue, 
  type: EnumJsonFunctionType /* = EnumJsonFunctionType.JsonMap */, 
  init?: any  
}

/** @interface JsonTransformerProperties */
export interface JsonTransformerProperties
{ readonly init:        any,
  readonly data:        Data,
  readonly level:       number,
  
           transformer: JsonTransformer
         
  readonly transformerStringBefore:    JsonTransformerString | null;
  readonly transformerJsonArrayBefore: JsonTransformerArray  | null;
  readonly transformerJsonMapBefore:   JsonTransformerMap    | null;
          
  readonly transformerStringAfter:     JsonTransformerString | null;
  readonly transformerJsonArrayAfter:  JsonTransformerArray  | null;
  readonly transformerJsonMapAfter:    JsonTransformerMap    | null;

  readonly [key: string]: any; // to be able to 
};
            
export type JsonTransformerParameters = 
Partial<JsonTransformerProperties>;

export type JsonTransformerString = 
{ (_: JsonFunctionStringParameters): JsonValue };

export type JsonTransformerArray = 
{ (_: JsonFunctionArrayParameters):  JsonValue };

export type JsonTransformerMap =
{ (_: JsonFunctionMapParameters):    JsonValue };

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
