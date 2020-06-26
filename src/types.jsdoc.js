/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */ 

/*
 * As @typedef declarations stated within a .ts-file are ignored, 
 * the typedefs are stated in this .js-file.
 * 
 * The real typescript definitions can be found in the file 
 * .ts. 
 */

/** 
 * @global
 * @typedef {string} JsonString 
 * @description 
 *   <code>JsonString</code> is an alias for <code>string</code>; 
 */

/** 
 * @global
 * @typedef {string} JsonNumber 
 * @description 
 *   <code>JsonNumber</code> is an alias for <code>number</code>; 
 */

/**
 * @global 
 * @typedef {string} JsonBoolean 
 * @description 
 *   <code>JsonBoolean</code> is an alias for <code>boolean</code>; 
 */

/**
 * @global 
 * @typedef {string} JsonNull 
 * @description 
 *   <code>JsonNull</code> is an alias for <code>null | undefined</code>; 
 *   <p>
 *   <code>undefined</code> is no regular JSON value. But it is needed
 *   to be able to uses optional parameters within the JSON transformers.
 */

/**
 * @global
 * @typedef {(JsonString | JsonNumber | JsonBoolean | JsonNull)} JsonPrimitive 
 * @description
 *   A primitive JSON value is either a sring, a number, a boolean, 
 *   or <code>null</code>/<code>undefined</code>.
 */

/**
 * @global 
 * @typedef {(JsonPrimitive|JsonArray|JsonObject)} JsonValue
 * @description 
 *   A JSON value is either a primitive value 
 *   ({@link JsonPrimitive}), or 
 *   an array of JSON values ({@link JsonArray}) or a
 *   map object the members of which consist of a key string
 *   and a JSON value ({@link JsonObject}) 
 *   <p>
 */

/**
 * @global
 * @typedef {Array<JsonValue>} JsonArray 
 * @description
 *   A JSON array is an array of JSON values.
 */

/** 
 * @global 
 * @typedef {{KEY: JsonValue}} JsonObject 
 * @description
 *   A JSON map is an object whose whose attributes are key/value-pairs,
 *   where the key is a string and the value is a JsonValue.
 *   <code>KEY</code> denotes <code>[key: string]</code>.
 */

/** 
 * @global 
 * @description
 *   <code>&lt;T extends JsonValue = JsonValue&gt;</code>
 * @typedef {{value: T, data: Data, level: number}} JsonFunctionParameters
 * @property {JsonValue} value
 *   The JSON value to be transformed.
 * @property {Data} data
 *   A data object the members of which can be used by transformers to replace
 *   or compute certain JSON values.
 * @property {number} level
 *   The current level of <code>value</code> within the JSON value passed to 
 *    the root transformer.
 */

/** 
 * @global 
 * @description
 *   <code>&lt;T extends JsonValue = JsonValue&gt;</code>
 *   <p>
 *   A JSON function can be passed via the <code>data: {@link Data}</code> 
 *   parameter passed to json transformers and other json functions to support
 *   them in the transformation.
 *   <p>
 *   As each JavaScript function is an <code>Object</code>, too, it may
 *   additionally have properties. There are two properties that are important
 *   for json functions:
 *   <ul>
 *   <li><code>readonly type?: {@link JsonType}</code></li>
 *   <li><code>readonly name?: string</code></li>
 *   </ul>
 *   <p>
 *   By means of the type property a transformer using a JSON function 
 *   can determine to which types of JSON values the helper function 
 *   can be applied.
 * @callback JsonFunction
 * @param    {JsonFunctionParameters} _
 * @param    {JsonValue} _.value  see {@link JsonFunctionParameters}
 * @param    {Data}      _.data   see {@link JsonFunctionParameters}
 * @param    {number}    _.level  see {@link JsonFunctionParameters}
 * @param    {Init}      _.init   see {@link JsonFunctionParameters}
 * @returns  {JsonValue}
 */

/**
 * @global 
 * @interface JsonTransformerProperties
 * @description
 * This interface defines all transformer properties 
 * that can be overridden in subclasses. You should never override
 * BOTH <code>transformerJsonPartialXXX</code> and some 
 * of the functions <code>transformerJsonStringXXX</code>,
 * <code>transformerJsonNumberXXX</code>, <code>transformerJsonBooleanXXX</code>,
 * or <code>transformerJsonNumberNull</code> within the same transformer.
 * @property { JsonFunction<JsonPrimitive> | null } transformerJsonPrimitive
 * @property { JsonFunction<JsonArray>     | null } transformerJsonArray
 * @property { JsonFunction<JsonObject>    | null } transformerJsonObject
 * @property { JsonFunction<JsonString>    | null } transformerJsonString
 * @property { JsonFunction<JsonNumber>    | null } transformerJsonNumber
 * @property { JsonFunction<JsonBoolean>   | null } transformerJsonBoolean
 * @property { JsonFunction<JsonNull>      | null } transformerJsonNull
 * @property { JsonFunction }                       transformerPipe invoke the child transformer
 * @property { JsonFunction<JsonPrimitive> | null } transformerJsonPrimitiveAfter
 * @property { JsonFunction<JsonArray>     | null } transformerJsonArrayAfter
 * @property { JsonFunction<JsonObject>    | null } transformerJsonObjectAfter
 * @property { JsonFunction<JsonString>    | null } transformerJsonStringAfter
 * @property { JsonFunction<JsonNumber>    | null } transformerJsonNumberAfter
 * @property { JsonFunction<JsonBoolean>   | null } transformerJsonBooleanAfter
 * @property { JsonFunction<JsonNull>      | null } transformerJsonNullAfter 
 */

/**
 * @global 
 * @interface   Data 
 * @description 
 *   To JSON transformers and to JSON transformer functions
 *   data objects can be passed. The keys of those data objects
 *   must be strings, the values either JSON values ({@Link JsonValue})
 *   or JSON functions ({@Link JsonFunction}). Those values are nullable.
 * @property {(JsonValue|JsonFunction|null)} [key: string]
 */