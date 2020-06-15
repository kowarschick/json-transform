/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonValue, JsonArray, JsonMap}               from './interfaces';
import { JsonFunction, JsonFunctionParameters }       from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';

/**
 * @class
 * @Xextends JsonTransformer
 * @description
 *   extends {@link JsonTransformer}
 *   <p>
 *   This transformer applies the transformer passed as argument
 *   to the constructor or added by means of the <code>pipe</code>
 *   method recursively to all elements of the JSON value. 
 */
export 
class JsonTransformerTraversal extends JsonTransformer
{ constructor (options: JsonTransformerParameters = {}) 
  { super(options); }

  transformerJsonArrayAfter: JsonFunction<JsonArray> = 
  ({value, data, level}: JsonFunctionParameters<JsonArray>) => 
  { const
      c_level = level+1,
      c_result: JsonValue = [];

    for (const c_json_value of value)
    { c_result.push(this.transform({value: c_json_value, data, level: c_level})); }

    return c_result;
  }

  transformerJsonMapAfter:  JsonFunction<JsonMap> = 
  ({value, data, level}: JsonFunctionParameters<JsonMap>) => 
  { const
      c_level = level+1,
      c_result: JsonValue = {};

    for (const [c_key, c_value] of Object.entries(value))
    { c_result[this.transform({value: c_key, data, level: c_level}) as string] 
        = this.transform({value: c_value, data, level: c_level}); 
    }
    return c_result;
  }

}

export default JsonTransformerTraversal;
