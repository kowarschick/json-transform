/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonString }                                 from './interfaces';
import { JsonFunction, JsonFunctionParameters }       from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';

export 
class JsonTransformerStringLevel extends JsonTransformer<JsonString>
{/**
  * The string <code>option.init<code> is transformed into the current level number.
  * All other Templates are returned without modification.
  *
  * @param options.init = '$level'
  */
  constructor (options: JsonTransformerParameters = {}) 
  { super( { ...options, init: options?.init ?? '$level'}); }

  transformerJsonStringBefore: JsonFunction<JsonString> = 
  ({value, level}: JsonFunctionParameters<JsonString>) => 
  { return (value === this.init) ? level : value; }
}

export default JsonTransformerStringLevel;
