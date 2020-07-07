/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// run: 
//   node examples_cjs/example_level_cjs.js

const 
/*JsonTransformerTraversal = require('@wljkowa/json-transformer/transformer/traversal').JsonTransformerTraversal,
  JsonTransformerLevel     = require('@wljkowa/json-transformer/transformer/level')    .JsonTransformerLevel,
*/
  JT                       = require('@wljkowa/json-transformer')
  JsonTransformerTraversal = JT.JsonTransformerTraversal,
  JsonTransformerLevel     = JT.JsonTransformerLevel,

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