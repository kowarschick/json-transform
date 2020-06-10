/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

// run: 
//   node examples.cjs/example.array.some.cjs.js

const 
  JsonTransformerTraversal = require('@wljkowa/json/transformer/traversal') .JsonTransformerTraversal,
  JsonTransformerArraySome = require('@wljkowa/json/transformer/array.some').JsonTransformerArraySome,

  trace                    = require('./trace.cjs'),
  
  transformer =  
         new JsonTransformerTraversal()
    .add(new JsonTransformerArraySome())
    .root
  ;

trace.title('String: $level (csj)');

trace.transform(transformer, ["$some"]);
trace.transform(transformer, ["$some", 5]);
for (let i = 0; i < 5; i++)
{ trace.transform(transformer, ["$some", 5, 7, 9]); }

trace.end();