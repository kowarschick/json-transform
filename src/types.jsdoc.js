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
 *   ```JsonString``` is an alias for ```string```; 
 */

/** 
 * @global
 * @typedef {string} JsonNumber 
 * @description 
 *   ```JsonNumber``` is an alias for ```number```; 
 */

/**
 * @global 
 * @typedef {string} JsonBoolean 
 * @description 
 *   ```JsonBoolean``` is an alias for ```boolean```; 
 */

/**
 * @global 
 * @typedef {string} JsonNull 
 * @description 
 *   ```JsonNull``` is an alias for ```null | undefined```; 
 *   
 *   ```undefined``` is no regular JSON value. But it is needed
 *   to be able to uses optional parameters within the JSON transformers.
 */

/**
 * @global
 * @typedef {(JsonString | JsonNumber | JsonBoolean | JsonNull)} JsonPrimitive 
 * @description
 *   A primitive JSON value is either a sring, a number, a boolean, 
 *   or ```null```/```undefined```.
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
 *   ```KEY``` denotes ```[key: string]```.
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
 *   
 */

/** 
 * @global 
 * @description
 *   ```&lt;T extends JsonValue = JsonValue&gt;```
 * @typedef {{value: T, level: number, data: Data, init: Init, rename: Function}} JsonFunctionParameters
 * @property {JsonValue} value
 *   The JSON value to be transformed.
 * @property {number} level
 *   The current level of ```value``` within the JSON value that has been passed to 
 *   the root transformer.
 * @property {Data} data
 *   A data object the members of which can be used by transformers to replace
 *   or compute certain JSON values.
 * @property {?Init} init
 *   An initialization value that has been passed to a transformer to initialize
 *   the JSON function it calls.
 * @property {?Function} rename 
 *   A function ```(_: string) => string``` that replaces a standard attribute
 *   name by a new name (which has been passed to the transformer that calls the
 *   JSON function)
*/

/** 
 * @global 
 * @description
 *   ```&lt;T extends JsonValue = JsonValue&gt;```
 *   
 *   A JSON function can be passed via the ```data: {@link Data}``` 
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