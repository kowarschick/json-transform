/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// run: 
//   node examples_cjs/example_template_cjs.js

const 
//JsonTransformerTraversal      = require('@wljkowa/json-transformer/transformer/traversal').JsonTransformerTraversal,
//JsonTransformerLevel    = require('@wljkowa/json-transformer/transformer/string_level')   .JsonTransformerLevel,
//JsonTransformerTemplate = require('@wljkowa/json-transformer/transformer/string_template').JsonTransformerTemplate,

  JT                       = require('@wljkowa/json-transformer')
  JsonTransformerTraversal = JT.JsonTransformerTraversal,
  JsonTransformerLevel     = JT.JsonTransformerLevel,
  JsonTransformerTemplate  = JT.JsonTransformerTemplate,
  
  trace = require('./trace_cjs'),
  
  transformer =  
         new JsonTransformerTraversal({ data:            
                                        { abc:   123,
                                          hello: "Hallo",
                                          name:  "Wolfgang",
                                        }
                                     })
    .pipe(new JsonTransformerLevel())
    .pipe(new JsonTransformerTemplate())
  ;

trace.title('Templates with Placeholders ${name} (csj)');

trace.transform(transformer, "${abc}");
trace.transform(transformer, "${hello}, ${name}!");
trace.transform(transformer, "${hello}, ${name}! ${HowAreYou}");
trace.transform(transformer, [["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"]);

trace.end();
