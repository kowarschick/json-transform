/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// build and run
//   npm run examples:prod && node examples_es6/examples_bundle_es6.js

//import { JsonTransformerTraversal } from '@wljkowa/json-transformer/transformer/traversal';
//import JsonTransformerTraversal     from '@wljkowa/json-transformer/transformer/traversal';
import { JsonTransformerTraversal }   from '@wljkowa/json-transformer';
import { JsonTransformerArraySome }   from '@wljkowa/json-transformer';
import { JsonTransformerStringLevel } from '@wljkowa/json-transformer';

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

const
  transformer2 =
          new JsonTransformerTraversal()
    .pipe(new JsonTransformerStringLevel())
    .pipe(new JsonTransformerArraySome())
    .root;

for (let i = 0; i < 3; i++)
{ trace.transform(transformer2, ["$some", "$level", ["$level"], [["$level"]]] ); }

for (let i = 0; i < 3; i++)
{ trace.transform(transformer2, { someValue: ["$some", "$level", ["$level"], [["$level"]]] }); }

trace.end();