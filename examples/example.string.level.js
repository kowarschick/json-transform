/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

 // run: node examples/example.string.level.js

const 
  trace                      = require('./trace'),
  JsonTransformerTraversal   = require('@wljkowa/json/transformer/traversal')   .JsonTransformerTraversal,
  JsonTransformerStringLevel = require('@wljkowa/json/transformer/string.level').JsonTransformerStringLevel,

  transformer =  
         new JsonTransformerTraversal()
    .add(new JsonTransformerStringLevel())
    .root
  ;

trace.title('String: $level');

trace.transform(transformer, "$level");
trace.transform(transformer, ["$level", {"level": "$level"}, ["$level", ["$level"]]]);
trace.transform(transformer, ["$level", {"level": "$level"}, ["$level", ["$level", ["$level", {"level": "$level"}, ["$level", ["$level"]]]]]]);

trace.end();