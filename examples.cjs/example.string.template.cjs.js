/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */

// run: 
//   node examples.cjs/example.string.template.cjs.js

const 
  JsonTransformerTraversal      = require('@wljkowa/json/transformer/traversal')      .JsonTransformerTraversal,
  JsonTransformerStringLevel    = require('@wljkowa/json/transformer/string.level')   .JsonTransformerStringLevel,
  JsonTransformerStringTemplate = require('@wljkowa/json/transformer/string.template').JsonTransformerStringTemplate,
  
  trace = require('./trace.cjs'),
  
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
