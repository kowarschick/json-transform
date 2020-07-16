/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// run: 
//   node examples_cjs/example_memory_cjs.js

const 
  JT                           = require('@kowa/json-transformer')
  JsonTransformerTraversal     = JT.JsonTransformerTraversal,
  JsonTransformerFunction      = JT.JsonTransformerFunction,
  JsonTransformerStringReplace = JT.JsonTransformerStringReplace,
  JsonFunctionDuplicate        = JT.JsonFunctionDuplicate,
  JsonFunctionSequence         = JT.JsonFunctionSequence,
  JsonFunctionShuffle          = JT.JsonFunctionShuffle,
  JsonFunctionUnnest           = JT.JsonFunctionUnnest,
  
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
