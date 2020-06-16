/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// run: 
//   node examples_cjs/example_array_some_cjs.js

const 
  WLJKOWA_JSON             = require('@wljkowa/json-transformer')
  JsonTransformerTraversal = WLJKOWA_JSON.JsonTransformerTraversal,
  JsonTransformerArraySome = WLJKOWA_JSON.JsonTransformerArraySome,
//JsonTransformerTraversal = require('@wljkowa/json-transformer/transformer/traversal') .JsonTransformerTraversal,
//JsonTransformerArraySome = require('@wljkowa/json-transformer/transformer/array_some').JsonTransformerArraySome,

  trace                    = require('./trace_cjs'),
  
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

trace.end();