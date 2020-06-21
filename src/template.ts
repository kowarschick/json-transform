/**
 * @module    template
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonValue, JsonString }                      from './interfaces';
import { JsonFunction, JsonFunctionParameters }       from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';

/**
 * Strings that match the regular expression 
 * <code>_.init</code> are replaced by values 
 * found in <code>_.data</code>.
 * <p>
 * For instance, the string <code>"${abc}"</code> is
 * replaced by <code>_.data["abc"]</code>, if that
 * value is defined. 
 * <p>
 * If <code>_.value</code> consists only
 * of such a string, the replacement value
 * may be of any {@link JsonType}. If 
 * <code>_.value</code>, on the other hand,
 * contains further characters, <code>_.data["abc"]</code>
 * should be of type <code>string</code>. 
 * <code>_.value</code>.  
 *
 * ```ts
 * import { JsonTransformerTemplate } from '@wljkowa/json-transformer';
 * 
 * const t1 = new JsonTransformerTemplate
 *            ({ data: {"abc": [123], "hello": "Hallo"} });
 * 
 * t1.transform({ value: "${abc}" }) 
 *    // => [123]
 * t1.transform({ value: " ${abc} " })
 *    // => " [123] "
 * t1.transform({ value: "${hello}, ${name}!", data: {name: "Wolfgang"} })
 *    // => "Hallo, Wolfgang!"
 * ```
 * 
 * @extends  module:transformer.JsonTransformer
 *
 * @param {JsonTransformerParameters} _
 * @param {string} [_.init = /\${([\w\d@_-]+)}/]
 */
export 
class JsonTransformerTemplate extends JsonTransformer
{ constructor (_: JsonTransformerParameters = {}) 
  { super( { ..._, init:_?.init ?? /\${([\w\d@_-]+)}/ }); }

  transformerJsonString: JsonFunction<JsonString> = 
  ({value, data}: JsonFunctionParameters<JsonString>) => 
  { const  
      c_regexp = new RegExp(this.init,'g'),
      c_value  = value as string,
      c_match  = c_value.match(new RegExp(`^${this.init.toString().slice(1,-1)}$`)),
      
      f_replace_placeholders =
      (p_value: string): string =>
      { const
          c_placeholders = p_value.matchAll(c_regexp),
          c_replacers    = []; // these are not sugar replacers :-)
        let 
          l_result = c_placeholders.next();
  
        if (l_result.done)
        { return p_value; }
  
        while (!l_result.done)
        { const 
            c_match       = l_result.value,
            c_data        = data[c_match[1]],
            c_data_string = typeof c_data === 'string' ? c_data : JSON.stringify(c_data); 
  
          if (c_data != null)
          { c_replacers.push([c_match[0], f_replace_placeholders(c_data_string)]) }
          l_result = c_placeholders.next();
        }
        
        for (const r of c_replacers)
        { p_value = p_value.replace(r[0], r[1]); }
  
        return p_value;
      }
     
    return c_match != null         
           ? data[c_match[1]] as JsonValue
           : f_replace_placeholders(c_value);
  }

}

export default JsonTransformerTemplate;