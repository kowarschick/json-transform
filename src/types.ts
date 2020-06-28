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
 * @param
 * @param   {JsonValue} value
 * @returns {boolean} 
 *          Returns <code>true</code> is <code>value</code> 
 *          is a member of <code>{@link JsonPrimitive}</code>.
 */
export
function isJsonPrimitive(value: JsonValue): value is JsonPrimitive 
{ const t = typeof value;
  return t == null || t === 'string' || t === 'number' || t === 'boolean'; 
}

/**
 * @param   {JsonValue} value
 * @returns {boolean} 
 *          Returns <code>true</code> is <code>value</code> 
 *          is a member of <code>{@link JsonArray}</code>.
 */
export
function isJsonArray(value: JsonValue): value is JsonArray
{ return Array.isArray(value); }

/**
 * @param   {JsonValue} value
 * @returns {boolean} 
 *          Returns <code>true</code> is <code>value</code> 
 *          is a member of <code>{@link JsonObject}</code>.
 */
export
function isJsonObject(value: JsonValue): value is JsonObject
{ return value != null && typeof value === 'object' && !Array.isArray(value); }

/**
 * @param   {JsonValue} value
 * @returns {boolean} 
 *          Returns <code>true</code> is <code>value</code> 
 *          is a member of <code>{@link JsonString}</code>.
 */
export
function isJsonString(value: JsonValue): value is JsonString
{ return typeof value === 'string'; }

/**
 * @param   {JsonValue} value
 * @returns {boolean} 
 *          Returns <code>true</code> is <code>value</code> 
 *          is a member of <code>{@link JsonNumber}</code>.
 */
export
function isJsonNumber(value: JsonValue): value is JsonNumber
{ return typeof value === 'number'; }

/**
 * @param   {JsonValue} value
 * @returns {boolean} 
 *          Returns <code>true</code> is <code>value</code> 
 *          is a member of <code>{@link JsonBoolean}</code>.
 */
export
function isJsonBoolean(value: JsonValue): value is JsonBoolean
{ return typeof value === 'boolean'; }

/**
 * @param   {JsonValue} value
 * @returns {boolean} 
 *          Returns <code>true</code> is <code>value</code> 
 *          is a member of <code>{@link JsonNull}</code>.
 */
export
function isJsonNull(value: JsonValue): value is JsonNull
{ return value == null; }

export type JsonFunctionParameters<T extends JsonValue = JsonValue> = 
{value: T, level: number, data: Data, init?: Init};

export type JsonFunction<T extends JsonValue = JsonValue> = 
{ (_: JsonFunctionParameters<T>): JsonValue, 
  type?: JsonType, 
  name?: string,
  init?: Init 
}

export interface JsonFunctionDescriptor<T extends JsonValue = JsonValue>
{ function: (_: JsonFunctionParameters<T>) => JsonValue, 
  type:     JsonType, 
  name:     string,
  init?:    Init
}

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
}
            
/**
 * @param   {JsonValue | JsonFunction | null} value
 * @returns {boolean} 
 *          Returns <code>true</code> is <code>value</code> 
 *          is a member of <code>{@link JsonValue}</code>.
 */
export
function isJsonValue(value: JsonValue | JsonFunction | null): value is JsonValue
{ return value != null && typeof value !== 'function'; }

/**
 * @param   {JsonValue | JsonFunction | null} value
 * @returns {boolean} 
 *          Returns <code>true</code> is <code>value</code> 
 *          is a member of <code>{@link JsonValue}</code>.
 */
export
function isJsonFunction(value: JsonValue | JsonFunction | null): value is JsonFunction
{ return value != null && typeof value === 'function'; }

export interface Data 
{ [key: string]: JsonValue | JsonFunction | null; }


/**
 * @param   {Object | RegExp | JsonString | JsonNumber | JsonBoolean | JsonNull} value
 * @returns {boolean} 
 *          Returns <code>true</code> is <code>value</code> 
 *          is a member of <code>{@link JsonValue}</code>.
 */
export
function isRegExp(value: Object | RegExp | JsonString | JsonNumber | JsonBoolean | JsonNull): value is RegExp
{ return value instanceof RegExp; }

export interface Init 
{ [key: string]: Object | RegExp | JsonString | JsonNumber | JsonBoolean | JsonNull ; }
