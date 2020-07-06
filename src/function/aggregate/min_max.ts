/**
 * @module    function/min_max
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */


import { JsonType, JsonFunctionDescriptor } from '~/types';
import { aggregate }                        from '../aggregate';

export
const JsonFunctionMin: JsonFunctionDescriptor =
{ name:     '$min',
  type:     JsonType.Array,
  function: aggregate,
  init    : { default:   Infinity, 
              aggregate: (a: number, b: number) => Math.min(a,b) 
            }
}

export
const JsonFunctionMax: JsonFunctionDescriptor =
{ name:     '$max',
  type:     JsonType.Array,
  function: aggregate,
  init    : { default:   -Infinity, 
              aggregate: (a: number, b: number) => Math.max(a,b) 
            }
}

export
const JsonFunctionMinString: JsonFunctionDescriptor =
{ name:     '$min_string',
  type:     JsonType.Array,
  function: aggregate,
  init    : { default:   null, 
              aggregate: (a: string, b: string) => a.localeCompare(b) < 0 
            }
}

export
const JsonFunctionMaxString: JsonFunctionDescriptor =
{ name:     '$max_string',
  type:     JsonType.Array,
  function: aggregate,
  init    : { default:   '', 
              aggregate: (a: string, b: string) => a.localeCompare(b) > 0 
            }
}