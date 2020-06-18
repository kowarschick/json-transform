/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// run: 
//   node examples_cjs/example_template_functions_cjs.js

const 
//JsonTransformerTraversal         = require('@wljkowa/json-transformer/transformer/traversal')
//                                           .JsonTransformerTraversal,
//JsonTransformerLevel             = require('@wljkowa/json-transformer/transformer/string_level')
//                                           .JsonTransformerLevel,
//JsonTransformerTemplateFunctions = require('@wljkowa/json-transformer/transformer/string_template_functions')
//                                           .JsonTransformerTemplateFunctions,
  
  JT                               = require('@wljkowa/json-transformer')
  JsonTransformerTraversal         = JT.JsonTransformerTraversal,
  JsonTransformerLevel             = JT.JsonTransformerLevel,
  JsonTransformerTemplateFunctions = JT.JsonTransformerTemplateFunctions,

  trace = require('./trace_cjs'),
  
  transformer =  
         new JsonTransformerTraversal
             ({ data:            
                { abc:   123, 
                  hello: "Hallo",
                  name:  "Wolfgang",
                  fps:    50, 
                  vpf:   ({value, data}) => 
                         [ value.x/data.fps,
                           value.y/data.fps,
                         ],
                  def:   () => 123,
                }
             })
    .pipe(new JsonTransformerLevel())
    .pipe(new JsonTransformerTemplateFunctions())
    .root
  ;

trace.title('sTemplates with Placeholders ${name(...)} and Function Calls (csj)');

trace.transform(transformer, "${abc}");
trace.transform(transformer, "${hello}, ${name}!");
trace.transform(transformer, "${hello}, ${name}! ${HowAreYou}");
trace.transform(transformer, [["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"]);
trace.transform(transformer, "${vpf({'x':100, 'y':200})}");
trace.transform(transformer, "{v: ${vpf({'x':100, 'y':200})}}");
trace.transform(transformer, {v: "${vpf({'x':100, 'y':200})}"});
trace.transform(transformer, [{v: "${vpf({'x':100, 'y':200})}"}, {a: "${vpf({'x':200, 'y':400})}"}]);
trace.transform(transformer, "${def()}");

trace.end();
