/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonTransformer } from './transformer';

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

/**
 *  @interface JsonTransformerProperties 
 *  @description
 *    This interface defines all transformer properties 
 *    that can be overridden in subclasses. You should never override
 *    BOTH <code>transformerJsonPartialXXX</code> and some 
 *    of the functions <code>transformerJsonStringXXX</code>,
 *    <code>transformerJsonNumberXXX</code>, <code>transformerJsonBooleanXXX</code>,
 *    or <code>transformerJsonNumberNull</code> within the same transformer.
 *  @property { JsonFunction<JsonPrimitive> | null } transformerJsonPrimitiveBefore
 *  @property { JsonFunction<JsonArray>     | null } transformerJsonArrayBefore
 *  @property { JsonFunction<JsonMap>       | null } transformerJsonMapBefore
 *  @property { JsonFunction<JsonString>    | null } transformerJsonStringBefore
 *  @property { JsonFunction<JsonNumber>    | null } transformerJsonNumberBefore
 *  @property { JsonFunction<JsonBoolean>   | null } transformerJsonBooleanBefore
 *  @property { JsonFunction<JsonNull>      | null } transformerJsonNullBefore
 *  @property { JsonFunction }                       transformerPipe invoke the child transformer
 *  @property { JsonFunction<JsonPrimitive> | null } transformerJsonPrimitiveAfter
 *  @property { JsonFunction<JsonArray>     | null } transformerJsonArrayAfter
 *  @property { JsonFunction<JsonMap>       | null } transformerJsonMapAfter
 *  @property { JsonFunction<JsonString>    | null } transformerJsonStringAfter
 *  @property { JsonFunction<JsonNumber>    | null } transformerJsonNumberAfter
 *  @property { JsonFunction<JsonBoolean>   | null } transformerJsonBooleanAfter
 *  @property { JsonFunction<JsonNull>      | null } transformerJsonNullAfter 
 */
export interface JsonTransformerProperties 
{ readonly transformerJsonPrimitiveBefore: JsonFunction<JsonArray>   | null;
  readonly transformerJsonArrayBefore:     JsonFunction<JsonArray>   | null;
  readonly transformerJsonMapBefore:       JsonFunction<JsonMap>     | null;
  readonly transformerJsonStringBefore:    JsonFunction<JsonString>  | null;
  readonly transformerJsonNumberBefore:    JsonFunction<JsonNumber>  | null;
  readonly transformerJsonBooleanBefore:   JsonFunction<JsonBoolean> | null;
  readonly transformerJsonNullBefore:      JsonFunction<JsonNull>    | null;
          
           transformerPipe:                JsonFunction;
  
  readonly transformerJsonPrimitiveAfter:  JsonFunction<JsonArray>   | null;
  readonly transformerJsonArrayAfter:      JsonFunction<JsonArray>   | null;
  readonly transformerJsonMapAfter:        JsonFunction<JsonMap>     | null;
  readonly transformerJsonStringAfter:     JsonFunction<JsonString>  | null;
  readonly transformerJsonNumberAfter:     JsonFunction<JsonNumber>  | null;
  readonly transformerJsonBooleanAfter:    JsonFunction<JsonBoolean> | null;
  readonly transformerJsonNullAfter:       JsonFunction<JsonNull>    | null;
 
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
