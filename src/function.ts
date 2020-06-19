/**
 * @module    function
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonString, JsonArray, JsonObject}               from './interfaces';
import { JsonType, JsonFunction, JsonFunctionParameters } from './interfaces';
import { JsonTransformer, JsonTransformerParameters }     from './transformer';

export 
class JsonTransformerFunction extends JsonTransformer
{ /**
   * An JSON object that owns an attribute named 
   * <code>JsonTransformerFunction.functionAttribute<code>
   * (default: <code>$function</code>) is considered 
   * the describe a function call.
   * @public
   * @static
   */
  public static functionAttribute = '$function';

  /**
  * This transformers applies the functions passed via the init parameter
  * <code>_.init.functions</code> to approriate json values.
  * 
  * For JSON strings, if a <code>JsonStringFunction</code> exists with the name 
  * of the string, it is invoked (and the invocation result is returned).
  * For JSON arrays, if a <code>JsonArrayFunction</code> exists the name of 
  * which is equal to the first element of the array, it is invoked
  * (and the invocation result is returned). 
  * For JSON object that contains an attribute named 
  * <code>JsonTransformerFunction.functionAttribute<code>
  * (default: <ocde>$function</code>)
  * a <code>JsonObjectFunction</code> with the name <code>_.value['$function']<code>
  * is invoked (and the invocation result is returned).

  * If no function could be applied, the JSON value 
  * is returned unchanged.
  *
  * @extends  module:transformer.JsonTransformer
  *
  * @param {JsonTransformerParameters} _
  * @param {JsonFunction[]} [_.init.functions = []]
  */
  constructor (_: JsonTransformerParameters = {}) 
  { super(_); 

    if (Array.isArray(_?.init?.functions))
    { for (const c_function of _.init.functions)
      if (c_function.type != null)
      { this.a_functions[c_function.type][c_function.init] = c_function; }
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
    if (typeof c_function_name === 'string' && _.value[c_function_name] != null)
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
