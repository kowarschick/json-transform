/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// build and run: 
//   npm run examples:es6

import { JsonTransformerTraversal }     from '@kowarschick/json-transformer';
import { JsonTransformerFunction }      from '@kowarschick/json-transformer';
import { JsonTransformerStringReplace } from '@kowarschick/json-transformer';

import { JsonFunctionDuplicate }        from '@kowarschick/json-transformer';
import { JsonFunctionSequence }         from '@kowarschick/json-transformer';
import { JsonFunctionShuffle }          from '@kowarschick/json-transformer';
import { JsonFunctionUnnest }           from '@kowarschick/json-transformer';

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
