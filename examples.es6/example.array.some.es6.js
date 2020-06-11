/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */

// build and run
//   npm run examples:prod && node examples.es6/examples.bundle.es6.js

import JsonTransformerTraversal from '@wljkowa/json/transformer/traversal.js';
import JsonTransformerArraySome from '@wljkowa/json/transformer/array.some.js';

import trace from './trace.es6';

const 
  transformer =  
         new JsonTransformerTraversal()
    .pipe(new JsonTransformerArraySome())
    .root
  ;

trace.title('String: $level (es6)');

trace.transform(transformer, ["$some"]);
trace.transform(transformer, ["$some", 5]);
for (let i = 0; i < 5; i++)
{ trace.transform(transformer, ["$some", 5, 7, 9]); }

trace.end();