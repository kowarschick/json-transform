/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonValue }                    from '@wljkowa/json-transformer';

import { JsonTransformerTraversal }     from '@wljkowa/json-transformer';
import { JsonTransformerFunction }      from '@wljkowa/json-transformer';
import { JsonTransformerStringReplace } from '@wljkowa/json-transformer';

import { JsonFunctionDuplicate }        from '@wljkowa/json-transformer';
import { JsonFunctionSequence }         from '@wljkowa/json-transformer';
import { JsonFunctionShuffle }          from '@wljkowa/json-transformer';
import { JsonFunctionUnnest }           from '@wljkowa/json-transformer';
*/

import { JsonValue }                    from '~/types';

import { JsonTransformerTraversal }     from '~/traversal';
import { JsonTransformerFunction }      from '~/function';
import { JsonTransformerStringReplace } from '~/string_replace';

import { JsonFunctionDuplicate }        from '~/function/duplicate';
import { JsonFunctionSequence }         from '~/function/sequence';
import { JsonFunctionShuffle }          from '~/function/shuffle';
import { JsonFunctionUnnest }           from '~/function/unnest';

/// <reference path="./jest-mock-random.d.ts" />
import { mockRandom, resetMockRandom } from 'jest-mock-random';

{ const c_t = new JsonTransformerTraversal();

  test
  ( '"abc" should be transformed to "abc"', 
    () => { expect(c_t.transform({ value: "abc" })).toBe("abc"); }
  );
}

{ afterAll(() => { resetMockRandom(); jest.restoreAllMocks()});

  mockRandom([0, 0.7, 0.3, 0.8, 0.6, 0.4, 0.2, 0.9, 0.5]); 
  const
    c_t =   new JsonTransformerTraversal({ data: { $noOfPairs: 10 } })
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
    },
    
    c_memory_result = 
       c_t.transform({ value: c_memory,
                       data:  { "@noOfPairs": 20,
                                "@image":     (i: JsonValue) => 
                                              'bild' + ('__'+i).slice(-3) 
                              } 
                    }),

    c_memory_expected_result = 
    { cards: 
      [ 'bild__1', 'bild__2', 'bild__3',
        'bild__4', 'bild__5', 'bild__6',
        'bild__7', 'bild__8', 'bild__9',
        'bild_10', 'bild_11', 'bild_12',
        'bild_13', 'bild_14', 'bild_15',
        'bild_16', 'bild_17', 'bild_18',
        'bild_19', 'bild_20'
      ],
      board: 
      [ 14, 11,  3,  7, 2,  5,  1,  9, 13, 20,
        10, 15, 12,  4, 7,  2, 10, 13,  8, 17,
        18, 16, 19, 17, 3,  6, 16, 12,  5, 18,
        20,  9, 19,  4, 8, 11, 15,  6, 14,  1
      ]
    } 
    ;

  test
  ( 'memory', 
    () => { expect(c_memory_result).toStrictEqual(c_memory_expected_result); }
  );
}