/**
 * @author    Wolfgang L. J. Kowarschick <kowa$hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonValue, Data }         from '@wljkowa/json-transformer';
import { JsonTransformerFunction } from '@wljkowa/json-transformer';
import { JsonFunctionLevel }       from '@wljkowa/json-transformer'
import { JsonFunctionSome }        from '@wljkowa/json-transformer'
import { JsonFunctionCount }       from '@wljkowa/json-transformer'
import { JsonFunctionSum }         from '@wljkowa/json-transformer'
import { JsonFunctionMin }         from '@wljkowa/json-transformer'
import { JsonFunctionMax }         from '@wljkowa/json-transformer'
import { JsonFunctionRandom }      from '@wljkowa/json-transformer'
*/

import { JsonValue, Data }         from '~/interfaces';
import { JsonTransformerFunction } from '~/function';
import { JsonFunctionLevel }       from '~/function/level'
import { JsonFunctionSome }        from '~/function/some'
import { JsonFunctionCount }       from '~/function/count'
import { JsonFunctionSum }         from '~/function/sum'
import { JsonFunctionMin }         from '~/function/min'
import { JsonFunctionMax }         from '~/function/max'
import { JsonFunctionRandom }      from '~/function/random'

/// <reference path="./jest-mock-random.d.ts" />
import { mockRandom, resetMockRandom } from 'jest-mock-random';

function f_random_test 
( transformer:   JsonTransformerFunction,
  json:          JsonValue,
  random_values: number[] | number[][], 
  result_values: number[],
  data?:         Data
)  
{ afterAll(() => { resetMockRandom(); jest.restoreAllMocks()});

  for (let i = 0, n = random_values.length; i<n; i++)
  { test
    ( `${JSON.stringify(json)} should be transformed into ${result_values[i]}`, 
      () => { mockRandom(random_values[i]); 
              expect(transformer.transform({ value: json, data })).toBeCloseTo(result_values[i], 5); 
            }
    );
  }
}

function f_test(transformer: JsonTransformerFunction)
{ test
  ( '"$level" should be transformed into 0', 
    () => { expect(transformer.transform({ value: "$level" })).toBe(0); }
  );

  test
  ( '["$level"] should be transformed into ["$level"]', 
    () => { expect(transformer.transform({ value: ["$level"] })).toStrictEqual(["$level"]); }
  );

  test
  ( '["$some", 5] should be transformed into 5', 
    () => { expect(transformer.transform({ value: ["$some", 5] })).toBe(5); }
  );

  test
  ( '"$some" should be transformed into "$some"', 
    () => { expect(transformer.transform({ value: "$some" })).toBe("$some"); }
  );

  test
  ( '["$some", 5, 7, 9] should be transformed either into 5 or 7 or 9', 
    () => { const c_result = [];
            for (let i = 0; i < 100; i++)
            { c_result.push(transformer.transform({ value: ["$some", 5, 7, 9] })); } 
            expect([5, 7, 9]).toEqual(expect.arrayContaining(c_result)); 
            expect(c_result).toEqual(expect.arrayContaining([5, 7, 9])); 
          }
  );
  
  test
  ( '["$some"] should be transformed into null', 
    () => { expect(transformer.transform({ value: ["$some"] })).toBe(null); }
  );
  
  test
  ( '[] should be transformed into []', 
    () => { expect(transformer.transform({ value: [] })).toEqual([]); }
  );
  
  test
  ( '"abc" should be transformed into "abc"', 
    () => { expect(transformer.transform({ value: "abc" })).toBe("abc"); }
  );

  test
  ( '["$sum, 1, 5, 3, 4, 2] should be transformed into 15', 
    () => { expect(transformer.transform({ value: ["$sum", 1, 5, 3, 4, 2] })).toBe(15); }
  );

  test
  ( '["$count, 1, 5, 3, 4, 2] should be transformed into 5', 
    () => { expect(transformer.transform({ value: ["$count", 1, 5, 3, 4, 2] })).toBe(5); }
  );
 
  test
  ( '["$min, 1, 5, 3, 4, 2] should be transformed into 1', 
    () => { expect(transformer.transform({ value: ["$min", 1, 5, 3, 4, 2] })).toBe(1); }
  );

  test
  ( '["$min] should be transformed into Infinity', 
    () => { expect(transformer.transform({ value: ["$min"] })).toBe(Infinity); }
  );
   
  test
  ( '["$max, 1, 5, 3, 4, 2] should be transformed into 5', 
    () => { expect(transformer.transform({ value: ["$max", 1, 5, 3, 4, 2] })).toBe(5); }
  );

  test
  ( '["$max] should be transformed into -Infinity', 
    () => { expect(transformer.transform({ value: ["$max"] })).toBe(-Infinity); }
  );

  describe
  ( 'random default', 
    () => 
    f_random_test
    ( transformer,
      {"$function":"$random"},
      [0, 0.33, 0.49999999, 0.5, 0.66, 0.99999999],
      [0, 0.33, 0.49999999, 0.5, 0.66, 0.99999999]
    )
  );

  describe
  ( 'random $min, $max', 
    () => 
    f_random_test
    ( transformer,
      {"$function":"$random", "$min": 1, "$max": 11},
      [0, 0.33, 0.49999999, 0.5, 0.66,  0.99999999],
      [1, 4.3,  5.9999999,  6,   7.6,  10.9999999]
    )
  );
  
  describe
  ( 'random $min, $max, $integer', 
    () => 
    f_random_test
    ( transformer,
      {"$function":"$random", "$min": 2, "$max": 11, "$isInteger": true},
      [0, 0.102, 0.275, 0.321, 0.411, 0.565, 0.600, 0.703,  0.877,  0.999],
      [2, 3,     4,     5,     6,     7,     8,     9,     10,     11    ]
    )
  );
  
  describe
  ( 'random $min, $max, $integer, $scale', 
    () => 
    f_random_test
    ( transformer,
      {"$function":"$random", "$min": 2, "$max": 11, "$isInteger": true, "$scale": "factor"},
      [0, 0.102, 0.275, 0.321, 0.411, 0.565, 0.600, 0.703,  0.877,  0.999],
      [1, 1.5,   2,     2.5,   3,     3.5,   4,     4.5,    5,      5.5  ],
      {factor: 0.5}
    )
  );
  
  describe
  ( 'random $min, $max, $integer, $scale, $gzp', 
    () => 
    f_random_test
    ( transformer,
      {"$function":"$random", $min: 2, $max: 11, $isInteger: true, $scale: 'factor', $gzp: 0.5},
      [[0, 0.3], [0.102, 0.6], [0.275, 0], [0.321, 0.5], [0.411, 0.1], [0.565, 0.9], [0.600, 0.3], [0.703, 0.7],  [0.877, 0.2],  [0.999, 0.8]],
      [-1,       +1.5,         -2,         +2.5,         -3,           +3.5,         -4,           +4.5,          -5,            +5.5        ],
      {factor: 0.5}
    )
  );
}

f_test
( new JsonTransformerFunction
  ({init:
    { functions: 
      [ JsonFunctionLevel, 
        JsonFunctionSome, JsonFunctionCount,
        JsonFunctionSum, JsonFunctionMin, JsonFunctionMax,
        JsonFunctionRandom
      ] 
    }
  })
);