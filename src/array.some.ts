/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonArray }                                  from './interfaces';
import { JsonFunction, JsonFunctionParameters }       from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';

/**
 * @module module:array_some
 * @description
 * This module contains the class <code>JsonTransformerArraySome</code>.
 */


/**
 * If the first element of the Array is equal to 
 * <code>_.init</code> (default: <code>$some</code>)
 * some of the other elements is returned as value. 
 * If there are no other elements, <code>null</code> 
 * is returned.
 * <p>
 * Otherwise the Array itself is returned as value.
 * <h4>Examples</h4>
 * 
 * ```ts
 * const t1 = new JsonTransformerArraySome();
 * 
 * t1.transform({ value: [ "$some", 4, 5] }) // => 4 or 5
 * t1.transform({ value: [ "$some", 4 ] })   // => 4 
 * t1.transform({ value: [ "$some" ] })      // => null 
 * t1.transform({ value: "abc" })            // => "abc"
 * 
 * const t2 = new JsonTransformerArraySome({ init: '@some' });
 * 
 * t2.transform({ value: [ "@some", 4, 5 ] }) // => 4 or 5
 * t2.transform({ value: [ "$some", 4, 5 ] }) // => [ "$some", 4, 5 ]
 * ```
 *
 * @class
 * @extends  transformer.JsonTransformer
 * @memberof module:array_some
 * @exports  JsonTransformerArraySome
 * 
 * @param {JsonTransformerParameters} _
 * @param {string} [_.init = '$some']
 */
export 
class JsonTransformerArraySome extends JsonTransformer
{ constructor (_: JsonTransformerParameters = {}) 
  { super( { ..._, init: _?.init ?? '$some'}); }

  transformerJsonArrayAfter: JsonFunction<JsonArray> = 
  ({value}: JsonFunctionParameters<JsonArray>) => 
  { const c_length = value.length;
    if (c_length === 0 || value[0] !== this.init)
    { return value; }

    return (c_length === 1) 
           ? null
           : value[Math.floor(Math.random()*(c_length-1))+1];
  }
}

export default JsonTransformerArraySome;
