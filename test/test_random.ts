/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonValue, Data }       from '@wljkowa/json-transformer';
import { JsonTransformerRandom } from '@wljkowa/json-transformer';
*/

import { JsonValue, Data }       from '~/types';
import { JsonTransformerRandom } from '~/random';

/// <reference path="./jest-mock-random.d.ts" />
import { mockRandom, resetMockRandom } from 'jest-mock-random';

const c_t = new JsonTransformerRandom();

test
( '{"function":"$random"} should be transformed to {"function":"$random"}', 
  () => { expect(c_t.transform({ value: {"function":"$random"} })).toStrictEqual({"function":"$random"}); }
);

test
( '{"$function":"random"} should be transformed to {"$function":"random"}', 
  () => { expect(c_t.transform({ value: {"$function":"random"} })).toStrictEqual({"$function":"random"}); }
);

const f_test =
( json:          JsonValue,
  random_values: number[] | number[][], 
  result_values: number[],
  data?:         Data
) => 
{ afterAll(() => { resetMockRandom(); jest.restoreAllMocks()});

  for (let i = 0, n = random_values.length; i<n; i++)
  { test
    ( `${JSON.stringify(json)} should be transformed to ${result_values[i]}`, 
      () => { mockRandom(random_values[i]); 
              expect(c_t.transform({ value: json, data })).toBeCloseTo(result_values[i], 5); 
            }
    );
  }
}

describe
( 'default', 
  () => 
  f_test
  ( {"$function":"$random"},
    [0, 0.33, 0.49999999, 0.5, 0.66, 0.99999999],
    [0, 0.33, 0.49999999, 0.5, 0.66, 0.99999999]
  )
);

describe
( '$min, $max', 
  () => 
  f_test
  ( {"$function":"$random", "$min": 1, "$max": 11},
    [0, 0.33, 0.49999999, 0.5, 0.66,  0.99999999],
    [1, 4.3,  5.9999999,  6,   7.6,  10.9999999]
  )
);

describe
( '$min, $max, $integer', 
  () => 
  f_test
  ( {"$function":"$random", "$min": 2, "$max": 11, "$isInteger": true},
    [0, 0.102, 0.275, 0.321, 0.411, 0.565, 0.600, 0.703,  0.877,  0.999],
    [2, 3,     4,     5,     6,     7,     8,     9,     10,     11    ]
  )
);

describe
( '$min, $max, $integer, $scale', 
  () => 
  f_test
  ( {"$function":"$random", "$min": 2, "$max": 11, "$isInteger": true, "$scale": "factor"},
    [0, 0.102, 0.275, 0.321, 0.411, 0.565, 0.600, 0.703,  0.877,  0.999],
    [1, 1.5,   2,     2.5,   3,     3.5,   4,     4.5,    5,      5.5  ],
    {factor: 0.5}
  )
);

describe
( '$min, $max, $integer, $scale, $gzp', 
  () => 
  f_test
  ( {"$function":"$random", $min: 2, $max: 11, $isInteger: true, $scale: 'factor', $gzp: 0.5},
    [[0, 0.3], [0.102, 0.6], [0.275, 0], [0.321, 0.5], [0.411, 0.1], [0.565, 0.9], [0.600, 0.3], [0.703, 0.7],  [0.877, 0.2],  [0.999, 0.8]],
    [-1,       +1.5,         -2,         +2.5,         -3,           +3.5,         -4,           +4.5,          -5,            +5.5        ],
    {factor: 0.5}
  )
);
