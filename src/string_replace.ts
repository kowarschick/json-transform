/**
 * @module    function/string
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonValue, JsonString }                      from './types';
import { JsonFunction, JsonFunctionParameters }       from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';

/**
  * If the string value <code>_.value</code> is a member of the data object,
  * it is replaced  by that value. Otherwise it remains unchanged.
  * 
 * @extends  module:transformer.JsonTransformer
 *
 * @param {JsonTransformerParameters} _
 * @param {string} _.value
 */
export function JsonFunctionStringReplace({value, data}: JsonFunctionParameters<JsonString>)
{ const c_value = data[value]; 
  return c_value != null ? c_value : value; 
}
export 
class JsonTransformerStringReplace extends JsonTransformer
{ constructor (_: JsonTransformerParameters = {}) 
  { super(_); }

  transformerJsonString: JsonFunction<JsonString> = 
  ({value, data}: JsonFunctionParameters<JsonString>) => 
  { const c_value = data[value] as JsonValue; 
    return c_value != null ? c_value : value; 
  }
}

export default JsonTransformerStringReplace;
