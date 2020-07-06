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
 * The string <code>$level<code> is transformed to the current level number.
 * All other Templates are returned without modification.
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
