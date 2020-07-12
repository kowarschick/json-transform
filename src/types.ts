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
 * 
 * Values: ```JsonType.Primitive```, ```JsonType.Array```, 
 *         ```JsonType.Object```, ```String.JsonType```, 
 *         ```JsonType.Number```, ```JsonType.Boolean```,
 *         ```JsonType.Null```
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

export type JsonFunctionParameters<T extends JsonValue = JsonValue> = 
{ value: T, level: number, data: Data, init?: Init, rename?: (name: string) => string }

export type JsonFunction<T extends JsonValue = JsonValue> = 
  (_: JsonFunctionParameters<T>) => JsonValue 

export type JsonValueFunction<T extends JsonValue = JsonValue> = 
  (_: T) => JsonValue 

type JsonFunctionDescriptorCommon =
{ name:    string,
  type:    JsonType,
  init?:   Record<string, Init>
  rename?: (name: string) => string
}

export type JsonFunctionDescriptorArray = 
  JsonFunctionDescriptorCommon &
  { type:     JsonType.Array,
    function: (_: JsonFunctionParameters<JsonArray>, begin: number) => JsonValue, 
  }

export type JsonFunctionDescriptorObject = 
  JsonFunctionDescriptorCommon &
  { type:     JsonType.Object,
    function: (_: JsonFunctionParameters<JsonObject>) => JsonValue, 
  } 
  
export type JsonFunctionDescriptorString = 
  JsonFunctionDescriptorCommon &
  { type:     JsonType.String,
    function: (_: JsonFunctionParameters<JsonString>) => JsonValue, 
  }  

export type JsonFunctionDescriptor = 
  JsonFunctionDescriptorArray  |
  JsonFunctionDescriptorObject | 
  JsonFunctionDescriptorString
  
export type Init =
  JsonValue | JsonFunction | JsonValueFunction | Function | JsonFunctionDescriptor[] | RegExp | Function | InitMap  

export interface InitMap 
{ [key: string]: Init }

export interface Data 
{ [key: string]: JsonValue | JsonFunction | JsonValueFunction }

/**
 * @param   {JsonValue|JsonFunction|RegExp|Init} value
 * @returns {boolean} 
 *          Returns ```true``` is ```value``` 
 *          is a member of ```{@link JsonString}```.
 */
export
function isJsonString(value: JsonValue|JsonFunction|RegExp|Init): value is JsonString
{ return typeof value === 'string'; }

/**
 * @param   {JsonValue|JsonFunction|RegExp|Init} value
 * @returns {boolean} 
 *          Returns ```true``` is ```value``` 
 *          is a member of ```{@link JsonNumber}```.
 */
export
function isJsonNumber(value: JsonValue|JsonFunction|RegExp|Init): value is JsonNumber
{ return Number.isFinite(value); }

/**
 * @param   {JsonValue|JsonFunction|RegExp|Init} value
 * @returns {boolean} 
 *          Returns ```true``` is ```value``` 
 *          is a member of ```{@link JsonBoolean}```.
 */
export
function isJsonBoolean(value: JsonValue|JsonFunction|RegExp|Init): value is JsonBoolean
{ return typeof value === 'boolean'; }

/**
 * @param   {JsonValue|JsonFunction|RegExp|Init} value
 * @returns {boolean} 
 *          Returns ```true``` is ```value``` 
 *          is a member of ```{@link JsonNull}```.
 */
export
function isJsonNull(value: JsonValue|JsonFunction|RegExp|Init): value is JsonNull
{ return value == null; }

/**
 * @param
 * @param   {JsonValue|JsonFunction|RegExp} value
 * @returns {boolean} 
 *          Returns ```true``` is ```value``` 
 *          is a member of ```{@link JsonPrimitive}```.
 */
export
function isJsonPrimitive(value:JsonValue|JsonFunction|RegExp|Init): value is JsonPrimitive 
{ const t = typeof value;
  return t == null || t === 'string' || t === 'number' || t === 'boolean'; 
}

/**
 * @param   {JsonValue|JsonFunction|RegExp|Init} value
 * @returns {boolean} 
 *          Returns ```true``` is ```value``` 
 *          is a member of ```{@link JsonArray}```.
 */
export
function isJsonArray(value: JsonValue|JsonFunction|RegExp|Init): value is JsonArray
{ return Array.isArray(value); }

/**
 * @param   {JsonValue|JsonFunction|RegExp|Init} value
 * @returns {boolean} 
 *          Returns ```true``` is ```value``` 
 *          is a member of ```{@link JsonObject}```.
 */
export
function isJsonObject(value: JsonValue|JsonFunction|RegExp|Init): value is JsonObject
{ return value != null && typeof value === 'object' && !Array.isArray(value); }

/**
 * @param   {JsonValue|JsonFunction|RegExp|Init} value
 * @returns {boolean} 
 *          Returns ```true``` is ```value``` 
 *          is a member of ```{@link JsonValue}```.
 */
export
function isJsonValue(value: JsonValue|JsonFunction|RegExp|Init): value is JsonValue
{ return value != null && typeof value !== 'function'; }

/**
 * @param   {JsonValue|JsonFunction|RegExp|Init} value
 * @returns {boolean} 
 *          Returns ```true``` is ```value``` 
 *          is a member of ```{@link JsonValue}```.
 */
export
function isJsonFunction(value: JsonValue|JsonFunction|RegExp|Init): value is JsonFunction
{ return value != null && typeof value === 'function'; }

/**
 * @param   {JsonValue|JsonFunction|RegExp|Init} value
 * @returns {boolean} 
 *          Returns ```true``` is ```value``` 
 *          is a member of ```{@link JsonValue}```.
 */
export
function isRegExp(value: JsonValue|JsonFunction|RegExp|Init): value is RegExp
{ return value instanceof RegExp; }

export
function isInitMap(value: Init): value is InitMap
{ return value != null && typeof value === 'object' && !Array.isArray(value); }

// TBD
/*
interface notAnArray 
{ forEach?: void }
*/
