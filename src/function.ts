/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonString, JsonArray, JsonObject}               from './interfaces';
import { JsonType, JsonFunction, JsonFunctionParameters } from './interfaces';
import { JsonTransformer, JsonTransformerParameters }     from './transformer';

export 
class JsonTransformerFunction extends JsonTransformer
{/**
  * This transformers applies the functions passed via the init parameter
  * <code>_.init.functions</code> to approriate json values.
  * 
  * For JSON strings, if a <code>JsonStringFunction</code> exists with the name 
  * of the string, it is invoked (and the invocation result is returned).
  * For JSON arrays, if a <code>JsonArrayFunction</code> exists the name of 
  * which is equal to the first element of the array, it is invoked
  * (and the invocation result is returned). 
  * For JSON Map that contain an attribute named 
  * <code>_.init.functionAttribute</code> (<code>$function</code>) 
  * a <code>JsonObjectFunction</code> with the name <code>_.value['$function']<code>
  * is invoked (and the invocation result is returned).

  * If no function could be applied, the JSON value 
  * is returned unchanged.
  * 
  * @param _.init.functionAttribute: string = '$function'
  * @param _.init.functions:         JsonFunction[] = []
  */
  constructor (_: JsonTransformerParameters = {}) 
  { super({ ..._, 
            ...{ init: { ..._.init, 
                         functionAttribute: _?.init?.functionAttribute ?? '$function'
                       }
               }
         }); 

    if (Array.isArray(_?.init?.functions))
    { for (const c_function of _.init.functions)
      if (c_function.type != null)
      { this.v_functions[c_function.type][c_function.init] = c_function; }
    }   
  }

  private v_functions: { [key: string]: {[key: string]: JsonFunction} } =
  { [JsonType.Array]:  {},
    [JsonType.Object]: {},
    [JsonType.String]: {}, 
  }
  ;
  
  transformerJsonArray: JsonFunction<JsonArray> = 
  (_: JsonFunctionParameters<JsonArray>) => 
  { if (_.value.length === 0)
    { return _.value; }
    
    const f = this.v_functions_before[JsonType.Array][_.value[0] as string];
    return f == null ? _.value : f(_);
  }

  transformerJsonObject: JsonFunction<JsonObject> = 
  (_: JsonFunctionParameters<JsonObject>) => 
  { const c_function_name = _.value[this.init.functionAttribute] ?? '';
    if (typeof c_function_name === 'string' && _.value[c_function_name] != null)
    { const f = this.v_functions[JsonType.Object][c_function_name]
      return f == null ? _.value : f(_); 
    }
    else
    { return _.value; }
  }

  transformerJsonString: JsonFunction<JsonString> = 
  (_: JsonFunctionParameters<JsonString>) => 
  { const f = this.v_functions[JsonType.String][_.value as string];
    return f == null ? _.value : f(_);
  }
}

export default JsonTransformerFunction;
