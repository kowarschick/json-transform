/**
 * @module    function/min_max
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */


import { JsonType, JsonFunctionDescriptor } from '~/types';
import { aggregate }                        from '../aggregate';

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