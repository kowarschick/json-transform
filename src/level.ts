/**
 * @module    level
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

const LEVEL = '$level';

import { JsonString }                                 from './types';
import { JsonFunction, JsonFunctionParameters }       from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';

/**
 * The string ```$level``` is transformed to the level number
 * of the JSON containter (array, object) that contains this string.
 * All other strings are returned without modification.
 *
 * __Examples__
 * 
 * ```ts
 * import { JsonTransformerTraversal } from '@kowa/json-transformer';
 * import { JsonTransformerLevel }     from '@kowa/json-transformer';
 * 
 * const t = new JsonTransformerTraversal()
 *     .pipe(new JsonTransformerLevel())
 *
 * t.transform({ value: "$level" }
 * // => 0
 * 
 * t.transform({ value: ["$level", ["$level"], [["$level"]] }
 * // [1, [2], [[3]]]
 * ```
 * 
 * @extends  module:transformer.JsonTransformer
 *
 * @param {JsonTransformerParameters} _
 */
export 
class JsonTransformerLevel extends JsonTransformer
{ constructor (_: JsonTransformerParameters = {}) 
  { super(_); 
    this.initialize();
  }

  transformerJsonString: JsonFunction<JsonString> = 
  ({value, level}: JsonFunctionParameters<JsonString>) => 
  { return (value === this.rename(LEVEL)) ? level : value; }
}

export default JsonTransformerLevel;
