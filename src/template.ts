/**
 * @module    template
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonValue, JsonString }                      from './types';
import { JsonFunction, JsonFunctionParameters }       from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';

/**
 * Strings that match the regular expression 
 * ```_.init.template``` are replaced by values 
 * found in ```_.data```.
 * 
 * For instance, the string ```"${abc}"``` is
 * replaced by ```_.data["abc"]```, if that
 * value is defined. 
 * 
 * If ```_.value``` consists only
 * of such a string, the replacement value
 * may be of any {@link JsonType}. If 
 * ```_.value```, on the other hand,
 * contains further characters, ```_.data["abc"]```
 * should be of type ```string```. 
 * ```_.value```.  
 *
 * __Examples__
 * 
 * ```ts
 * import { JsonTransformerTemplate } from '@kowa/json-transformer';
 * 
 * const t = new JsonTransformerTemplate
 *               ({ data: {"abc": [123], "hello": "Hallo"} });
 * 
 * t.transform({ value: "${abc}" }) 
 * // => [123]
 *
 * t.transform({ value: "-${abc}-" })
 * // => "-[123]-"
 * 
 * t.transform({ value: "${hello}, ${name}!", data: {name: "Wolfgang"} })
 * // => "Hallo, Wolfgang!"
 * ```
 * 
 * @extends  module:transformer.JsonTransformer
 *
 * @param {JsonTransformerParameters} _
 * @param {Init}   _.init
 * @param {string} [_.init.template = /\${([\w\d@_-]+)}/]
 */
export 
class JsonTransformerTemplate extends JsonTransformer
{ constructor ( { init = /\${([\w\d@_-]+)}/, 
                 ..._
                }: JsonTransformerParameters = {}
              ) 
  { super({init, ..._}) 
    this.initialize();
  }

  transformerJsonString: JsonFunction<JsonString> = 
  ({value, data}: JsonFunctionParameters<JsonString>) => 
  { const  
      c_regexp = this.init as RegExp,
      c_value  = value as string,
      c_match  = c_value.match(new RegExp(`^${c_regexp.toString().slice(1,-1)}$`)),
      
      f_replace_placeholders =
      (p_value: string): string =>
      { const
          c_placeholders = p_value.matchAll(new RegExp(c_regexp,'g')),
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
