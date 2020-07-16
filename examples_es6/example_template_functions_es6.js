/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// build and run: 
//   npm run examples:es6

import 
{ JsonTransformerTraversal, 
  JsonTransformerLevel,
  JsonTransformerTemplateFunctions
} 
from '@kowarschick/json-transformer';

import trace from './trace_es6';

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
                         [ value.vx/data.fps,
                           value.vy/data.fps,
                         ],
                  def:   () => 123,
                }
             })
    .pipe(new JsonTransformerLevel())
    .pipe(new JsonTransformerTemplateFunctions())
  ;

trace.title('Templates with Placeholders ${name(...)} and Function Calls (csj)');

trace.transform(transformer, "${abc}");
trace.transform(transformer, "${hello}, ${name}!");
trace.transform(transformer, "${hello}, ${name}! ${HowAreYou}");
trace.transform(transformer, [["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"]);
trace.transform(transformer, "${vpf({'vx':100, 'vy':200})}");
trace.transform(transformer, "{v: ${vpf({'vx':100, 'vy':200})}}");
trace.transform(transformer, {v: "${vpf({'vx':100, 'vy':200})}"});
trace.transform(transformer, [{v: "${vpf({'vx':100, 'vy':200})}"}, {a: "${vpf({'vx':200, 'vy':400})}"}]);
trace.transform(transformer, "${def()}");

trace.end();