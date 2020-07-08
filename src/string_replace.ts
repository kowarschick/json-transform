/**
 * @module    function/string
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonValue, isJsonValue, JsonString, InitMap } from './types';
import { JsonFunction, JsonFunctionParameters }        from './types';
import { JsonTransformer, JsonTransformerParameters }  from './transformer';

/**
  * If the string value <code>_.value</code> is a member of the data object,
  * it is replaced  by that value. Otherwise it remains unchanged.
  * 
 * @extends  module:transformer.JsonTransformer
 *
 * @param {JsonTransformerParameters} _
 * @param {string} _.value
 *   The value to be transformed.
 * @param {Init}    _.init
 * @param {Regexp}  [_.init.regexp    = /^(@|\${)/]
 *   The regular expression determines which strings are replaced.
 * @param {number}  [_.init.json_only = true]
 *   If <code>true</code> the string is only replaced, if a 
 *   JSON value is found in the data object. Otherwiese it is 
 *   also replaced by other values (such as functions). In this
 *   case, however, the transformer may return a non-JSON value
 *   (if not another transformer uses that function to replace 
 *    it by a correct JSON value – see, e.g., <code>$format</code>
 *    of {@link JsonFunctionSequence}).
 *    
 */
export 
class JsonTransformerStringReplace extends JsonTransformer
{ constructor 
  ( { init = { regexp:   /^(@|\${)/,
               jsonOnly: true,
             }, 
      ..._
    }: JsonTransformerParameters = {}
  )
  { super({ init, ..._ }); 
    this.initialize();
  }

  transformerJsonString: JsonFunction<JsonString> = 
  ({value, data}: JsonFunctionParameters<JsonString>) => 
  { const 
      c_init      = this.init as InitMap,
      c_regexp    = (c_init.regexp   ?? /^(@|\${)/) as RegExp,
      c_json_only = (c_init.jsonOnly ?? true)       as boolean,
      c_value     = data[value] as JsonValue; 
    
      return    c_value != null 
             && value.match(c_regexp)
             && (!c_json_only || isJsonValue(c_value))
             ? c_value 
             : value; 
  }
}

export default JsonTransformerStringReplace;
