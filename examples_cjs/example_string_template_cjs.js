/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// run: 
//   node examples_cjs/example_string_template_cjs.js

const 
  JT                            = require('@wljkowa/json-transformer')
  JsonTransformerTraversal      = JT.JsonTransformerTraversal,
  JsonTransformerStringLevel    = JT.JsonTransformerStringLevel,
  JsonTransformerStringTemplate = JT.JsonTransformerStringTemplate,
//JsonTransformerTraversal      = require('@wljkowa/json-transformer/transformer/traversal')      .JsonTransformerTraversal,
//JsonTransformerStringLevel    = require('@wljkowa/json-transformer/transformer/string_level')   .JsonTransformerStringLevel,
//JsonTransformerStringTemplate = require('@wljkowa/json-transformer/transformer/string_template').JsonTransformerStringTemplate,
  
  trace = require('./trace_cjs'),
  
  transformer =  
         new JsonTransformerTraversal({ data:            
                                        { abc:   123,
                                          hello: "Hallo",
                                          name:  "Wolfgang",
                                        }
                                     })
    .pipe(new JsonTransformerStringLevel())
    .pipe(new JsonTransformerStringTemplate())
    .root
  ;

trace.title('String: Templates with Placeholders ${name} (csj)');

trace.transform(transformer, "${abc}");
trace.transform(transformer, "${hello}, ${name}!");
trace.transform(transformer, "${hello}, ${name}! ${HowAreYou}");
trace.transform(transformer, [["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"]);

trace.end();