/**
 * @module    function/aggregate
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonType, JsonFunctionDescriptor, InitMap } from '../types';
import { JsonArray, JsonValue }                      from '../types';
import { JsonFunctionParameters }                    from '../types';

/**
 * @function 
 * @description
 * Aggregates an array of JSON values to one JSON value.
 * If the length is equal to zero, ```_.init.default``` is returned.
 * Optionally, a initialization function can be stated to compute the default value.
 * Otherwise ```_.init.aggregate``` is succesively applied to 
 * the aggregation value and the elements of the array. Optionally, 
 * a finalization function can be used to further process the result 
 * of the aggregation.
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray}     _.value           
 *   The JSON array to be transformed.
 * @param {Init}          _.init
 * @param {JsonNumber}    [_.init.begin = 0]    
 *   The index where to begin the aggregation.
 * @param {JsonValue}     _.init.default    
 *   The default/start value for empty arrays (i.e., if ```_.init.begin >= _.value.length```).
 * @param {Function|null} [_.init.initialize = null]
 *   A function ```(array, begin, default) => defaultValue``` to compute a default value. 
 *   This is useful if the default value depends on the JSON array.
 * @param {Function}      _.init.aggregate  
 *   A function ```(aggregation, element, array, begin, index) => newAggregation```
 *   to compute the aggregation.
 * @param {Function|null} [_.init.finalize = null]
 *   A function ```(aggregation, array, begin) => result```
 *   to finally change the aggregation in one way or another.
 * @param {boolean}       begin             
 *   ```0``` in case of regular arrays;
 *   ```1``` in case of function call arrays (```['$function', value1, value2, ...]```).
 *   This value is added to ```_.init.begin```
 *   
 * @returns {JsonValue}
 */
export 
function aggregate( {value, init}: JsonFunctionParameters<JsonArray>, 
                    begin: number = 0 
                  ): JsonValue
{ const 
    c_init       = init               as InitMap,
    c_begin      = ((c_init.begin??0) as number + begin) as number,
    c_default    = c_init.default     as JsonValue,
    c_initialize = c_init.initialize  as Function|null,
    c_aggregate  = c_init.aggregate   as Function,
    c_finalize   = c_init.finalize    as Function|null;

  if (typeof c_aggregate === 'function')
  { let l_aggregation: JsonValue = 
        (c_initialize != null)
        ? c_initialize(value, c_begin, c_default)
        : c_default;

    for (let i: number = c_begin, n = value.length; i < n; i++)
    { l_aggregation = c_aggregate(l_aggregation, value[i], value, c_begin, i) }

    if (c_finalize != null)
    { l_aggregation = c_finalize(l_aggregation, value, c_begin) }

    return l_aggregation     
  }
  else
  { return c_default }                
}

/**
 * This constant defines the minimum aggregator. It returns
 * the minimum value of an array of numbers. If the array has no
 * elements, ```Number.MAX_VALUE``` is returned.
 *
 * __Examples__ 
 *
 * ```ts
 * import { JsonTransformerFunction } from '@kowarschick/json-transformer';
 * import { sonFunctionMin }          from '@kowarschick/json-transformer';
 * 
 * const t = new JsonTransformerFunction({ init: [JsonFunctionMin] });
 * 
 * t.transform({ value: ["$min", 5, 4] }); // => 4
 * t.transform({ value: ["$min", 5] });    // => 5 
 * t.transform({ value: ["$min"] });       // => 1.7976931348623157e+308
 * 
 * t.transform({ value: 
 *               { "$function": "$min"
 *                 "$value":    [5, 4] 
 *               }
 *            });                          // => 4
 * t.transform({ value: 
 *               { "$function": "$min"
 *                 "$value":    [5] 
 *               }
 *            });                          // => 5
 * t.transform({ value: 
 *               { "$function": "$min"
 *                 "$value":    [] 
 *               }
 *            });                          // => 1.7976931348623157e+308
 * ```
 *
 * @constant
 * @type {JsonFunctionDescriptor}
 */
export
const JsonFunctionMin: JsonFunctionDescriptor =
{ name:     '$min',
  type:     JsonType.Array,
  function: aggregate,
  init:     { default:   Number.MAX_VALUE, 
              aggregate: (a: number, b: number) => Math.min(a,b) 
            }
}

/**
 * This constant defines the maximium aggregator. It returns
 * the maximum value of an array of numbers. If the array has no
 * elements, ```-Number.MAX_VALUE``` is returned.
*
 * __Examples__ 
 *
 * ```ts
 * import { JsonTransformerFunction } from '@kowarschick/json-transformer';
 * import { sonFunctionMax }          from '@kowarschick/json-transformer';
 * 
 * const t = new JsonTransformerFunction({ init: [JsonFunctionMax] });
 * 
 * t.transform({ value: ["$max", 5, 4] }); // => 4
 * t.transform({ value: ["$max", 5] });    // => 5 
 * t.transform({ value: ["$max"] });       // => 1.7976931348623157e+308
 * 
 * t.transform({ value: 
 *               { "$function": "$max"
 *                 "$value":    [5, 4] 
 *               }
 *            });                          // => 4
 * t.transform({ value: 
 *               { "$function": "$max"
 *                 "$value":    [5] 
 *               }
 *            });                          // => 5
 * t.transform({ value: 
 *               { "$function": "$max"
 *                 "$value":    [] 
 *               }
 *            });                          // => 1.7976931348623157e+308
 * ```
 * 
 * @constant
 * @type {JsonFunctionDescriptor}
 */
export
const JsonFunctionMax: JsonFunctionDescriptor =
{ name:     '$max',
  type:     JsonType.Array,
  function: aggregate,
  init:     { default:   -Number.MAX_VALUE, 
              aggregate: (a: number, b: number) => Math.max(a,b) 
            }
}

/**
 * This constant defines the minimum string aggregator. It returns
 * the minimum value of an array of strings, which are compared
 * by ```localeCompare```. If the array has no
 * elements, ```null``` is returned.
 *
 * __Examples__ 
 *
 * ```ts
 * import { JsonTransformerFunction } from '@kowarschick/json-transformer';
 * import { sonFunctionMinString }    from '@kowarschick/json-transformer';
 * 
 * const t = new JsonTransformerFunction({ init: [JsonFunctionMinString] });
 * 
 * t.transform({ value: ["$min_string", "b", "a"] }); // => "a"
 * t.transform({ value: ["$min_string", "b"] });      // => "b" 
 * t.transform({ value: ["$min_string"] });           // => null
 * 
 * t.transform({ value: 
 *               { "$function": "$min_string"
 *                 "$value":    ["b", "a"] 
 *               }
 *            });                                     // => "a"
 * t.transform({ value: 
 *               { "$function": "$min_string"
 *                 "$value":    ["b"] 
 *               }
 *            });                                     // => "b"
 * t.transform({ value: 
 *               { "$function": "$min_string"
 *                 "$value":    [] 
 *               }
 *            });                                     // => null
 * ```
 * 
 * @constant
 * @type {JsonFunctionDescriptor}
 */
export
const JsonFunctionMinString: JsonFunctionDescriptor =
{ name:     '$min_string',
  type:     JsonType.Array,
  function: aggregate,
  init:     { default:    null,
              begin:      1,
              initialize: (array: JsonArray, begin: number) => 
                          (array.length > begin) ? array[begin] : null,
              aggregate:  (a: string, b: string) => (a.toString().localeCompare(b) < 0) ? a : b 
              // cmp. https://github.com/witheve/Eve/issues/232
            }
}

/**
 * This constant defines the maximum string aggregator. It returns
 * the maximum value of an array of strings. If the array has no
 * elements, ```null``` is returned.
 *
 * __Examples__ 
 *
 * ```ts
 * import { JsonTransformerFunction } from '@kowarschick/json-transformer';
 * import { sonFunctionMaxString }    from '@kowarschick/json-transformer';
 * 
 * const t = new JsonTransformerFunction({ init: [JsonFunctionMaxString] });
 * 
 * t.transform({ value: ["$max_string", "b", "a"] }); // => "b"
 * t.transform({ value: ["$max_string", "b"] });      // => "b" 
 * t.transform({ value: ["$max_string"] });           // => null
 * 
 * t.transform({ value: 
 *               { "$function": "$max_string"
 *                 "$value":    ["b", "a"] 
 *               }
 *            });                                     // => "b"
 * t.transform({ value: 
 *               { "$function": "$max_string"
 *                 "$value":    ["b"] 
 *               }
 *            });                                     // => "b"
 * t.transform({ value: 
 *               { "$function": "$max_string"
 *                 "$value":    [] 
 *               }
 *            });                                     // => null
 * ```
 * 
 * @constant
 * @type {JsonFunctionDescriptor}
 */
export
const JsonFunctionMaxString: JsonFunctionDescriptor =
{ name:     '$max_string',
  type:     JsonType.Array,
  function: aggregate,
  init:     { default:    null,
              begin:      1,
              initialize: (array: JsonArray, begin: number) => 
                          (array.length > begin) ? array[begin] : null,
              aggregate: (a: string, b: string) => (a.toString().localeCompare(b) > 0) ? a : b
              // cmp. https://github.com/witheve/Eve/issues/232
            }
}

/**
 * This constant defines the sum aggregator. It returns
 * the sum of the elements of an array of numbers. If the array has no
 * elements, ```0``` is returned.
 * 
 * __Examples__ 
 *
 * ```ts
 * import { JsonTransformerFunction } from '@kowarschick/json-transformer';
 * import { sonFunctionSum }          from '@kowarschick/json-transformer';
 * 
 * const t = new JsonTransformerFunction({ init: [JsonFunctionSum] });
 * 
 * t.transform({ value: ["$sum", 5, 4] }); // => 9
 * t.transform({ value: ["$sum", 5] });    // => 5 
 * t.transform({ value: ["$sum"] });       // => 0
 * 
 * t.transform({ value: 
 *               { "$function": "$sum"
 *                 "$value":    [5, 4] 
 *               }
 *            });                          // => 9
 * t.transform({ value: 
 *               { "$function": "$sum"
 *                 "$value":    [5] 
 *               }
 *            });                          // => 5
 * t.transform({ value: 
 *               { "$function": "$sum"
 *                 "$value":    [] 
 *               }
 *            });                          // => 0
 * ```
 *
 * @constant
 * @type {JsonFunctionDescriptor}
 */
export
const JsonFunctionSum: JsonFunctionDescriptor =
{ name:     '$sum',
  type:     JsonType.Array,
  function: aggregate,
  init    : { default:   0, 
              aggregate: (a: number, b: number): number => a+b
            }
}

/**
 * This constant defines the product aggregator. It returns
 * the product of the elements of an array of numbers. If the array has no
 * elements, ```1``` is returned.
 *  
 * __Examples__ 
 *
 * ```ts
 * import { JsonTransformerFunction } from '@kowarschick/json-transformer';
 * import { sonFunctionProduct }      from '@kowarschick/json-transformer';
 * 
 * const t = new JsonTransformerFunction({ init: [JsonFunctionProduct] });
 * 
 * t.transform({ value: ["$product", 5, 4] }); // => 20
 * t.transform({ value: ["$product", 5] });    // => 5 
 * t.transform({ value: ["$product"] });       // => 1
 * 
 * t.transform({ value: 
 *               { "$function": "$product"
 *                 "$value":    [5, 4] 
 *               }
 *            });                              // => 20
 * t.transform({ value: 
 *               { "$function": "$product"
 *                 "$value":    [5] 
 *               }
 *            });                              // => 5
 * t.transform({ value: 
 *               { "$function": "$product"
 *                 "$value":    [] 
 *               }
 *            });                              // => 1
 * ```
 *
 * @constant
 * @type {JsonFunctionDescriptor}
 */
export
const JsonFunctionProduct: JsonFunctionDescriptor =
{ name:     '$product',
  type:     JsonType.Array,
  function: aggregate,
  init    : { default:   1, 
              aggregate: (a: number, b: number): number => a*b 
            }
}

/**
 * This constant defines the average aggregator. It returns
 * the average of the elements of an array of numbers. The average 
 * of an empty array is not defined (```NaN```).
 *  
 * __Examples__ 
 *
 * ```ts
 * import { JsonTransformerFunction } from '@kowarschick/json-transformer';
 * import { JsonFunctionAverage }     from '@kowarschick/json-transformer';
 * 
 * const t = new JsonTransformerFunction({ init: [JsonFunctionAverage] });
 * 
 * t.transform({ value: ["$average", 5, 4] }); // => 4.5
 * t.transform({ value: ["$average", 5] });    // => 5 
 * t.transform({ value: ["$average"] });       // => NaN
 * 
 * t.transform({ value: 
 *               { "$function": "$average"
 *                 "$value":    [5, 4] 
 *               }
 *            });                              // => 4.5
 * t.transform({ value: 
 *               { "$function": "$average"
 *                 "$value":    [5] 
 *               }
 *            });                              // => 5
 * t.transform({ value: 
 *               { "$function": "$average"
 *                 "$value":    [] 
 *               }
 *            });                              // => NaN
 * ```
 *
 * @constant
 * @type {JsonFunctionDescriptor}
 */
export
const JsonFunctionAverage: JsonFunctionDescriptor =
{ name:     '$average',
  type:     JsonType.Array,
  function: aggregate,
  init    : { default:   0, 
              aggregate: (a: number, b: number): number => a+b,
              finalize:  (aggregation: number, array: JsonArray, begin: number) =>
                         aggregation/(array.length-begin)
            }
}

export default JsonFunctionMin;
