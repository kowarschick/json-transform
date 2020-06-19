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
 * @param {string}          [_.init.function     = "$function"]
 * @param {string}          [_.init.functionName = "$random"]
 * @param {string}          [_.init.min          = "$min"]
 * @param {string}          [_.init.max          = "$max"]
 * @param {string}          [_.init.isInteger    = "$isInteger"]
 * @param {string}          [_.init.gzp          = "$gzp" ] 
 *                          the „greater zero prabability“ defines 
 *                          the propability that the resulting value
 *                          is not multiplied by <code>-1</code> 
 * @param {string}          [_.init.scale         = "$sacle"]
 * @param {Data}            [_.data        = {}]
 * @param {number}          [_.level       = 0]
 * @param {JsonTransformer} [_.transformer = undefined]
*/
export 
class JsonTransformerRandom extends JsonTransformer
{ constructor (_: JsonTransformerParameters = {}) 
  { super({ ..._,
            init: 
            { function:     _?.init?.function     ?? "$function",
              functionName: _?.init?.functionName ?? "$random",
              min:          _?.init?.min          ?? "$min",
              max:          _?.init?.max          ?? "$mac",
              isInteger:    _?.init?.isInteger    ?? "$isInteger",
              gzp:          _?.init?.gzp          ?? "$gzp",
              sacle:        _?.init?.sacle        ?? "$sacle",
            } 
         }); 
  }

  transformerJsonObject: JsonFunction<JsonObject> = 
  ({value}: JsonFunctionParameters<JsonObject>) => 
  { let l_value = 0;
    
    return l_value;
  }
}

export default JsonTransformerSome;

/*
if (p_config instanceof Object)
  { if (p_config['@min'] != null && f_is_special('@min') && f_is_special('@max'))
    { const
        c_min = m_concretize
                ({config:      p_config['@min'],
                  environment: p_environment,
                  specials:    p_specials,
                  level:       l_level,
                  info:        p_info
                }),
        c_max = m_concretize
                ({config:      p_config['@max'],
                  environment: p_environment,
                  specials:    p_specials,
                  level:       l_level,
                  info:        p_info
                });
  
      if (Number.isFinite(c_min) && Number.isFinite(c_max))
      { const
          c_is_int = (p_config['@integer'] === true),
          c_is_relative = p_config['@relative'],
          c_positive = p_config['@positive'];
        let
          l_result;
    
        if (c_is_int)
        { l_result = Math.floor(c_min + Math.random() * (c_max + 1 - c_min)); }
        else
        { l_result = c_min + Math.random() * (c_max - c_min); }
    
        if (Number.isFinite(c_positive))
        { l_result *= (Math.random() >= c_positive) ? 1 : -1; }
    
        if (    c_is_relative
             && p_environment !== null
             && p_environment[c_is_relative] !== null
           )
        { return l_result * (p_environment[c_is_relative]); }
        else
        { return l_result; }
      }
    }
*/
