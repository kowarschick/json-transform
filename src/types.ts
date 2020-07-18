/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/**
 * ```JsonString``` is an alias for ```string```.
 * 
 * @alias JsonString
 */let dummy=null; // tsc bug: force not to delete that jsdoc comment
export
type JsonString = string;

/** 
 * ```JsonNumber``` is an alias for ```number```.
 * 
 * @alias JsonNumber 
 */dummy=null;
export
type JsonNumber = number;

/** 
 * ```JsonBoolean``` is an alias for ```boolean```.
 * 
 * @alias JsonBoolean
 */dummy=null;
export
type JsonBoolean = boolean;

/** 
 * ```JsonNull``` is an alias for ```null | undefined```.
 * 
 * The value ```undefined``` is no regular JSON value. 
 * But it is needed to be able to use optional parameters
 * within the JSON transformers.
 * 
 * @alias JsonNull
 */dummy=null;
export
type JsonNull = null | undefined;

/**
 * A primitive JSON value is either a {@link JsonString}, 
 * a {@link JsonNumber}, a {@link JsonBoolean}, 
 * or a {@link JsonNull}.
 * 
 * @alias JsonPrimitive 
 */dummy=null;
export
type JsonPrimitive = (JsonString | JsonNumber | JsonBoolean | JsonNull);

/** 
 * A JSON array is an array of JSON values.
 * 
 * @alias JsonArray
 */dummy=null;
export 
type JsonArray = JsonValue[];

/** 
 * A JSON object is an object whose  attributes are key/value-pairs:
 * ```{[key: string]: JsonValue}```. Each key is a string, each value 
 * a {@link JsonValue}
 * 
 * @alias JsonObject  
 */dummy=null;
export
type JsonObject = {[key: string]: JsonValue};

/** 
 * A JSON value is either a primitive value ({@link JsonPrimitive}), or 
 * an array of JSON values ({@link JsonArray}) or JSON object
 * ({@link JsonObject}).
 * 
 * @alias JsonValue  
 */dummy=null;
export 
type JsonValue = JsonPrimitive | JsonArray | JsonObject ;

/**
 * ```JsonType``` is a enumeration type to distinguish the different 
 * types of JSON values ({@link JsonValue}).
 * 
 * Values: ```JsonType.Primitive```, ```JsonType.Array```, 
 *         ```JsonType.Object```, ```String.JsonType```, 
 *         ```JsonType.Number```, ```JsonType.Boolean```,
 *         ```JsonType.Null```
 */
export 
enum JsonType 
{ Primitive = 1,
  Array     = 2, 
  Object    = 3,
  String    = 4,
  Number    = 5,
  Boolean   = 6,
  Null      = 7,
}

/** 
 * ```<T extends JsonValue = JsonValue>```
 * 
 * {@link JsonFunction}s accept an parameter object which consists of the following attributes.
 * 
 * @interface JsonFunctionParameters
 * @property {T} value
 *   The JSON value to be transformed.
 * @property {number} level
 *   The current level of ```value``` within the JSON value that has been passed to 
 *   the root transformer.
 * @property {Data} data
 *   A data object the members of which can be used by transformers to replace
 *   or compute certain JSON values.
 * @property {?alias} init
 *   An initialization value that has been passed to a transformer to initialize
 *   the JSON function it calls.
 * @property {?Function} rename 
 *   A function ```(_: string) => string``` that replaces a standard attribute
 *   name by a new name (which has been passed to the transformer that calls the
 *   JSON function)
*/
export
interface JsonFunctionParameters<T extends JsonValue = JsonValue> 
{ value: T, level: number, data: Data, init: Init, rename: (name: string) => string }

/** 
 * ```<T extends JsonValue = JsonValue>```
 *   
 * A JSON function can be passed via the ```data: {@link Data}``` 
 * parameter to json transformers and other json functions to support
 * them in the transformation.
 * 
 * @function JsonFunction
 * @param    {JsonFunctionParameters} _
 * @param    {T}         _.value  see {@link JsonFunctionParameters}
 * @param    {number}    _.level  see {@link JsonFunctionParameters}
 * @param    {Data}      _.data   see {@link JsonFunctionParameters}
 * @param    {?alias}     _.init   see {@link JsonFunctionParameters}
 * @param    {?Function} _.init   see {@link JsonFunctionParameters}
 * @returns  {JsonValue}
 */
export 
type JsonFunction<T extends JsonValue = JsonValue> = 
(_: JsonFunctionParameters<T>) => JsonValue 

/** 
 * ```<T extends JsonValue = JsonValue>```
 *   
 * A JSON value function is a simple variant of {@link JsonFunction} 
 * which replaces JsonValues by JsonValue.
 *
 * @function JsonValueFunction
 * @param    {T} value
 * @returns  {JsonValue}
 */
export 
type JsonValueFunction<T extends JsonValue = JsonValue> = 
(_: T) => JsonValue 

/**
 * Common Attributes of {@link JsonFunctionDescriptor} interfaces.
 * 
 * @interface JsonFunctionDescriptorCommon
 * @property {JsonString} name   the name of the transformer function
 * @property {JsonType}   type   the type of the transformer function
 * @property {?alias}      init   initialization data that is pased to 
 *                               the transformer function whenever it 
 *                               is invoked
 * @property {?Function}  rename the renaming dictionary of the root transformer,
 *                               so that the name and possibly existing attribues
 *                               can be accessed by the current name.
 */  
export
interface JsonFunctionDescriptorCommon
{ name:    JsonString,
  type:    JsonType,
  init?:   Record<JsonString, Init>
  rename?: (name: JsonString) => JsonString
}

/**
 * A JSON function descriptor of type {@link JsonType.Array}.
 * 
 * @interface JsonFunctionDescriptorArray
 * @extends   JsonFunctionDescriptorCommon
 * @property {JsonString} name     the name of the transformer function
 * @property {Function}   function A JSON function ({@link JsonFunction})
 *                                 that excepts an additional parameter 
 *                                 ```begin```. It indicates the index
 *                                 of the first data element within the array.
 *                                 This value is mainly used to be able to 
 *                                 deal with both: plain arrays (```[1,2,3]```) 
 *                                 and LISP like function call arrays
 *                                 (```['$sum', 1,2,3]```). It, however, 
 *                                 can also be used to use some array elements 
 *                                 for initialization purposes (cmp.
 *                                 {@link JsonFunctionMinString})
 */
export 
interface JsonFunctionDescriptorArray extends JsonFunctionDescriptorCommon
{ type:     JsonType.Array,
  function: (_: JsonFunctionParameters<JsonArray>, begin?: number) => JsonValue
}

/**
 * A JSON function descriptor of type {@link JsonType.Object}.
 *
 * @interface JsonFunctionDescriptorObject
 * @extends   JsonFunctionDescriptorCommon
 * @property  {JsonString} name     
 *            the name of the transformer function
 * @property  {JsonFunction<JsonObject>} function 
 *            The JSON function ({@link JsonFunction})
 *            to be invoked by {@link JsonTransformerFunction}
 */
export 
interface JsonFunctionDescriptorObject extends JsonFunctionDescriptorCommon
{ type:     JsonType.Object,
  function: JsonFunction<JsonObject> 
} 
  
/**
 * A JSON function descriptor of type {@link JsonType.String}.
 *
 * @interface JsonFunctionDescriptorString
 * @extends   JsonFunctionDescriptorCommon
 * @property  {JsonString} name     
 *            the name of the transformer function
 * @property  {JsonFunction<JsonObject>} function 
 *            The JSON function ({@link JsonFunction})
 *            to be invoked by {@link JsonTransformerFunction}
 */
export
interface JsonFunctionDescriptorString extends JsonFunctionDescriptorCommon 
{ type:     JsonType.String,
  function: (_: JsonFunctionParameters<JsonString>) => JsonValue, 
}  

/** 
 * A JSON function descriptor contains JSON Functions together with 
 * initalization values. Those descriptors are passed to 
 * {@link JsonTransformerFunction}. This transformer uses the 
 * descriptors to invoke those functions accordingly.
 * 
 * Three kind of descriptors are supported: 
 * {@link JsonFunctionDescriptorArray}, {@link JsonFunctionDescriptorObject}, {@link JsonFunctionDescriptorString}
 * 
 * @alias JsonFunctionDescriptor  
 */dummy=null;
export 
type JsonFunctionDescriptor = 
  JsonFunctionDescriptorArray  |
  JsonFunctionDescriptorObject | 
  JsonFunctionDescriptorString
  
/** 
 * Several object and functions of the JSON transformer package can be
 * initialized. This is done by means of ```alias``` values.
 * As every kind of data can be used as init value, ```Init``` is an alias for ```any```.
 * 
 * Currently ```JsonValue | JsonFunction | JsonValueFunction | Function | JsonFunctionDescriptor[] | RegExp | Function | InitMap``` would work as well.
 * 
 * @alias Init
 */dummy=null;
export 
type Init = any;
  //JsonValue | JsonFunction | JsonValueFunction | Function | JsonFunctionDescriptor[] | RegExp | Function | InitMap

/** 
 * A map of {@link Init} values.
 * 
 * @interface InitMap 
 * @property  {Init} [key: string]
 */
export 
interface InitMap 
{ [key: string]: Init }

/** 
 * To JSON transformers and to JSON transformer functions
 * data objects can be passed. The keys of those data objects
 * must be strings, the values either JSON values ({@Link JsonValue}),
 * JSON functions ({@Link JsonFunction}) or JSON value functions
 * ({@Link JsonValueFunction}). Those values are nullable.
 * 
 * @interface Data 
 * @property  {(JsonValue|JsonFunction|JsonValueFunction)} [key: string]
 */
export 
interface Data 
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

/**
 * @param   {Init} value
 * @returns {boolean} 
 *          Returns ```true``` is ```value``` 
 *          is a member of ```{@link InitMap}```.
 */
export
function isInitMap(value: Init): value is InitMap
{ return value != null && typeof value === 'object' && !Array.isArray(value); }
