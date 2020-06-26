/**
 * @module    traversal_breadth_first
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
 * import { JsonTransformerTraversalBreadthFirst }   from '@wljkowa/json-transformer';
 * import { JsonTransformerLevel } from '@wljkowa/json-transformer';
 * import { JsonTransformerSome }   from '@wljkowa/json-transformer';
* 
 * const t1 = new JsonTransformerTraversalBreadthFirst();
 * t1.pipe(new JsonTransformerLevel());
 * 
 * // // or:
 * //
 * //  const
 * //    t1 =       new JsonTransformerTraversalBreadthFirst()
 * //         .pipe(new JsonTransformerLevel())
 * //         .root;
 * //
 * //  // or:
 * //  const t1 = new JsonTransformerTraversalBreadthFirst
 * //             ({ transformer: new JsonTransformerLevel() });
 * 
 * t1.transform({ value: $level }) 
 * // => 0
 * t1.transform({ value: ["$level", {"level": "$level"}, ["$level", ["$level"]]] })   
 * // => [1, {"level": 2}, [2, [3]]] 
 *  
 * 
 * const
 *   t2 =       new JsonTransformerTraversalBreadthFirst()
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
class JsonTransformerTraversalBreadthFirst extends JsonTransformer
{ constructor (_: JsonTransformerParameters = {}) 
  { super(_); }

  // disable the transformer pipe
  public transformerPipe({value}: JsonFunctionParameters): JsonValue
  { return value; }

  transformerJsonPrimitive: JsonFunction<JsonPrimitive> =
  ({value}: JsonFunctionParameters<JsonPrimitive>) => value;

  transformerJsonArray: JsonFunction<JsonArray> = 
  ({value, data, level}: JsonFunctionParameters<JsonArray>) => 
  { const
      c_level = level+1;
    
    let  
      l_result: JsonValue = [];

    for (const c_json_result of value)
    { l_result.push(this.transform({value: c_json_result, data, level: c_level})); }

    return super.transformerPipe({ value: l_result, data, level: c_level });
  }

  transformerJsonObject: JsonFunction<JsonObject> = 
  ({value, data, level}: JsonFunctionParameters<JsonObject>) => 
  { const
      c_level = level+1;
    
    let
      l_result: JsonValue = {};

    for (const [c_key, c_result] of Object.entries(value))
    { l_result[this.transform({value: c_key, data, level: c_level}) as string] 
        = this.transform({value: c_result, data, level: c_level}); 
    }
    return super.transformerPipe({ value: l_result, data, level: c_level });
  }

}

export default JsonTransformerTraversalBreadthFirst;
