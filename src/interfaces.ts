/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

export type JsonString    = string;
export type JsonNumber    = number;
export type JsonBoolean   = boolean;
export type JsonNull      = null | undefined;

export type JsonPrimitive = (JsonString | JsonNumber | JsonBoolean | JsonNull);
export type JsonArray     = JsonValue[];
export type JsonObject    = {[key: string]: JsonValue};
export type JsonValue     = JsonPrimitive | JsonArray | JsonObject ;

/**
 * This is a typescript enumaration type to distinguish the different 
 * types of JSON values ({@link JsonValue}). To access 
 * a value just type <code>EJsonType.String</code>,
 * or <code>EJsonType.Array</code> etc.
 * <p>
 * Values: <code>Primitive</code>, <code>Array</code>, <code>Object</code>, 
 *         <code>String</code>, <code>Number</code>, <code>Boolean</code>,
 *         <code>Null</code>
 */
export enum EJsonType 
{ Primitive = 1,
  Array     = 2, 
  Object    = 3,
  String    = 4,
  Number    = 5,
  Boolean   = 6,
  Null      = 7
}

export type JsonFunctionParameters<T extends JsonValue = JsonValue> = 
{value: T, data: Data, level: number};

export type JsonFunction<T extends JsonValue = JsonValue> = 
{ (_: JsonFunctionParameters<T>): JsonValue, 
  type?: EJsonType, 
  init?: any 
};

export interface JsonTransformerProperties 
{ readonly transformerJsonPrimitive: JsonFunction<JsonPrimitive> | null;
  readonly transformerJsonArray:     JsonFunction<JsonArray>     | null;
  readonly transformerJsonObject:    JsonFunction<JsonObject>       | null;
  readonly transformerJsonString:    JsonFunction<JsonString>    | null;
  readonly transformerJsonNumber:    JsonFunction<JsonNumber>    | null;
  readonly transformerJsonBoolean:   JsonFunction<JsonBoolean>   | null;
  readonly transformerJsonNull:      JsonFunction<JsonNull>      | null;
          
           transformerPipe:                JsonFunction;
  
  readonly transformerJsonPrimitiveAfter:  JsonFunction<JsonPrimitive> | null;
  readonly transformerJsonArrayAfter:      JsonFunction<JsonArray>     | null;
  readonly transformerJsonObjectAfter:     JsonFunction<JsonObject>       | null;
  readonly transformerJsonStringAfter:     JsonFunction<JsonString>    | null;
  readonly transformerJsonNumberAfter:     JsonFunction<JsonNumber>    | null;
  readonly transformerJsonBooleanAfter:    JsonFunction<JsonBoolean>   | null;
  readonly transformerJsonNullAfter:       JsonFunction<JsonNull>      | null;
 
  readonly [key: string]: any; // to be able to access JsonTransformer properties dynamically
};
            
export interface Data 
{ [key: string]: JsonValue | JsonFunction | null; }
