/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */

import { JsonFunctionStringParameters }                     from './interfaces';
import { JsonTransformerParameters, JsonTransformerString } from './interfaces';
import { JsonTransformer }                                  from './root';

export 
class JsonTransformerStringLevel extends JsonTransformer
{/**
  * The string <code>option.init<code> is transformed into the current level number.
  * All other Templates are returned without modification.
  *
  * @param options.init = '$level'
  */
  constructor (options: JsonTransformerParameters = {}) 
  { super( { ...options, init: options?.init ?? '$level'}); }

  protected transformStringBefore: JsonTransformerString = 
  ({value, level}: JsonFunctionStringParameters) => 
  { return (value === this.init) ? level : value; }
}

export default JsonTransformerStringLevel;
