/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonValue }                                                           from './interfaces';
import { JsonFunctionArrayParameters, JsonFunctionMapParameters}               from './interfaces';
import { JsonTransformerParameters, JsonTransformerArray, JsonTransformerMap } from './interfaces';
import { JsonTransformer }                                                     from './root';


export 
class JsonTransformerTraversal extends JsonTransformer
{/**
  * This transformers applies the transformer passed recursively to
  * all elements of the JSON value. 
  */
  constructor (options: JsonTransformerParameters = {}) 
  { super(options); }

  transformerJsonArrayAfter: JsonTransformerArray = 
  ({value, data, level}: JsonFunctionArrayParameters) => 
  { const
      c_level = level+1,
      c_result: JsonValue = [];

    for (const c_json_value of value)
    { c_result.push(this.transform({value: c_json_value, data, level: c_level})); }

    return c_result;
  }

  transformerJsonMapAfter: JsonTransformerMap = 
  ({value, data, level}: JsonFunctionMapParameters) => 
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
