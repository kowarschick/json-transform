/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

// run: 
//   node examples_cjs/example_memory.js

const 
  JT                           = require('@wljkowa/json-transformer')
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
                         "@image":     i => 'b'+i                    
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

  c_memory =
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

trace.transform( transformer, c_memory, {"@noOfPairs": 4} );
trace.transform( transformer, c_memory );
trace.transform( transformer, 
                 c_memory, 
                 { "@noOfPairs": 7,
                   "@image":     i => 'bild'+('__'+i).slice(-3)
                 }
               );

trace.end();
