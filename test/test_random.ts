/**
 * @author    Wolfgang L. J. Kowarschick <kowa$hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonTransformerRandom } from '@wljkowa/json-transformer';
*/

import { JsonTransformerRandom } from '~/random';

/// <reference path="jest-mock-random.d.ts" />
import { mockRandom, resetMockRandom } from 'jest-mock-random';

const c_t = new JsonTransformerRandom();
/*
test
( '{"function":"$random"} should be transformed into {"function":"$random"}', 
  () => { expect(c_t.transform({ value: {"function":"$random"} })).toStrictEqual({"function":"$random"}); }
);

test
( '{"$function":"random"} should be transformed into {"$function":"random"}', 
  () => { expect(c_t.transform({ value: {"$function":"random"} })).toStrictEqual({"$function":"random"}); }
);

describe
( 'default', 
  () => 
  { afterAll(() => jest.restoreAllMocks());

    const 
      c_random_values = [0, 0.33, 0.49999999, 0.5, 0.66, 0.99999999],
      c_result_values = [0, 0.33, 0.49999999, 0.5, 0.66, 0.99999999];
    
    mockRandom(c_random_values);

    for (let i = 0, n = c_random_values.length; i<n; i++)
    { test
      ( `{"$function":"$random"} should be transformed into ${c_result_values[i]}`, 
        () => { expect(c_t.transform({ value: {"$function":"$random"} })).toBe(c_result_values[i]); }
      );
    }
  }
)

describe
( 'min, max', 
  () => 
  { afterAll(() => jest.restoreAllMocks());

    const 
      c_random_values = [0, 0.33, 0.49999999, 0.5, 0.66,  0.99999999],
      c_result_values = [1, 4.3,  5.9999999,  6,   7.6,  10.9999999];
    
    mockRandom(c_random_values);

    for (let i = 0, n = c_random_values.length; i<n; i++)
    { test
      ( `{"$function":"$random", $min: 1, $max: 11} should be transformed into ${c_result_values[i]}`, 
        () => { expect(c_t.transform({ value: {$function:"$random", $min: 1, $max: 11} })).toBeCloseTo(c_result_values[i],5); }
      );
    }
  }
)*/

describe
( 'min, max, integer', 
  () => 
  { afterAll(() => jest.restoreAllMocks());
    
    const 
      c_random_values = [0, 0.102, 0.175, 0.321, 0.411, 0.465, 0.600, 0.693,  0.777,  0.911,  0.999],
      c_result_values = [2, 3,     4,     5,     6,     7,     8,     9,     10,     11,     12   ];

    for (let i = 0, n = c_random_values.length; i<n; i++)
    { test
      ( `{"$function":"$random", $min: 2, $max: 12, $isInteger: true} should be transformed into ${c_result_values[i]}`, 
        () => { Math.random = () => c_random_values[i]; expect(c_t.transform({ value: {$function:"$random", $min: 1, $max: 11, $isInteger: true} })).toBe(c_result_values[i]); }
      );
    }
  }
)
