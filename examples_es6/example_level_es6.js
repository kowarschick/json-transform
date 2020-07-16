/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// build and run: 
//   npm run examples:es6

//import JsonTransformerTraversal from '@kowarschick/json-transformer/transformer/traversal.js';
//import JsonTransformerLevel     from '@kowarschick/json-transformer/transformer/level.js';

import { JsonTransformerTraversal, JsonTransformerLevel } from '@kowarschick/json-transformer';

import trace from './trace_es6';

const 
  transformer =  
         new JsonTransformerTraversal()
    .pipe(new JsonTransformerLevel())
  ;

trace.title('$level (es6)');

trace.transform(transformer, "$level");
trace.transform(transformer, ["$level", {"level": "$level"}, ["$level", ["$level"]]]);
trace.transform(transformer, ["$level", {"level": "$level"}, ["$level", ["$level", ["$level", {"level": "$level"}, ["$level", ["$level"]]]]]]);

trace.end();
