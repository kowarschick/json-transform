/**
 * @global
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */ 

/*
 * As better-docs ignores @typedef delarations stated within a
 * .ts-file, the typedefs are stated in this .js-file.
 * 
 * The real typescript definitions can be found in the file 
 * interfaces.ts. 
 */

/** 
 * @typedef {(JsonPrimitive|JsonArray|JsonMap|undefined)} JsonValue
 * @description 
 *   A JSON value is either a primitive value 
 *   ({@link JsonPrimitive}: string, number, boolean, or null), or 
 *   an array of JSON values ({@link JsonArray}) or a
 *   map object the members of which consist of a key string
 *   and a JSON value ({@link JsonMap}) 
 *   <p>
 *   <code>undefined</code> is no regular JSON value. But it is needed
 *   to be able to uses optional parameters within the JSON transformers.
 */

/**
 * @typedef {(string|number|boolean|null)} JsonPrimitive 
 * @description
 *   A primitive JSON value is either a sring, a number, aboolean, 
 *   or <code>null</code>.
 */

/**
 * @typedef {Array<JsonValue>} JsonArray 
 * @description
 *   A JSON array is an array of JSON values.
 */

/** 
 * @typedef {{key: JsonValue}} JsonMap 
 * @description
 *   A JSON map is an object whose whose attributes are key/value-pairs,
 *   where the key is a string and the value is a JasonValue..
 */

/** 
 * @typedef {String|Array|Map|Other} EnumJsonFunctionType  
 * @description
 *   This is a typescript enumaration type to distinguish the different 
 *   types of JSON values ({@link JsonValue}). To access 
 *   a value just type <code>EnumJsonFunctionType.String</code>,
 *   or <code>EnumJsonFunctionType.Array</code> etc.
 */

/** 
 * @typedef {{value: JsonValue, data: Data, level: number}} JsonFunctionParameters  
 */

/** 
 * @description
 *   A JSON function can be passed via the <code>data: {@link Data}</code> 
 *   parameter passed to json transformers and other json functions to support
 *   them in the transformation.
 *   <p>
 *   As each JavaScript function is an <code>Object</code>, too, it may
 *   additionally have properties. There are two properties that are important
 *   for json functions:
 *   <ul>
 *   <li><code>type?: {@link EnumJsonFunctionType}</code></li>
 *   <li><code>init?: any</code></li>
 *   </ul>
 *   <p>
 *   By means of the type property a transformer using a JSON function 
 *   can determine to which types of JSON values the helper function 
 *   can be applied.
 *   <p>
 *   The init parameter can be used to customize the function.
 * @callback JsonFunction
 * @param {JsonFunctionParameters} _
 * @param {JsonValue} _.value
 *   The JSON value to be transformed.
 * @param {Data} _.data
 *   A data object the members of which can be used by transformers to replace
 *   or compute certain JSON values.
 * @param {number} _.level
 *   The current level of <code>_.value</code>
 * @returns {JsonValue}
 *   The resulting JSON value.
 * 
 * @Xtypedef {(_: JsonFunctionParameters): JsonValue}    // Doen't work yet
 * @Xtypedef {(_: JsonFunctionParameters) => JsonValue}  // Doesn't work either
 * @Xtypedef {{ (_: JsonFunctionParameters): JsonValue}  // Nor does this work
 *              ?type: EnumJsonFunctionType, 
 *              ?init: any
 *           }} JsonFunction  
 */

/** 
 * @typedef {{value: string, data: Data, level: number}} JsonFunctionStringParameters  
 */

/** 
 * @description
 *   This is a special case of {@link JsonFunction}: <code>_.value</code> must be of
 *   type <code>string</code>, and <code>callback.init === EnumJsonFunctionType.String</code>
 * @callback JsonFunctionString
 * @param {JsonFunctionStringParameters} _
 * @returns {JsonValue}
 *   The resulting JSON value.  
 */