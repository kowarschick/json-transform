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

import { JsonFunctionObjectDuplicate }  from '@wljkowa/json-transformer';
import { JsonFunctionObjectSequence }   from '@wljkowa/json-transformer';
import { JsonFunctionObjectShuffle }    from '@wljkowa/json-transformer';
import { JsonFunctionArrayUnnest }      from '@wljkowa/json-transformer';

import trace from './trace_es6';

const 
  transformer =  
    new JsonTransformerTraversal({ data: { $noOfPairs: 10 } })
          .pipe( new JsonTransformerFunction
                 ({init:
                   { functions:
                     [ JsonFunctionObjectDuplicate,
                       JsonFunctionObjectSequence,
                       JsonFunctionObjectShuffle,
                       JsonFunctionArrayUnnest,
                     ]
                   }
                 })
               )
          .pipe(new JsonTransformerStringReplace()),

  c_memory =
  { cards: { "$function": "$sequence",
             "$max":      "$noOfPairs",
             "$format":   "image"  
           },
    board: { "$function": "$shuffle",
             "$value":    { "$function":    "$duplicate",
                            "$value":       { "$function": "$sequence",
                                              "$max":      "$noOfPairs"
                                            },
                            "$times":       2,
                            "$withinArray": true
                          }
           }
  };

trace.title('Memory (es6)');

trace.transform( transformer, c_memory, {$noOfPairs: 4} );
trace.transform( transformer, c_memory );
trace.transform( transformer, 
                 c_memory, 
                 { $noOfPairs: 20,
                   image: i => 'bild'+('__'+i).slice(-3)
                 }
               );

trace.end();
