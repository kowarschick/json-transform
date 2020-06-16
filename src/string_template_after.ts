/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonString, JsonFunction }                   from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
import { JsonTransformerStringTemplate }              from './string_template'

export 
class JsonTransformerStringTemplateAfter extends JsonTransformer
{/**
  * The string <code>init<code> is transformed into the current level number.
  * All other Templates are returned without modification.
  *
  * @param init = '$level'
  */
  constructor (options: JsonTransformerParameters = {}) 
  { super( { ...options, init: options?.init ?? /\${([\w\d@_-]+)}/}); }

  transformerJsonStringAfter: JsonFunction<JsonString> = 
    new JsonTransformerStringTemplate().transformerJsonStringBefore;
}

export default JsonTransformerStringTemplate;
