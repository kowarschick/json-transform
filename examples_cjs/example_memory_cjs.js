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
  JsonFunctionObjectDuplicate  = JT.JsonFunctionObjectDuplicate,
  JsonFunctionObjectSequence   = JT.JsonFunctionObjectSequence,
  JsonFunctionObjectShuffle    = JT.JsonFunctionObjectShuffle,
  JsonFunctionArrayUnnest      = JT.JsonFunctionArrayUnnest,
  
  trace = require('./trace_cjs'),
  
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

trace.title('Memory (csj)');

trace.transform( transformer, c_memory, {$noOfPairs: 4} );
trace.transform( transformer, c_memory );
trace.transform( transformer, 
                 c_memory, 
                 { $noOfPairs: 20,
                   image: i => 'bild'+('__'+i).slice(-3)
                 }
               );

trace.end();
