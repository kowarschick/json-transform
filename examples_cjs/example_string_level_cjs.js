/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// run: 
//   node examples_cjs/example_string_level_cjs.js

const 
  WLJKOWA_JSON               = require('@wljkowa/json')
  JsonTransformerTraversal   = WLJKOWA_JSON.JsonTransformerTraversal,
  JsonTransformerStringLevel = WLJKOWA_JSON.JsonTransformerStringLevel,
//JsonTransformerTraversal   = require('@wljkowa/json/transformer/traversal')   .JsonTransformerTraversal,
//JsonTransformerStringLevel = require('@wljkowa/json/transformer/string_level').JsonTransformerStringLevel,

  trace                      = require('./trace_cjs'),
  
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