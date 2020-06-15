/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonString, JsonArray, JsonMap}                              from './interfaces';
import { EnumJsonFunctionType, JsonFunction, JsonFunctionParameters } from './interfaces';
import { JsonTransformer, JsonTransformerParameters }                 from './transformer';

export 
class JsonTransformerFunction extends JsonTransformer
{/**
  * This transformers applies the functions passed via the init parameter
  * to approriate json values.
  * 
  * For JSON strings, if a <code>JsonStringFunction</code> exists with the name 
  * of the string, it is invoked (and the invocation result is returned).
  * For JSON arrays, if a <code>JsonArrayFunction</code> exists the name of 
  * which is equal to the first element of the array, it is invoked. 
  * For JSON Map that contain an attribute named 
  * <code>options.init.functionAttribute</code> (<code>$function</code>) 
  * a <code>JsonMapFunction</code> with the name <code>options.value['$function']<code>
  * is invoked.
  * 
  * Functions that are passed to the transformer via
  * <code>options.init.before</code> are applied to the
  * JSON value before it is passed further to the pipe.
  * 
  * Functions that are passed to the transformer via
  * <code>options.init.after</code> are applied to the
  * JSON value after it has been transformed by the pipe.
  * 
  * If no function could be applied, the JSON value 
  * is returned unchanged.
  * 
  * @param options.init.functionAttribute: string = '$function'
  * @param options.init.before:            JsonFunction[] = []
  * @param options.init.after:             JsonFunction[] = []
  */
  constructor (options: JsonTransformerParameters = {}) 
  { super({ ...options, 
            ...{ init: { ...options.init, 
                         functionAttribute: options?.init?.functionAttribute ?? '$function'
                       }
               }
         }); 

    if (Array.isArray(options?.init?.before))
    { for (const c_function of options.init.before)
      if (c_function.type != null)
      { this.v_functions_before[c_function.type][c_function.init] = c_function; }
    }   

    if (Array.isArray(options?.init?.after))
    { for (const c_function of options.init.after)
      { this.v_functions_after[c_function.type][c_function.init] = c_function; }
    }
  }

  private v_functions_before: { [key: string]: {[key: string]: JsonFunction} } =
          { [EnumJsonFunctionType.JsonArray]:  {},
            [EnumJsonFunctionType.JsonMap]:    {},
            [EnumJsonFunctionType.JsonString]: {}, 
          }
  ;

  private v_functions_after: { [key: string]: {[key: string]: JsonFunction} } =
          { [EnumJsonFunctionType.JsonArray]:  {},
            [EnumJsonFunctionType.JsonMap]:    {},
            [EnumJsonFunctionType.JsonString]: {},
          }
  ;
  
  transformerJsonArrayBefore: JsonFunction<JsonArray> = 
  (_: JsonFunctionParameters<JsonArray>) => 
  { if (_.value.length === 0)
    { return _.value; }
    
    const f = this.v_functions_before[EnumJsonFunctionType.JsonArray][_.value[0] as string];
    return f == null ? _.value : f(_);
  }

  transformerJsonMapBefore: JsonFunction<JsonMap> = 
  (_: JsonFunctionParameters<JsonMap>) => 
  { const c_function_name = _.value[this.init.functionAttribute] ?? '';
    if (typeof c_function_name === 'string' && _.value[c_function_name] != null)
    { const f = this.v_functions_before[EnumJsonFunctionType.JsonMap][c_function_name]
      return f == null ? _.value : f(_); 
    }
    else
    { return _.value; }
  }

  transformerJsonStringBefore: JsonFunction<JsonString> = 
  (_: JsonFunctionParameters<JsonString>) => 
  { const f = this.v_functions_before[EnumJsonFunctionType.JsonString][_.value as string];
    return f == null ? _.value : f(_);
  }

  
  transformerJsonArrayAfter: JsonFunction<JsonArray> = 
  (_: JsonFunctionParameters<JsonArray>) => 
  { if (_.value.length === 0)
    { return _.value; }
    
    const f = this.v_functions_after[EnumJsonFunctionType.JsonArray][_.value[0] as string];
    return f == null ? _.value : f(_);
  }

  transformerJsonMapAfter: JsonFunction<JsonMap> = 
  (_: JsonFunctionParameters<JsonMap>) => 
  { const c_function_name = _.value[this.init.functionAttribute] ?? '';
    if (typeof c_function_name === 'string' && _.value[c_function_name] != null)
    { const f = this.v_functions_after[EnumJsonFunctionType.JsonMap][c_function_name]
      return f == null ? _.value : f(_); 
    }
    else
    { return _.value; }
  }

  transformerJsonStringAfter: JsonFunction<JsonString> = 
  (_: JsonFunctionParameters<JsonString>) => 
  { const f = this.v_functions_after[EnumJsonFunctionType.JsonString][_.value as string];
    return f == null ? _.value : f(_);
  }
}

export default JsonTransformerFunction;
