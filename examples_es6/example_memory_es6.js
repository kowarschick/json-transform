/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// build and run
//   npm run examples:prod && node examples_es6/examples_bundle_es6.js

import { JsonTransformerTraversal }     from '@wljkowa/json-transformer';
import { JsonTransformerFunction }      from '@wljkowa/json-transformer';
import { JsonTransformerStringReplace } from '@wljkowa/json-transformer';

import { JsonFunctionDuplicate }        from '@wljkowa/json-transformer';
import { JsonFunctionSequence }         from '@wljkowa/json-transformer';
import { JsonFunctionShuffle }          from '@wljkowa/json-transformer';
import { JsonFunctionUnnest }           from '@wljkowa/json-transformer';

import trace from './trace_es6';

const 
  transformer =  
          new JsonTransformerTraversal
              ({ data: { "@noOfPairs": 10,
                         "@image":     i => 'image'+i
                       }
              })
    .pipe(new JsonTransformerFunction
              ({ init:
                 [ JsonFunctionDuplicate,
                   JsonFunctionSequence,
                   JsonFunctionShuffle,
                   JsonFunctionUnnest,
                 ] 
              }) 
         )
    .pipe(new JsonTransformerStringReplace()),

  memory =
  { cards: { "$function": "$sequence",
             "$last":     "@noOfPairs",
             "$format":   "@image"  
           },
    board: { "$function": "$shuffle", 
             "$value":    { "$function": "$duplicate", 
                            "$value":    { "$function": "$sequence", 
                                           "$last":     "@noOfPairs" 
                                         }, 
                            "$times":    2,
                            "$flatten":  true
                          }
           }
  };

trace.title('Memory (es6)');

trace.transform( transformer, memory, {"@noOfPairs": 4} );
trace.transform( transformer, memory );
trace.transform( transformer, 
                 memory, 
                 { "@noOfPairs": 11,
                   "@image":     i => 'bild'+('__'+i).slice(-3)
                 }
               );

trace.end();
