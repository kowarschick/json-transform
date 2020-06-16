/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// build and run
//   npm run examples:prod && node examples_es6/examples_bundle_es6.js

//import JsonTransformerTraversal      from '@wljkowa/json/transformer/traversal.js';
//import JsonTransformerStringLevel    from '@wljkowa/json/transformer/string_level.js';
//import JsonTransformerStringTemplate from '@wljkowa/json/transformer/string_template.js';

import 
{ JsonTransformerTraversal, 
  JsonTransformerStringLevel,
  JsonTransformerStringTemplate
} 
from '@wljkowa/json';

import trace from './trace_es6';
 
const
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

trace.title('String: Templates with Placeholders ${name} (es6))');

trace.transform(transformer, "${abc}");
trace.transform(transformer, "${hello}, ${name}!");
trace.transform(transformer, "${hello}, ${name}! ${HowAreYou}");
trace.transform(transformer, [["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"]);

trace.end();
