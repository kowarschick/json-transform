/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// run: 
//   node examples_cjs/example_string_level_cjs.js

const 
  JT                         = require('@wljkowa/json-transformer')
  JsonTransformerTraversal   = JT.JsonTransformerTraversal,
  JsonTransformerStringLevel = JT.JsonTransformerStringLevel,
  JsonTransformerStringLevel = JT.JsonTransformerStringLevel,
//JsonTransformerTraversal   = require('@wljkowa/json-transformer/transformer/traversal')   .JsonTransformerTraversal,
//JsonTransformerStringLevel = require('@wljkowa/json-transformer/transformer/string_level').JsonTransformerStringLevel,

  trace = require('./trace_cjs'),
  
  transformer =  
         new JsonTransformerTraversal()
    .pipe(new JsonTransformerStringLevel())
    .root
  ;

trace.title('String: $level (csj)');

trace.transform(transformer, "$level");
trace.transform(transformer, ["$level", {"level": "$level"}, ["$level", ["$level"]]]);
trace.transform(transformer, ["$level", {"level": "$level"}, ["$level", ["$level", ["$level", {"level": "$level"}, ["$level", ["$level"]]]]]]);

trace.end();