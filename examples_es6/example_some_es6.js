/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// build and run
//   npm run examples:prod && node examples_es6/examples_bundle_es6.js

import { JsonTransformer }          from '@wljkowa/json-transformer';
import { JsonTransformerTraversal } from '@wljkowa/json-transformer';
import { JsonTransformerSome }      from '@wljkowa/json-transformer';
import { JsonTransformerLevel }     from '@wljkowa/json-transformer';

import trace from './trace_es6';

const 
  transformer =  
          new JsonTransformerTraversal()
    .pipe(new JsonTransformerSome())
  ;

trace.title('$some (es6)');

trace.transform(transformer, ["$some"]);
trace.transform(transformer, ["$some", 5]);
for (let i = 0; i < 5; i++)
{ trace.transform(transformer, ["$some", 5, 7, 9]); }

trace.title('$level before $some (es6)');

const
  transformer2 =
          new JsonTransformerTraversal()
    .pipe(new JsonTransformerLevel())
    .pipe(new JsonTransformerSome());

for (let i = 0; i < 3; i++)
{ trace.transform(transformer2, ["$some", "$level", ["$level"], [["$level"]]] ); }

for (let i = 0; i < 3; i++)
{ trace.transform(transformer2, { someValue: ["$some", "$level", ["$level"], [["$level"]]] }); }

trace.title('$some before $level (es6)');

const
  transformer3 =   
            new JsonTransformer()
      .pipe(new JsonTransformerTraversal().pipe(new JsonTransformerSome()),
            new JsonTransformerTraversal().pipe(new JsonTransformerLevel()), 
           );

for (let i = 0; i < 3; i++)
{ trace.transform(transformer3, ["$some", "$level", ["$level"], [["$level"]]] ); }

for (let i = 0; i < 3; i++)
{ trace.transform(transformer3, { someValue: ["$some", "$level", ["$level"], [["$level"]]] }); }      

trace.end();