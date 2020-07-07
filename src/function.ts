/**
 * @module    function
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonString, JsonArray, JsonObject, JsonType}                 from './types';
import { JsonFunctionDescriptor, JsonFunctionDescriptorArray }        from './types';
import { JsonFunctionDescriptorObject, JsonFunctionDescriptorString } from './types';
import { JsonFunction, JsonFunctionParameters }                       from './types';
import { JsonTransformer, JsonTransformerParameters }                 from './transformer';

export 
class JsonTransformerFunction extends JsonTransformer
{/**
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
  * @param {JsonFunctionDescriptor[]}  [_.init = []]
  */
  constructor (_: JsonTransformerParameters = {}) 
  { super(_);    
    this.initialize();
  
    if (Array.isArray(_.init))
    { let l_descriptor: JsonFunctionDescriptor;
      for (const c_function of _.init)
      { l_descriptor = c_function as JsonFunctionDescriptor;
        this.descriptors[l_descriptor.type][l_descriptor.name] = l_descriptor; 
      }
    }   
  }

  private descriptors: Record<string, Record<string, JsonFunctionDescriptor>> =
  { [JsonType.Array]:  {},
    [JsonType.Object]: {},
    [JsonType.String]: {}, 
  }
  ;
  
  transformerJsonArray: JsonFunction<JsonArray> = 
  (_: JsonFunctionParameters<JsonArray>) => 
  { const 
      c_value = _.value;

    if (c_value.length === 0)
    { return c_value }

    const 
      c_name = this.functionName(c_value);

    if (c_name == null)
    { return c_value }

    const 
      c_d: JsonFunctionDescriptorArray =
        this.descriptors[JsonType.Array][c_name] as JsonFunctionDescriptorArray;

    return c_d == null ? c_value : c_d.function( { ..._, 
                                                   init:   c_d.init, 
                                                   rename: this.rename.bind(this)
                                                 },
                                                 1
                                               );
  }

  transformerJsonObject: JsonFunction<JsonObject> = 
  (_: JsonFunctionParameters<JsonObject>) => 
  { const
      c_value         = _.value,
      c_function_name = this.functionName(c_value);

    if (c_function_name != null)
    { const 
        c_do: JsonFunctionDescriptorObject = 
          this.descriptors[JsonType.Object][c_function_name] as JsonFunctionDescriptorObject;

      if (c_do != null) 
      { return c_do.function({ ..._, 
                               init:   c_do.init, 
                               rename: this.rename.bind(this)
                            }) 
      }

      const 
        c_da: JsonFunctionDescriptorArray =
          this.descriptors[JsonType.Array][c_function_name] as JsonFunctionDescriptorArray, 
        c_a = 
          this.arrayFunctionValue(c_function_name, c_value);  

      return c_a == null ? c_value : c_da.function({ ..._, 
                                                      value:  c_a, 
                                                      init:   c_da.init, 
                                                      rename: this.rename.bind(this)
                                                  }, 
                                                  0
                                                  );
    }
    else 
    { return c_value }
  }

  transformerJsonString: JsonFunction<JsonString> = 
  (_: JsonFunctionParameters<JsonString>) => 
  { const 
      c_d: JsonFunctionDescriptorString = 
        this.descriptors[JsonType.String][_.value as string] as JsonFunctionDescriptorString;
    return c_d == null ? _.value : c_d.function({ ..._, 
                                                  init:   c_d.init, 
                                                  rename: this.rename.bind(this)
                                               });
  }
}

export default JsonTransformerFunction;
