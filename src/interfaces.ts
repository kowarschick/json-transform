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
 * This is a enumaration type to distinguish the different 
 * types of JSON values ({@link JsonValue}).
 * <p>
 * Values: <code>JsonType.Primitive</code>, <code>JsonType.Array</code>, 
 *         <code>JsonType.Object</code>, <code>String.JsonType</code>, 
 *         <code>JsonType.Number</code>, <code>JsonType.Boolean</code>,
 *         <code>JsonType.Null</code>
 */
export enum JsonType 
{ Primitive = 1,
  Array     = 2, 
  Object    = 3,
  String    = 4,
  Number    = 5,
  Boolean   = 6,
  Null      = 7,
}

/**
 * This is a enumaration type to state when the local transformers
 * of a {@link JsonTransformers} should be applied.
 * <ul>
 *   <li><code>DoIt.Before</code>: before the transformer pipe</li>
 *   <li><code>DoIt.After</code>: after the transformer pipe</li>
 *   <li><code>DoIt.Twice</code>: before and after the transformer pipe</li>
 * </ul>
 */
export enum DoIt 
{ Before  = 1,
  After   = 2, 
  Twice   = 3,
}

export type JsonFunctionParameters<T extends JsonValue = JsonValue> = 
{value: T, data: Data, level: number};

export type JsonFunction<T extends JsonValue = JsonValue> = 
{ (_: JsonFunctionParameters<T>): JsonValue, 
  type?: JsonType, 
  init?: any 
};

export interface JsonTransformerProperties 
{ readonly transformerJsonPrimitive: JsonFunction<JsonPrimitive> | null;
  readonly transformerJsonArray:     JsonFunction<JsonArray>     | null;
  readonly transformerJsonObject:    JsonFunction<JsonObject>    | null;
  readonly transformerJsonString:    JsonFunction<JsonString>    | null;
  readonly transformerJsonNumber:    JsonFunction<JsonNumber>    | null;
  readonly transformerJsonBoolean:   JsonFunction<JsonBoolean>   | null;
  readonly transformerJsonNull:      JsonFunction<JsonNull>      | null;
          
           transformerPipe:          JsonFunction;

  readonly [key: string]: any; // to be able to access JsonTransformer properties dynamically
};
            
export interface Data 
{ [key: string]: JsonValue | JsonFunction | null; }
