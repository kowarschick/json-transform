/**
 * @author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */

// build and run
//   npm run examples:prod && node examples.es6/examples.bundle.es6.js

import JsonTransformerTraversal      from '@wljkowa/json/transformer/traversal.js';
import JsonTransformerStringLevel    from '@wljkowa/json/transformer/string.level.js';
import JsonTransformerStringTemplate from '@wljkowa/json/transformer/string.template.js';

import trace from './trace.es6';
 
const
  transformer =  
         new JsonTransformerTraversal({ data:            
                                        { abc:   123,
                                          hello: "Hallo",
                                          name:  "Wolfgang",
                                        }
                                     })
    .add(new JsonTransformerStringLevel())
    .add(new JsonTransformerStringTemplate())
    .root
  ;

trace.title('String: Templates with Placeholders ${name} (es6))');

trace.transform(transformer, "${abc}");
trace.transform(transformer, "${hello}, ${name}!");
trace.transform(transformer, "${hello}, ${name}! ${HowAreYou}");
trace.transform(transformer, [["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"]);

trace.end();
