/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

import { Data, JsonValue, JsonFunction }                    from './interfaces';
import { JsonTransformerParameters, JsonTransformerString } from './interfaces';
import { JsonTransformer }                                  from './root';

export 
class JsonTransformerStringTemplateFunctions extends JsonTransformer
{/**
  * The string <code>init<code> is transformed into the current level number.
  * All other Templates are returned without modification.
  *
  * $param init = '$level'
  */
  constructor (options: JsonTransformerParameters = {}) 
  { super( { ...options, init: options?.init ?? /\${([\w\d@_-]+)(}|\([\s\w\d@_,:'"<>{}\[\]-]*\)})/ }); }

  protected transformStringBefore: JsonTransformerString = 
  (value: string, data: Data) => 
  { const  
      c_regexp = new RegExp(this.init,'g'),
      c_value  = value as string,
      c_match  = c_value.match(new RegExp(`^${this.init.toString().slice(1,-1)}$`)),

      f_split_placeholder =
      (p_name: string, p_arguments: string): [JsonValue|JsonFunction, JsonValue] =>
      { const 
          c_name      = p_name == null ? null : data[p_name],
          c_arguments = p_arguments?.slice(1,-2).replace(/'/g,'"') ?? '';
  
        let l_json_value: JsonValue;
        
        if (p_arguments.length > 1)  
        { try
          { l_json_value = JSON.parse(c_arguments); }
          catch(e)
          { l_json_value = (e as Error).message; }
  
          return [c_name, l_json_value];
        } 
        else
        { return [c_name, null]; }
      },

      f_replace_placeholders =
      (p_value: string, p_string_cast: boolean): JsonValue =>
      { const
          c_placeholders                     = p_value.matchAll(c_regexp),
          c_replacers: [string, JsonValue][] = []; // these are not sugar replacers :-)
        let 
          l_result = c_placeholders.next();
  
        if (l_result.done)
        { return p_value; }

        while (!l_result.done)
        { const
            c_match = l_result.value, 
            [c_data, c_json_value]  = f_split_placeholder(c_match[1], c_match[2]);
            
          if (c_data != null)
          { let l_data: JsonValue;
            
            if (typeof c_data === 'function')
            { const c_data_computed = 
                      (c_data as Function)({value: c_json_value, data, level: this.level});

              l_data = (!p_string_cast || typeof c_data_computed === 'string')
                       ? c_data_computed
                       : JSON.stringify(c_data_computed);

            }
            else
            { l_data = (c_json_value != null)
                       ? c_match[0]
                       : (p_string_cast ? (c_data as string ?? ''): c_data as JsonValue );
            }
            c_replacers.push([c_match[0], l_data]) 
          }
          l_result = c_placeholders.next();
        }

        if (p_string_cast)
        { for (const r of c_replacers)
          { p_value = p_value.replace(r[0], r[1] as string); }
          return p_value;
        }

        return c_replacers[0][1];
      }
     
    return f_replace_placeholders(c_value, c_match == null || c_match.length == 1);
  }

}
