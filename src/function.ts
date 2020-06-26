/**
 * @module    function
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonString, JsonArray, JsonObject}               from './types';
import { JsonType, JsonFunction, JsonFunctionParameters } from './types';
import { JsonTransformer, JsonTransformerParameters }     from './transformer';

export 
class JsonTransformerFunction extends JsonTransformer
{ /**
   * A JSON object that owns an attribute named 
   * <code>$function</code>) is considered 
   * the describe a function call.
   * @public
   * @static
   */
  public static functionAttribute = '$function';

 /**
  * A JSON string ({@link JsonString}) is considered 
  * to be a function call, if that string is equal 
  * to the name of  an string function 
  * ({@link JsonFunction<JsonString>}) 
  * that has been registered at construction time. 
  * The JSON string is passed as data object 
  * to that function. Besinde, the level and
  * the data object are passed.
  * 
  * A JSON array ({@link JsonObject}) 
  * that starts with a string
  * is considered to be a function call, if
  * that string is equal to the name of 
  * an array function ({@link JsonFunction<JsonArray>})  
  * that has been registered  at construction time. 
  * The JSON array is passed as data object to that function.
  * 
  * A JSON object  ({@link JsonObject})
  * that owns an attribute named 
  * <code>$function</code>) is considered 
  * the describe a function call, if the
  * value of that attribute is equal
  * to the name of an object ({@link JsonFunction<JsonObject>})
  * that has been registered at construction 
  * time. The JSON object is passed as data 
  * object to that function.
  * 
  * If there is is no object function but an 
  * array function ({@link JsonFunction<JsonArray>})
  * with that name and if the JSON object has
  * an attribute name <code>$value</code> whose
  * value is a JSON Array that value is passed
  * as data to the array function.

  * If no function could be applied, the JSON value 
  * is returned unchanged.
  *
  * @extends  module:transformer.JsonTransformer
  *
  * @param {JsonTransformerParameters} _
  * @param {Object}          _.init
  * @param {JsonFunction[]} [_.init.function = { function: '$function',
  *                                              value:    '$value'
  *                                            }
  *                         ]
  * @param {JsonFunction[]} [_.init.functions = []]
  */
  constructor (_: JsonTransformerParameters = {}) 
  { super(_); 

    if (Array.isArray(_?.init?.functions))
    { for (const c_function of _.init!.functions)
      if (c_function?.type != null)
      { this.a_functions[c_function.type][c_function.name] = c_function; }
    }   
  }

  private a_functions: { [key: string]: {[key: string]: JsonFunction} } =
  { [JsonType.Array]:  {},
    [JsonType.Object]: {},
    [JsonType.String]: {}, 
  }
  ;
  
  transformerJsonArray: JsonFunction<JsonArray> = 
  (_: JsonFunctionParameters<JsonArray>) => 
  { if (_.value.length === 0)
    { return _.value; }
    
    const f = this.a_functions[JsonType.Array][_.value[0] as string];
    return f == null ? _.value : f(_);
  }

  transformerJsonObject: JsonFunction<JsonObject> = 
  (_: JsonFunctionParameters<JsonObject>) => 
  { const c_function_name = _.value[JsonTransformerFunction.functionAttribute] ?? '';

    if (typeof c_function_name === 'string')
    { const f = this.a_functions[JsonType.Object][c_function_name]
      return f == null ? _.value : f(_); 
    }
    else
    { return _.value; }
  }

  transformerJsonString: JsonFunction<JsonString> = 
  (_: JsonFunctionParameters<JsonString>) => 
  { const f = this.a_functions[JsonType.String][_.value as string];
    return f == null ? _.value : f(_);
  }
}

export default JsonTransformerFunction;
