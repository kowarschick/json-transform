/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

import { Data }                                             from './interfaces';
import { JsonTransformerParameters, JsonTransformerString } from './interfaces';
import { JsonTransformer }                                  from './root';

export 
class JsonTransformerStringLevel extends JsonTransformer
{/**
  * The string <code>init<code> is transformed into the current level number.
  * All other Templates are returned without modification.
  *
  * $param init = '$level'
  */
  constructor
  ( options: JsonTransformerParameters = {}) 
  { super( { ...options, init: options?.init ?? '$level'}); }

  protected transformStringBefore: JsonTransformerString = 
  (value: string, data: Data, level: number) => 
  { return (value === this.init) ? level : value; }
}
