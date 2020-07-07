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
 * If the length is equal to zero, <code>_.init.default</code> is returned.
 * Otherwise <code>_.init.aggregate</code> is succesively applied to 
 * the aggregation value and the elements of the array.
 * 
 * @param {Partial<JsonFunctionParameters<JsonArray>>} _
 *   An object containing the following attributes.
 * @param {JsonArray}     _.value           
 *   The JSON array to be transformed.
 * @param {Init}          _.init
 * @param {JsonValue}     _.init.default    
 *   The default/start value for empty arrays.
 * @param {JsonNumber}    [_.init.begin = 0]    
 *   The index where to begin the aggregation
 * @param {Function|null} [_.init.initialize = null]
 *   A function <code>(array, begin, default) => defaultValue</code> to set the default value. 
 * @param {Function}      _.init.aggregate  
 *   A function <code>(aggregation, element, array, begin, index) => newAggregation</code>
 *   to compute the aggregation.
 * @param {Function|null} [_.init.finalize = null]
 *   A function <code>(aggregation, array, begin) => result</code>
 *   to finally change the aggregation in one way or another.
 * @param {boolean}       begin             
 *   <code>0</code> in case of regular arrays;
 *   <code>1</code> in case of function call arrays.
 *   This value is added to <code>_.init.begin</code>
 *   
 * @returns {JsonValue}
 */
export 
function aggregate( {value, init}: JsonFunctionParameters<JsonArray>, 
                    begin: number = 0 
                  ): JsonValue
{ const 
    c_init       = init               as InitMap,
    c_default    = c_init.default     as JsonValue,
    c_begin      = ((c_init.begin??0) as number + begin) as number,
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

export
const JsonFunctionMin: JsonFunctionDescriptor =
{ name:     '$min',
  type:     JsonType.Array,
  function: aggregate,
  init:     { default:   Infinity, 
              aggregate: (a: number, b: number) => Math.min(a,b) 
            }
}

export
const JsonFunctionMax: JsonFunctionDescriptor =
{ name:     '$max',
  type:     JsonType.Array,
  function: aggregate,
  init:     { default:   -Infinity, 
              aggregate: (a: number, b: number) => Math.max(a,b) 
            }
}

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

export
const JsonFunctionSum: JsonFunctionDescriptor =
{ name:     '$sum',
  type:     JsonType.Array,
  function: aggregate,
  init    : { default:   0, 
              aggregate: (a: number, b: number): number => a+b
            }
}

export
const JsonFunctionProduct: JsonFunctionDescriptor =
{ name:     '$product',
  type:     JsonType.Array,
  function: aggregate,
  init    : { default:   1, 
              aggregate: (a: number, b: number): number => a*b 
            }
}

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
