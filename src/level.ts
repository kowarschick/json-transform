/**
 * @module    level
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonString }                                 from './types';
import { JsonFunction, JsonFunctionParameters }       from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';

/**
 * The string <code>$level<code> is transformed to the current level number.
 * All other Templates are returned without modification.
 *
 * @extends  module:transformer.JsonTransformer
 *
 * @param {JsonTransformerParameters} _
 * @param {Init}  _.init = '$level'
 */
export 
class JsonTransformerLevel extends JsonTransformer
{ constructor ({init='$level', ..._}: JsonTransformerParameters = {}) 
  { super({init, ..._}) }

  transformerJsonString: JsonFunction<JsonString> = 
  ({value, level}: JsonFunctionParameters<JsonString>) => 
  { return (value === this.init.level) ? level : value; }
}

export default JsonTransformerLevel;
