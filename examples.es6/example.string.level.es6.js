/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// build and run
//   npm run examples:prod && node examples.es6/examples.bundle.es6.js

import JsonTransformerTraversal   from '@wljkowa/json/transformer/traversal.js';
import JsonTransformerStringLevel from '@wljkowa/json/transformer/string.level.js';

import trace from './trace.es6';

const 
  transformer =  
         new JsonTransformerTraversal()
    .pipe(new JsonTransformerStringLevel())
    .root
  ;

trace.title('String: $level (es6)');

trace.transform(transformer, "$level");
trace.transform(transformer, ["$level", {"level": "$level"}, ["$level", ["$level"]]]);
trace.transform(transformer, ["$level", {"level": "$level"}, ["$level", ["$level", ["$level", {"level": "$level"}, ["$level", ["$level"]]]]]]);

trace.end();
