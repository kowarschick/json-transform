/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonTransformerTraversal }     from '@wljkowa/json-transformer';
import { JsonTransformerFunction }      from '@wljkowa/json-transformer';
import { JsonTransformerStringReplace } from '@wljkowa/json-transformer';

import { JsonFunctionObjectDuplicate }  from '@wljkowa/json-transformer';
import { JsonFunctionObjectSequence }   from '@wljkowa/json-transformer';
import { JsonFunctionObjectShuffle }    from '@wljkowa/json-transformer';
import { JsonFunctionArrayUnnest }      from '@wljkowa/json-transformer';
*/

import { JsonTransformerTraversal }     from '~/traversal';
import { JsonTransformerFunction }      from '~/function';
import { JsonTransformerStringReplace } from '~/string_replace';

import { JsonFunctionObjectDuplicate }  from '~/function/object_duplicate';
import { JsonFunctionObjectSequence }   from '~/function/object_sequence';
import { JsonFunctionObjectShuffle }    from '~/function/object_shuffle';
import { JsonFunctionArrayUnnest }      from '~/function/array_unnest';


{ const c_t = new JsonTransformerTraversal();

  test
  ( '"abc" should be transformed to "abc"', 
    () => { expect(c_t.transform({ value: "abc" })).toBe("abc"); }
  );
}

{ const
    c_t =   new JsonTransformerTraversal({ data: { $noOfPairs: 10 } })
      .pipe(new JsonTransformerFunction
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
      .pipe(new JsonTransformerStringReplace()) 
      .root,

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

  //TBD
  /*
  console.log(c_t.transform({ value: c_memory, 
                              data:  { $noOfPairs: 20,
                                       image: i => 
                                              'bild' + ('__'+i).slice(-3) 
                                     } 
                           })
             );
  */
}