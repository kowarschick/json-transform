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
import { mockRandom } from 'jest-mock-random';

const c_t = new JsonTransformerRandom();

test
( '{"function":"$random"} should be transformed into {"function":"$random"}', 
  () => { expect(c_t.transform({ value: {"function":"$random"} })).toStrictEqual({"function":"$random"}); }
);

test
( '{"$function":"random"} should be transformed into {"$function":"random"}', 
  () => { expect(c_t.transform({ value: {"$function":"random"} })).toStrictEqual({"$function":"random"}); }
);

describe
( 'mockRandom', 
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
