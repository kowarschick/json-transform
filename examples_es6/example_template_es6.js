/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// build and run
//   npm run examples:prod && node examples_es6/examples_bundle_es6.js

//import JsonTransformerTraversal from '@wljkowa/json-transformer/transformer/traversal.js';
//import JsonTransformerLevel     from '@wljkowa/json-transformer/transformer/string_level.js';
//import JsonTransformerTemplate  from '@wljkowa/json-transformer/transformer/string_template.js';

import 
{ JsonTransformerTraversal, 
  JsonTransformerLevel,
  JsonTransformerTemplate
} 
from '@wljkowa/json-transformer';

import trace from './trace_es6';
 
const
  transformer =  
         new JsonTransformerTraversal({ data:            
                                        { abc:   123,
                                          hello: "Hallo",
                                          name:  "Wolfgang",
                                        }
                                     })
    .pipe(new JsonTransformerLevel())
    .pipe(new JsonTransformerTemplate());

trace.title('Templates with Placeholders ${name} (es6))');

trace.transform(transformer, "${abc}");
trace.transform(transformer, "${hello}, ${name}!");
trace.transform(transformer, "${hello}, ${name}! ${HowAreYou}");
trace.transform(transformer, [["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"]);

trace.end();
