/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// run: 
//   node examples_cjs/example_some_cjs.js

const 
  { JsonTransformer,
    JsonTransformerTraversal,
    JsonTransformerLevel,
    JsonTransformerSome
  } = 
  require('@kowarschick/json-transformer/'),

  trace = require('./trace_cjs'),
  
  transformer =  
          new JsonTransformerTraversal()
    .pipe(new JsonTransformerSome())
  ;

trace.title('$some (csj)');

trace.transform(transformer, ["$some"]);
trace.transform(transformer, ["$some", 5]);
for (let i = 0; i < 5; i++)
{ trace.transform(transformer, ["$some", 5, 7, 9]); }

trace.title('$level before $some (csj)');

const
  transformer2 =
          new JsonTransformerTraversal()
    .pipe(new JsonTransformerLevel())
    .pipe(new JsonTransformerSome());

for (let i = 0; i < 3; i++)
{ trace.transform(transformer2, ["$some", "$level", ["$level"], [["$level"]]] ); }

for (let i = 0; i < 3; i++)
{ trace.transform(transformer2, { someValue: ["$some", "$level", ["$level"], [["$level"]]] }); }

trace.title('$some before $level (csj)');

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
