/**
 * @module    some
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonArray, JsonObject }                      from './types';
import { JsonFunction, JsonFunctionParameters }       from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';

const SOME = '$some';

/**
 * If the first element of the Array is equal to 
 * ```$some```, some of the other elements 
 * is returned as value. If there are no other 
 * elements, ```null``` is returned.
 * 
 * Otherwise the Array itself is returned as value.
 * 
 * __Examples__
 * 
 * ```ts
 * import { JsonTransformerSome } from '@kowarschick/json-transformer';
 * 
 * const t1 = new JsonTransformerSome();
 * 
 * t1.transform({ value: [ "$some", 4, 5] }) // => 4 or 5
 * t1.transform({ value: [ "$some", 4 ] })   // => 4 
 * t1.transform({ value: [ "$some" ] })      // => null 
 * t1.transform({ value: "abc" })            // => "abc"
 * 
 * const t2 = new JsonTransformerSome({ rename: {$some: '@some'} });
 * 
 * t2.transform({ value: [ "@some", 4, 5 ] }) // => 4 or 5
 * t2.transform({ value: [ "$some", 4, 5 ] }) // => [ "$some", 4, 5 ]
 * ```
 * 
 * @extends  module:transformer.JsonTransformer
 *
 * @param {JsonTransformerParameters} _
 */
export 
class JsonTransformerSome extends JsonTransformer
{ constructor (_: JsonTransformerParameters = {}) 
  { super(_); 
    this.initialize();
  }

  transformerJsonArray: JsonFunction<JsonArray> = 
  ({value}: JsonFunctionParameters<JsonArray>) => 
  { const c_length = value.length;
    if (c_length === 0 || value[0] !== this.rename(SOME))
    { return value; }

    return (c_length === 1) 
           ? null
           : value[Math.floor(Math.random()*(c_length-1))+1];
  }

  transformerJsonObject: JsonFunction<JsonObject> = 
  ({value, data, level}: JsonFunctionParameters<JsonObject>) => 
  { const c_value = this.arrayFunctionValue(SOME, value);

    return  (c_value != null)
            ? this.transformerJsonArray({value: c_value, data, level})
            : value;
  }
}

export default JsonTransformerSome;
