/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// build and run
//   npm run examples:prod && node examples_es6/examples_bundle_es6.js

import { JsonTransformerTraversal } from '@wljkowa/json-transformer';
import JsonTransformerArraySome     from '@wljkowa/json-transformer/transformer/array_some.js';

import trace from './trace_es6';

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