/**
 * @module    traversal
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonValue, JsonPrimitive, JsonArray, JsonMap} from './interfaces';
import { JsonFunction, JsonFunctionParameters }        from './interfaces';
import { JsonTransformer, JsonTransformerParameters }  from './transformer';

/**
 * This transformer applies its pipe transformer 
 * recursively to all elements of the JSON value. 
 * 
 * ```ts
 * import { JsonTransformerTraversal }   from '@wljkowa/json-transformer';
 * import { JsonTransformerStringLevel } from '@wljkowa/json-transformer';
 * import { JsonTransformerArraySome }   from '@wljkowa/json-transformer';
* 
 * const t1 = new JsonTransformerTraversal();
 * t1.pipe(new JsonTransformerStringLevel());
 * 
 * // // or:
 * //
 * //  const
 * //    t1 =       new JsonTransformerTraversal()
 * //         .pipe(new JsonTransformerStringLevel())
 * //         .root;
 * //
 * //  // or:
 * //  const t1 = new JsonTransformerTraversal
 * //             ({ transformer: new JsonTransformerStringLevel() });
 * 
 * t1.transform({ value: $level }) 
 * // => 0
 * t1.transform({ value: ["$level", {"level": "$level"}, ["$level", ["$level"]]] })   
 * // => [1, {"level": 2}, [2, [3]]] 
 *  
 * 
 * const
 *   t2 =       new JsonTransformerTraversal()
 *        .pipe(new JsonTransformerStringLevel())
 *        .pipe(new JsonTransformerArraySome())
 *        .root;
 * 
 * t2.transform({ value: ["$some", "$level", ["$level"], [["$level"]]] });
 * // => 0, [1], or [[2]] 
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

  transformerJsonPrimitiveAfter: JsonFunction<JsonPrimitive> =
  ({value}: JsonFunctionParameters<JsonPrimitive>) => value;

  transformerJsonArrayAfter: JsonFunction<JsonArray> = 
  ({value, data, level}: JsonFunctionParameters<JsonArray>) => 
  { const
      c_level = level+1,
      c_result: JsonValue = [];

    for (const c_json_value of value)
    { c_result.push(this.transform({value: c_json_value, data, level: c_level})); }

    return c_result;
  }

  transformerJsonMapAfter: JsonFunction<JsonMap> = 
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
