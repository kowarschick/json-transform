/**
 * @module    traversal
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonValue, JsonPrimitive, JsonArray, JsonObject} from './types';
import { JsonFunction, JsonFunctionParameters }        from './types';
import { JsonTransformer, JsonTransformerParameters }  from './transformer';

/**
 * This transformer applies its pipe transformer 
 * recursively to all elements of the JSON value. 
 * 
 * ```ts
 * import { JsonTransformerTraversal }   from '@wljkowa/json-transformer';
 * import { JsonTransformerLevel } from '@wljkowa/json-transformer';
 * import { JsonTransformerSome }   from '@wljkowa/json-transformer';
* 
 * const t1 = new JsonTransformerTraversal();
 * t1.pipe(new JsonTransformerLevel());
 * 
 * // // or:
 * //
 * //  const
 * //    t1 =       new JsonTransformerTraversal()
 * //         .pipe(new JsonTransformerLevel())
 * //         .root;
 * //
 * //  // or:
 * //  const t1 = new JsonTransformerTraversal
 * //             ({ transformer: new JsonTransformerLevel() });
 * 
 * t1.transform({ value: $level }) 
 * // => 0
 * t1.transform({ value: ["$level", {"level": "$level"}, ["$level", ["$level"]]] })   
 * // => [1, {"level": 2}, [2, [3]]] 
 *  
 * 
 * const
 *   t2 =       new JsonTransformerTraversal()
 *        .pipe(new JsonTransformerLevel())
 *        .pipe(new JsonTransformerSome())
 *        .root;
 * 
 * t2.transform({ value: ["$some", "$level", ["$level"], [["$level"]]] });
 * // => 1, [2], or [[3]] 
 * ```
 * 
 * @extends module:transformer.JsonTransformer
 *
 * @param {JsonTransformerParameters} _
 */
export 
class JsonTransformerTraversal extends JsonTransformer
{ constructor (options: JsonTransformerParameters = {}) 
  { super(options); }

  transformerJsonPrimitive: JsonFunction<JsonPrimitive> =
  ({value}: JsonFunctionParameters<JsonPrimitive>) => value;

  transformerJsonArray: JsonFunction<JsonArray> = 
  ({value, data, level}: JsonFunctionParameters<JsonArray>) => 
  { const
      c_level = level+1,
      c_result: JsonValue = [];

    for (const c_json_value of value)
    { c_result.push(this.transform({value: c_json_value, data, level: c_level})); }

    return c_result;
  }

  transformerJsonObject: JsonFunction<JsonObject> = 
  ({value, data, level}: JsonFunctionParameters<JsonObject>) => 
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
