/**
 * @module    random
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import { JsonObject }                                 from './interfaces';
import { JsonFunction, JsonFunctionParameters }       from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';

/**
 * Computes random numbers within intervals.
 * 
 * @extends  module:transformer.JsonTransformer
 *
 * @param {JsonTransformerParameters} _
 * @param {Object}          _.init
 * @param {string}          [_.init.functionAttr  = "$function"]
 * @param {string}          [_.init.function      = "$random"]
 * @param {string}          [_.init.minAttr       = "$min"]
 * @param {string}          [_.init.min           = 0]
 * @param {string}          [_.init.maxAttr       = "$max"]
 * @param {string}          [_.init.max           = 1]
 * @param {string}          [_.init.isIntegerAttr = "$isInteger"]
 * @param {string}          [_.init.isInteger     = false]
 * @param {string}          [_.init.scaleAttr     = "$sacle"]
 * @param {string}          [_.init.scale         = null]
 * @param {string}          [_.init.gzpAttr       = "$gzp" ] 
 * @param {string}          [_.init.gzp           = 1 ] 
 *                          the „greater zero prabability“ defines 
 *                          the propability that the resulting value
 *                          is not multiplied by <code>-1</code> 
 * @param {Data}            [_.data        = {}]
 * @param {number}          [_.level       = 0]
 * @param {JsonTransformer} [_.transformer = undefined]
*/
export 
class JsonTransformerRandom extends JsonTransformer
{ constructor (_: JsonTransformerParameters = {}) 
  { super({ ..._,
            init: 
            { functionAttr:  _?.init?.functionAttr   ?? "$function",
              function:      _?.init?.function       ?? "$random",
              minAttr:       _?.init?.minAttr        ?? "$min",
              min:           _?.init?.min            ?? 0,
              maxAttr:       _?.init?.maxAttr        ?? "$max",
              max:           _?.init?.max            ?? 1,
              isIntegerAttr: _?.init?.isIntegerAttr  ?? "$isInteger",
              isInteger:     _?.init?.isInteger      ?? false,
              sacleAttr:     _?.init?.sacle          ?? "$sacle",
              sacle:         _?.init?.sacle          ?? null,
              gzpAttr:       _?.init?.gzp            ?? "$gzp",
              gzp:           _?.init?.gzp            ?? 1,
            }   
         }); 
  }

  transformerJsonObject: JsonFunction<JsonObject> = 
  ({value}: JsonFunctionParameters<JsonObject>) => 
  { const 
      c_init = this.init,
      c_min  = value?.[c_init.minAttr] ?? c_init.min,
      c_max  = value?.[c_init.maxAttr] ?? c_init.max;

    if (   value?.[c_init.functionAttr] !== c_init.function 
        || !Number.isFinite(c_min)
        || !Number.isFinite(c_max)
       )
    return value;

    { const
        c_is_integer =            value?.[c_init.isIntegerAttr] ?? c_init.isInteger,
        c_gzp        =            value?.[c_init.gzpr]          ?? c_init.gzp,
        c_scale      = this.data[ value?.[c_init.scaleAttr]     ?? c_init.scale   ];
      let
        l_result;

      if (c_is_integer)
      { l_result = Math.floor(c_min + Math.random() * (c_max + 1 - c_min)); }
      else
      { l_result = c_min + Math.random() * (c_max - c_min); }
  
      if (Number.isFinite(c_gzp) && 0 <= c_gzp && c_gzp < 1)
      { l_result *= (Math.random() >= c_gzp) ? 1 : -1; }
  
      return Number.isFinite(c_scale) ? l_result * (c_scale as number) : l_result;
    }
    
    return value;
  }
}

export default JsonTransformerRandom;


