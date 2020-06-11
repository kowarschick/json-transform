/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */

// run: 
//   node examples.cjs/example.string.template.functions.cjs.js

const 
  JsonTransformerTraversal               = require('@wljkowa/json/transformer/traversal')
                                             .JsonTransformerTraversal,
  JsonTransformerStringLevel             = require('@wljkowa/json/transformer/string.level')
                                             .JsonTransformerStringLevel,
  JsonTransformerStringTemplateFunctions = require('@wljkowa/json/transformer/string.template.functions')
                                             .JsonTransformerStringTemplateFunctions,
  
  trace = require('./trace.cjs'),
  
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
    .pipe(new JsonTransformerStringLevel())
    .pipe(new JsonTransformerStringTemplateFunctions())
    .root
  ;

trace.title('String: Templates with Placeholders ${name(...)} and Function Calls (csj)');

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
