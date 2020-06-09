/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

 // run: node examples/example.string.level.js

const 
  JsonTransformerTraversal   = require('@wljkowa/json/transformer/traversal')   .JsonTransformerTraversal,
  JsonTransformerStringLevel = require('@wljkowa/json/transformer/string.level').JsonTransformerStringLevel,

  trace                      = require('./trace'),
  
  transformer =  
         new JsonTransformerTraversal()
    .add(new JsonTransformerStringLevel())
    .root
  ;
s
trace.title('String: $level (es6)');

trace.transform(transformer, "$level");
trace.transform(transformer, ["$level", {"level": "$level"}, ["$level", ["$level"]]]);
trace.transform(transformer, ["$level", {"level": "$level"}, ["$level", ["$level", ["$level", {"level": "$level"}, ["$level", ["$level"]]]]]]);

trace.end();