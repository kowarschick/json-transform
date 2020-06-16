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
export type JsonMap       = {[key: string]: JsonValue};
export type JsonValue     = JsonPrimitive | JsonArray | JsonMap ;

/**
 * This is a typescript enumaration type to distinguish the different 
 * types of JSON values ({@link JsonValue}). To access 
 * a value just type <code>EnumJsonFunctionType.JsonString</code>,
 * or <code>EnumJsonFunctionType.JsonArray</code> etc.
 * <p>
 * Values: <code>JsonPrimitive</code>, <code>JsonArray</code>, <code>JsonMap</code>, 
 *         <code>JsonString</code>, <code>JsonNumber</code>, <code>JsonBoolean</code>,
 *         <code>JsonNull</code>
 */
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

export interface JsonTransformerProperties 
{ readonly transformerJsonPrimitiveBefore: JsonFunction<JsonPrimitive> | null;
  readonly transformerJsonArrayBefore:     JsonFunction<JsonArray>     | null;
  readonly transformerJsonMapBefore:       JsonFunction<JsonMap>       | null;
  readonly transformerJsonStringBefore:    JsonFunction<JsonString>    | null;
  readonly transformerJsonNumberBefore:    JsonFunction<JsonNumber>    | null;
  readonly transformerJsonBooleanBefore:   JsonFunction<JsonBoolean>   | null;
  readonly transformerJsonNullBefore:      JsonFunction<JsonNull>      | null;
          
           transformerPipe:                JsonFunction;
  
  readonly transformerJsonPrimitiveAfter:  JsonFunction<JsonPrimitive> | null;
  readonly transformerJsonArrayAfter:      JsonFunction<JsonArray>     | null;
  readonly transformerJsonMapAfter:        JsonFunction<JsonMap>       | null;
  readonly transformerJsonStringAfter:     JsonFunction<JsonString>    | null;
  readonly transformerJsonNumberAfter:     JsonFunction<JsonNumber>    | null;
  readonly transformerJsonBooleanAfter:    JsonFunction<JsonBoolean>   | null;
  readonly transformerJsonNullAfter:       JsonFunction<JsonNull>      | null;
 
  readonly [key: string]: any; // to be able to access JsonTransformer properties dynamically
};
            
export interface Data 
{ [key: string]: JsonValue | JsonFunction | null; }
