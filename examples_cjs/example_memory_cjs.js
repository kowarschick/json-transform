/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// run: 
//   node examples_cjs/example_memory_cjs.js

const 
  { JsonTransformerTraversal,
    JsonTransformerFunction,
    JsonTransformerStringReplace,
    JsonFunctionDuplicate,
    JsonFunctionSequence,
    JsonFunctionShuffle,
    JsonFunctionUnnest
  } = 
  require('@kowarschick/json-transformer/'),

  trace = require('./trace_cjs'),
  
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

trace.title('Memory (csj)');

trace.transform( transformer, memory, {"@noOfPairs": 4} );
trace.transform( transformer, memory );
trace.transform( transformer, 
                 memory, 
                 { "@noOfPairs": 11,
                   "@image":     i => 'bild'+('__'+i).slice(-3)
                 }
               );

trace.end();
