/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// run: 
//   node examples_cjs/example_array_some_cjs.js

const 
  JT                         = require('@wljkowa/json-transformer')
  JsonTransformerTraversal   = JT.JsonTransformerTraversal,
  JsonTransformerArraySome   = JT.JsonTransformerArraySome,
  JsonTransformerStringLevel = JT.JsonTransformerStringLevel,
//JsonTransformerTraversal   = require('@wljkowa/json-transformer/transformer/traversal') .JsonTransformerTraversal,
//JsonTransformerArraySome   = require('@wljkowa/json-transformer/transformer/array_some').JsonTransformerArraySome,
//JsonTransformerStringLevel = require('@wljkowa/json-transformer/transformer/string_level').JsonTransformerStringLevel,

  trace = require('./trace_cjs'),
  
  transformer =  
         new JsonTransformerTraversal()
    .pipe(new JsonTransformerArraySome())
    .root
  ;

trace.title('String: $level (csj)');

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
