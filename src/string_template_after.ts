/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonString, JsonFunction }      from './interfaces';
import { JsonTransformerParameters }     from './transformer';
import { JsonTransformerStringTemplate } from './string_template'

export 
class JsonTransformerStringTemplateAfter extends JsonTransformerStringTemplate
{/**
  * The string <code>init<code> is transformed into the current level number.
  * All other Templates are returned without modification.
  *
  * @param init = /\${([\w\d@_-]+)}/
  */
  constructor (_: JsonTransformerParameters = {}) { super(_); }

  transformerJsonStringAfter: JsonFunction<JsonString> = 
    this.transformerJsonStringBefore;
}

export default JsonTransformerStringTemplate;
