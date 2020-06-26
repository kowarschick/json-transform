/**
 * @module    function/some
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonType, JsonArray, JsonValue, JsonFunctionParameters } from '../types';

export function some(value: JsonArray, begin: number = 0): JsonValue
{ const c_length = value.length;
  return (c_length === begin) 
         ? null
         : value[Math.floor(Math.random()*(c_length-begin))+begin];
}

/**
 * @function 
 * @description
 * If the first element of the Array is equal to 
 * <code>JsonFunctionSome.init.function</code> (default: <code>$some</code>)
 * some of the other elements is returned as value. 
 * If there are no other elements, <code>null</code> 
 * is returned.
 * <p>
 * Otherwise the Array itself is returned as value.
 * <h4>Examples</h4>
 * 
 * ```ts
 * import { JsonTransformerFunction } from '@wljkowa/json-transformer';
 * import { JsonTransformerSome }     from '@wljkowa/json-transformer';
 * 
 * const t = new JsonTransformerFunction
 *           ({init: { functions: [ JsonFunctionSome ] } })
 * 
 * t.transform({ value: [ "$some", 4, 5] }) // => 4 or 5
 * t.transform({ value: [ "$some", 4 ] })   // => 4 
 * t.transform({ value: [ "$some" ] })      // => null 
 * t.transform({ value: "abc" })            // => "abc"
 * 
 * JsonFunctionSome.init.function = "@some";
 * 
 * t.transform({ value: [ "@some", 4, 5 ] }) // => 4 or 5
 * t.transform({ value: [ "$some", 4, 5 ] }) // => [ "$some", 4, 5 ]
 * ```
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray} _value
 *   The JSON array to be transformed.
 */
export function JsonFunctionSome({value, init}: JsonFunctionParameters<JsonArray>)
{ if (value.length === 0 || value[0] !== init?.name)
  { return value; }

  return some(value, 1);
}

JsonFunctionSome.type = JsonType.Array;
JsonFunctionSome.name = "$some";

Object.freeze(JsonFunctionSome);

export default JsonFunctionSome;
