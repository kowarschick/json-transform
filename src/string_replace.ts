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
 * If the string value ```_.value``` is a member of the data object,
 * it is replaced by that value. Otherwise it remains unchanged.
 * 
 * 
 * __Examples__
 * 
 * ```ts
 * import { JsonTransformerStringReplace } from '@kowa/json-transformer';
 * 
 * const t1 = new JsonTransformerStringReplace
 *                ({ data: { "${a}": 1, "@b": [], "@c": {}, 
 *                           "d": null, "@e": () => 1
 *                         } 
 *                });
 * 
 * t1.transform({ value: "${a}" }) // => 1
 * t1.transform({ value: "@b" })   // => [] 
 * t1.transform({ value: "@c" })   // => [] 
 * t1.transform({ value: "d" })    // => "d"  (not null)
 * t1.transform({ value: "@e" })   // => "@e" (not 1)
 * 
 * const t2 = new JsonTransformerStringReplace
 *                ({ data: { "d": null, },
 *                   init: { regexp: /(.*)/ }
 *                });
 * 
 * t2.transform({ value: "d" })   // => null (not "d")
 * 
 * const t3 = new JsonTransformerStringReplace
 *                ({ data: { "@e":       () => 1 },
 *                   init: { "jsonOnly": false }
 *                })
 * 
 * t3.transform({ value: "@e" })   // => 1 (not "@e")
 * ```
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
 *   If ```true``` the string is only replaced, if a 
 *   JSON value is found in the data object. Otherwiese it is 
 *   also replaced by other values (such as functions). In this
 *   case, however, the transformer may return a non-JSON value
 *   (if not another transformer uses that function to replace 
 *    it by a correct JSON value – see, e.g., ```$format```
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
