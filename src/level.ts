/**
 * @module    level
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonString }                                 from './interfaces';
import { JsonFunction, JsonFunctionParameters }       from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';

/**
 * The string <code>_.init<code> is transformed into the current level number.
 * All other Templates are returned without modification.
 *
 * @extends  module:transformer.JsonTransformer
 *
 * @param {JsonTransformerParameters} _
 * @param {string} [_.init = '$level']
 */
export 
class JsonTransformerLevel extends JsonTransformer
{  constructor (_: JsonTransformerParameters = {}) 
  { super({ ..._, init: _?.init ?? '$level' }); }

  transformerJsonString: JsonFunction<JsonString> = 
  ({value, level}: JsonFunctionParameters<JsonString>) => 
  { return (value === this.init) ? level : value; }
}

export default JsonTransformerLevel;
