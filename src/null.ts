/**
 * @module    null
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonNull }                                   from './types';
import { JsonFunction, JsonFunctionParameters }       from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';

/**
 * This transformer does only one trivial transformtion for
 * <code>null</code> values: The non JSON value <code>undefined</code>
 * is transformed to the JSON value <code>null</code>.
 * That transformation is usful as <code>undefined</code> 
 * should not e returned as JSON value. However, if
 * you don't like tha transformation, you can simply define
 * a subclass that overrides the method 
 * <code>transformerJsonNullAfter</code>. All transformer
 * methods that can be overridden are defined in
 * {@link JsonTransformerProperties}.
 * <h4>Examples</h4>
 *
 * ```ts
 * import { JsonTransformer } from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformer();
 * 
 * t.transform({ value: null })        // => null
 * t.transform({ value: undefined })   // => null
 * t.transform({ value: "abc" })       // => "abc"
 * t.transform({ value: [ 1, 2, 3 ] }) // => [ 1, 2, 3 ] 
 * ```
 * @extends  module:transformer.JsonTransformer
 *
 * @param {JsonTransformerParameters} _
*/
export 
class JsonTransformerNull extends JsonTransformer
{/**
  * The string <code>option.init<code> is transformed to the current level number.
  * All other Templates are returned without modification.
  *
  * @param _.init = '$level'
  */
  constructor (_: JsonTransformerParameters = {}) 
  { super(_); }

  transformerJsonNull: JsonFunction<JsonNull> = 
  ({value, level}: JsonFunctionParameters<JsonNull>) => 
  { return null; }
}

export default JsonTransformerNull;
