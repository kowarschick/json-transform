/**
 * @module    template_functions
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonValue, JsonString }                      from './types';
import { JsonFunction, JsonFunctionParameters }       from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';

/**
 * Strings that match the regular expression 
 * <code>_.init.templateFunctions</code> are replaced by values 
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
 * <code>_.value</code>
 * <p>
 * In contrast to <code>{@link JsonTransformerTemplate}</code>
 * this transformer supports also function calls. 
 * If, e. g., <code>_.data["f"]</code> is a {@link JsonFunction},
 * it can be invoked by <code>"...${f(</code>&lt;jsonvalue&gt;<code>)}..."</code>.
 * <p>
 * Please note, as a regular expression instead of a parser is used to 
 * detect function calls, there <strong>must be no space</strong>
 * before the opening bracket and between the closing 
 * curly bracket and the closing bracket of the function call 
 * (do: <code>"...${f(...)}..."</code>, don't: <code>"...${f (...) }..."</code>).
 * 
 * ```ts
 * // es6; for typescript see test/test_traversal_template_functions.ts
 * import { JsonTransformerTraversal,
 *          JsonTransformerTemplate 
 *        } from '@wljkowa/json-transformer';
 * 
 * const 
 *   t1 = new JsonTransformerTemplate
 *        ({ data: { abc:   [123], 
 *                   hello: "Hallo",
 *                   fps:    50, 
 *                   vpf:   ({value, data}) => 
 *                          [ value.x/data.fps,
 *                            value.y/data.fps,
 *                          ],
 *                   def:   () => 123,
 *                 }
 *        });
 * 
 * t1.transform({ value: "${abc}" }) 
 *    // => [123]
 * t1.transform({ value: " ${abc} " })
 *    // => " [123] "
 * t1.transform({ value: "${hello}, ${name}!", data: {name: "Wolfgang"} })
 *    // => "Hallo, Wolfgang!"
 * t1.transform({ value: "${def()}" })
 *    // => 123
 * t1.transform({ value: "{v: ${vpf({"vx":100, "vy":200})}}" })
 *    // => "{v: [2,4]}"
 * 
 * const 
 *   t2 = new JsonTransformerTraversal
 *            ({ data: { abc:   [123], 
 *                       hello: "Hallo",
 *                       fps:    50, 
 *                       vpf:   ({value, data}) => 
 *                              [ value.x/data.fps,
 *                                value.y/data.fps,
 *                              ],
 *                       def:   () => 123,
 *                     }
 *             })
 *        .pipe(new JsonTransformerTemplateFunctions());
 * 
 * t2.transform({ value: {v: ${vpf({"vx":100, "vy":200})}} })
 *    // => {v: [2,4]}
 * ```
 *
 * @extends  module:transformer.JsonTransformer
 *
 * @param {JsonTransformerParameters} _
 * @param {Init}    _.init
 * @param {string} [_.init.template = <complex regular expression>]
 */
export 
class JsonTransformerTemplateFunctions extends JsonTransformer
{ constructor ( { init = /\${([\w\d@_-]+)(}|\([\s\w\d@_,:'"<>{}\[\]-]*\)})/, 
                 ..._
                }: JsonTransformerParameters = {}
              ) 
  { super({init, ..._}) 
    this.initialize();
  }

  /** @override */
  transformerJsonString: JsonFunction<JsonString> = 
  ({value, data}: JsonFunctionParameters<JsonString>) => 
  { const  
      c_regexp = this.init as RegExp,
      c_value  = value as string,
      c_match  = c_value.match(new RegExp(`^${c_regexp.toString().slice(1,-1)}$`)),

      f_split_placeholder =
      (p_name: string, p_arguments: string): [JsonValue|JsonFunction, JsonValue] =>
      { const 
          c_name      = p_name == null ? null : data?.[p_name],
          c_arguments = p_arguments?.slice(1,-2).replace(/'/g,'"') ?? '';
  
        let l_json_value: JsonValue;
        
        if (p_arguments.length > 1)  
        { try
          { l_json_value = JSON.parse(c_arguments); }
          catch(e)
          { l_json_value = (e as Error).message; }
  
          return [c_name as string, l_json_value];
        } 
        else
        { return [c_name as string, null]; }
      },

      f_replace_placeholders =
      (p_value: string, p_string_cast: boolean): JsonValue =>
      { const
          c_placeholders                     = p_value.matchAll(new RegExp(c_regexp,'g')),
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

export default JsonTransformerTemplateFunctions;
