/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// build and run
//   npm run examples:prod && node examples_es6/examples_bundle_es6.js

//import JsonTransformerTraversal   from '@wljkowa/json-transformer/transformer/traversal.js';
//import JsonTransformerStringLevel from '@wljkowa/json-transformer/transformer/string_level.js';

import { JsonTransformerTraversal, JsonTransformerStringLevel } from '@wljkowa/json-transformer';
import trace from './trace_es6';

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
