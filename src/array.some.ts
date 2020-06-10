/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */

import { JsonFunctionArrayParameters }                     from './interfaces';
import { JsonTransformerParameters, JsonTransformerArray } from './interfaces';
import { JsonTransformer }                                 from './root';

export 
class JsonTransformerArraySome extends JsonTransformer
{/**
  * If the first element of the Array is equal to 
  * <code>JsonFunctionArraySome.init<code> (<code>$some</code>)
  * some of the other elements is returned as value. 
  * If there are no other elements, <code>undefined</code> 
  * is returned.
  * 
  * Otherwise the Array itself is returned as value.
  *
  * @param options.init = '$some'
  */
  constructor (options: JsonTransformerParameters = {}) 
  { super( { ...options, init: options?.init ?? '$some'}); }

  protected transformArrayAfter: JsonTransformerArray = 
  ({value}: JsonFunctionArrayParameters) => 
  { const c_length = value.length;
    if (c_length === 0 || value[0] !== this.init)
    { return value; }

    return (c_length === 1) 
           ? undefined
           : value[Math.floor(Math.random()*(c_length-1))+1];
  }
}

export default JsonTransformerArraySome;
