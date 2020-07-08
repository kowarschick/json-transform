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
 * @description
 *   <code>&lt;T extends JsonValue = JsonValue&gt;</code>
 * @typedef {{value: T, level: number, data: Data, init: Init, rename: Function}} JsonFunctionParameters
 * @property {JsonValue} value
 *   The JSON value to be transformed.
 * @property {number} level
 *   The current level of <code>value</code> within the JSON value that has been passed to 
 *   the root transformer.
 * @property {Data} data
 *   A data object the members of which can be used by transformers to replace
 *   or compute certain JSON values.
 * @property {?Init} init
 *   An initialization value that has been passed to a transformer to initialize
 *   the JSON function it calls.
 * @property {?Function} rename 
 *   A function <code>(_: string) => string</code> that replaces a standard attribute
 *   name by a new name (which has been passed to the transformer that calls the
 *   JSON function)
*/

/** 
 * @global 
 * @description
 *   <code>&lt;T extends JsonValue = JsonValue&gt;</code>
 *   <p>
 *   A JSON function can be passed via the <code>data: {@link Data}</code> 
 *   parameter passed to json transformers and other json functions to support
 *   them in the transformation.
 * @callback JsonFunction
 * @param    {JsonFunctionParameters} _
 * @param    {JsonValue} _.value  see {@link JsonFunctionParameters}
 * @param    {number}    _.level  see {@link JsonFunctionParameters}
 * @param    {Data}      _.data   see {@link JsonFunctionParameters}
 * @param    {?Init}     _.init   see {@link JsonFunctionParameters}
 * @param    {?Function} _.init   see {@link JsonFunctionParameters}
 * @returns  {JsonValue}
 */

/**
 * @global 
 * @interface   Data 
 * @description 
 *   To JSON transformers and to JSON transformer functions
 *   data objects can be passed. The keys of those data objects
 *   must be strings, the values either JSON values ({@Link JsonValue}),
 *   JSON functions ({@Link JsonFunction}) or JSON value functions
 *   ({@Link JsonValueFunction}). Those values are nullable.
 * @property {(JsonValue|JsonFunction|JsonValueFunction)} [key: string]
 */