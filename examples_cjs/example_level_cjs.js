/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// run: 
//   node examples_cjs/example_level_cjs.js

const 
  { JsonTransformerTraversal,
    JsonTransformerLevel,
  } = 
  require('@kowarschick/json-transformer/'),

  trace = require('./trace_cjs'),
  
  transformer =  
         new JsonTransformerTraversal()
    .pipe(new JsonTransformerLevel())
  ;

trace.title('$level (csj)');

trace.transform(transformer, "$level");
trace.transform(transformer, ["$level", {"level": "$level"}, ["$level", ["$level"]]]);
trace.transform(transformer, ["$level", {"level": "$level"}, ["$level", ["$level", ["$level", {"level": "$level"}, ["$level", ["$level"]]]]]]);

trace.end();