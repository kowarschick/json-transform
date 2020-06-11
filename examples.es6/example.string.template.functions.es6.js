/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */

// build and run
//   npm run examples:prod && node examples.es6/examples.bundle.es6.js

import JsonTransformerTraversal               from '@wljkowa/json/transformer/traversal.js';
import JsonTransformerStringLevel             from '@wljkowa/json/transformer/string.level.js';
import JsonTransformerStringTemplateFunctions from '@wljkowa/json/transformer/string.template.functions.js';

import trace from './trace.es6';

// run: 
 //   node examples.cjs/example.string.template.functions.cjs.js

const
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
