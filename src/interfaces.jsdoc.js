/**
 * @global
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L.J. Kowarschick
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
 * @typedef {string} JsonString 
 * @description 
 *   <code>JsonString</code> is an alias for <code>string</code>; 
 */

/** 
 * @typedef {string} JsonNumber 
 * @description 
 *   <code>JsonNumber</code> is an alias for <code>number</code>; 
 */

/** 
 * @typedef {string} JsonBoolean 
 * @description 
 *   <code>JsonBoolean</code> is an alias for <code>boolean</code>; 
 */

/** 
 * @typedef {string} JsonNull 
 * @description 
 *   <code>JsonNull</code> is an alias for <code>null | undefined</code>; 
 *   <p>
 *   <code>undefined</code> is no regular JSON value. But it is needed
 *   to be able to uses optional parameters within the JSON transformers.
 */

/**
 * @typedef {(JsonString | JsonNumber | JsonBoolean | JsonNull)} JsonPrimitive 
 * @description
 *   A primitive JSON value is either a sring, a number, a boolean, 
 *   or <code>null</code>/<code>undefined</code>.
 */

/** 
 * @typedef {(JsonPrimitive|JsonArray|JsonMap)} JsonValue
 * @description 
 *   A JSON value is either a primitive value 
 *   ({@link JsonPrimitive}), or 
 *   an array of JSON values ({@link JsonArray}) or a
 *   map object the members of which consist of a key string
 *   and a JSON value ({@link JsonMap}) 
 *   <p>
 */

/**
 * @typedef {Array<JsonValue>} JsonArray 
 * @description
 *   A JSON array is an array of JSON values.
 */

/** 
 * @typedef {{KEY: JsonValue}} JsonMap 
 * @description
 *   A JSON map is an object whose whose attributes are key/value-pairs,
 *   where the key is a string and the value is a JsonValue.
 *   <code>KEY</code> denotes <code>[key: string]</code>.
 */

 /** 
 * @typedef {JsonPrimitive | JsonArray | JsonMap | JsonString | JsonNumber | JsonBoolean | JsonNull} EnumJsonFunctionType  
 * @description
 *   This is a typescript enumaration type to distinguish the different 
 *   types of JSON values ({@link JsonValue}). To access 
 *   a value just type <code>EnumJsonFunctionType.JsonString</code>,
 *   or <code>EnumJsonFunctionType.JsonArray</code> etc.
 */

/** 
 * @description
 *   <code>&lt;T extends JsonValue = JsonValue&gt</code>
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
 * @description
 *   <code>&lt;T extends JsonValue = JsonValue&gt</code>
 *   <p>
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
 * @param    {JsonFunctionParameters} _
 * @param    {JsonValue} _.value  see {@link JsonFunctionParameters}
 * @param    {Data}      _.data   see {@link JsonFunctionParameters}
 * @param    {number}    _.level  see {@link JsonFunctionParameters}
 * @returns  {JsonValue}
 * 
 * @Xtypedef {(_: JsonFunctionParameters): JsonValue}    // Doen't work yet
 * @Xtypedef {(_: JsonFunctionParameters) => JsonValue}  // Doesn't work either
 * @Xtypedef {{ (_: JsonFunctionParameters): JsonValue}  // Nor this does work
 *              ?type: EnumJsonFunctionType, 
 *              ?init: any
 *           }} JsonFunction  
 */
