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
 * ```null``` values: The non JSON value ```undefined```
 * is transformed to the JSON value ```null```.
 * That transformation is usful as ```undefined``` 
 * should not e returned as JSON value. However, if
 * you don't like tha transformation, you can simply define
 * a subclass that overrides the method 
 * ```transformerJsonNullAfter```. All transformer
 * methods that can be overridden are defined in
 * {@link JsonTransformerProperties}.
 * 
 * __Examples__
 *
 * ```ts
 * import { JsonTransformerNull } from '@kowa/json-transformer';
 * 
 * const t = new JsonTransformerNull();
 * 
 * t.transform({ value: null })        // => null
 * t.transform({ value: undefined })   // => null
 * t.transform({ value: "abc" })       // => "abc"
 * t.transform({ value: [ 1, 2, 3 ] }) // => [ 1, 2, 3 ] 
 * ```
 * 
 * @extends  module:transformer.JsonTransformer
 *
 * @param {JsonTransformerParameters} _
*/
export 
class JsonTransformerNull extends JsonTransformer
{/**
  * The non-JSON value ```undefined``` is replaced by 
  * the JSON value ```null```.
  *
  * @extends  module:transformer.JsonTransformer
  *
  * @param {JsonTransformerParameters} _
  */
  constructor (_: JsonTransformerParameters = {}) 
  { super(_); 
    this.initialize();
  }

  transformerJsonNull: JsonFunction<JsonNull> = 
  ({}: JsonFunctionParameters<JsonNull>) => 
  { return null; }
}

export default JsonTransformerNull;
