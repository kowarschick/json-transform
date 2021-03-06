/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonValue, JsonArray, Data }                  from '@kowarschick/json-transformer';
import { JsonFunctionDescriptor }                      from '@kowarschick/json-transformer';
import { JsonTransformerFunction }                     from '@kowarschick/json-transformer';

import { JsonFunctionCount }                           from '@kowarschick/json-transformer';
import { JsonFunctionDuplicate }                       from '@kowarschick/json-transformer';
import { JsonFunctionLevel }                           from '@kowarschick/json-transformer';
import { JsonFunctionMin,       JsonFunctionMax}       from '@kowarschick/json-transformer';
import { JsonFunctionMinString, JsonFunctionMaxString} from '@kowarschick/json-transformer';
import { JsonFunctionRandom }                          from '@kowarschick/json-transformer';
import { JsonFunctionSequence }                        from '@kowarschick/json-transformer';
import { JsonFunctionShuffle }                         from '@kowarschick/json-transformer';
import { JsonFunctionSome }                            from '@kowarschick/json-transformer';
import { JsonFunctionSum,       JsonFunctionProduct}   from '@kowarschick/json-transformer';
import { JsonFunctionUnnest }                          from '@kowarschick/json-transformer';
*/

import { JsonValue, JsonArray, Data }                  from '~/types';
import { JsonFunctionDescriptor }                      from '~/types';
import { JsonTransformerFunction }                     from '~/function';

import { JsonFunctionCount }                           from '~/function/count';
import { JsonFunctionDuplicate }                       from '~/function/duplicate';
import { JsonFunctionLevel }                           from '~/function/level';
import { JsonFunctionMin,       JsonFunctionMax}       from '~/function/aggregate';
import { JsonFunctionMinString, JsonFunctionMaxString} from '~/function/aggregate';
import { JsonFunctionRandom }                          from '~/function/random';
import { JsonFunctionSequence }                        from '~/function/sequence';
import { JsonFunctionShuffle }                         from '~/function/shuffle';
import { JsonFunctionSome }                            from '~/function/some';
import { JsonFunctionSum, JsonFunctionProduct }        from '~/function/aggregate';
import { JsonFunctionAverage }                         from '~/function/aggregate';
import { JsonFunctionUnnest }                          from '~/function/unnest';

/// <reference path="./jest-mock-random.d.ts" />
import { mockRandom, resetMockRandom } from 'jest-mock-random';

function f_test(t: JsonTransformerFunction)
{ test
  ( '"$count" should be transformed to "$count"', 
    () => { expect(t.transform({ value: "$count" })).toBe("$count"); }
  );

  test
  ( '["$count"] should be transformed to 0', 
    () => { expect(t.transform({ value: ["$count"] })).toBe(0); }
  );

  test
  ( '["$count", 5] should be transformed to 1', 
    () => { expect(t.transform({ value: ["$count", 5] })).toBe(1); }
  );

  test
  ( '["$count", 5, 7, 9] should be transformed to 3', 
    () => { expect(t.transform({ value: ["$count", 5, 7, 9] })).toBe(3); }
  );
  test
  ( '{"$function":"$count","$value":[]} should be transformed to 0', 
    () => { expect(t.transform({ value: {"$function":"$count","$value":[]} })).toBe(0); }
  );

  test
  ( '{"$function":"$count","$value":[5]} should be transformed to 1', 
    () => { expect(t.transform({ value: {"$function":"$count","$value":[5]} })).toBe(1); }
  );

  test
  ( '{"$function":"$count","$value":[5, 7, 9]} should be transformed to 3', 
    () => { expect(t.transform({ value: {"$function":"$count","$value":[5, 7, 9]} })).toBe(3); }
  );
  
  test
  ( '{"$function":"$duplicate", "$value":{}, "$times":3} should be transformed to [{},{},{}]', 
    () => { expect(t.transform({ value: {"$function":"$duplicate", "$value":{}, "$times":3} }))
              .toStrictEqual([{},{},{}]); 
          }
  );

  test
  ( '{"$function":"$duplicate", "$value":[5,7,9], "$times":3} should be transformed to [[5,7,9],[5,7,9],[5,7,9]]', 
    () => { expect(t.transform({ value: {"$function":"$duplicate", "$value":[5,7,9], "$times":3} }))
              .toStrictEqual([[5,7,9],[5,7,9],[5,7,9]]); 
          }
  );

  test
  ( '{"$function":"$duplicate", "$value":[5,7,9], "$times":3, "$flatten":true} should be transformed to [5,5,5,7,7,7,9,9,9]]', 
    () => { expect(t.transform({ value: {"$function":"$duplicate", "$value":[5,7,9], "$times":3, "$flatten":true} }))
              .toStrictEqual([5,5,5,7,7,7,9,9,9]); 
          }
  );

  test
  ( '{"$function":"$duplicate", $times":3} should be transformed to [null,null,null]', 
    () => { expect(t.transform({ value: {"$function":"$duplicate", "$times":3} }))
              .toStrictEqual([null,null,null]); 
          }
  );

  test
  ( '{"$function":"$duplicate", "$value":[5,7,9]} should be transformed to [[5,7,9]]}', 
    () => { expect(t.transform({ value: {"$function":"$duplicate", "$value":[5,7,9]} }))
              .toStrictEqual([[5,7,9]]); 
          }
  );

  test
  ( '["$level"] should be transformed to ["$level"]', 
    () => { expect(t.transform({ value: ["$level"] })).toStrictEqual(["$level"]); }
  );

  test
  ( '"$level" should be transformed to 0', 
    () => { expect(t.transform({ value: "$level" })).toBe(0); }
  );

  test
  ( '["$level"] should be transformed to ["$level"]', 
    () => { expect(t.transform({ value: ["$level"] })).toStrictEqual(["$level"]); }
  );

  test
  ( '["$min, 1, 5, 3, 4, 2] should be transformed to 1', 
    () => { expect(t.transform({ value: ["$min", 1, 5, 3, 4, 2] })).toBe(1); }
  );

  test
  ( '["$min] should be transformed to Number.MAX_VALUE', 
    () => { expect(t.transform({ value: ["$min"] })).toBe(Number.MAX_VALUE); }
  );

  test
  ( '["$max, 1, 5, 3, 4, 2] should be transformed to 5', 
    () => { expect(t.transform({ value: ["$max", 1, 5, 3, 4, 2] })).toBe(5); }
  );

  test
  ( '["$max] should be transformed to -Number.MAX_VALUE', 
    () => { expect(t.transform({ value: ["$max"] })).toBe(-Number.MAX_VALUE); }
  );

  test
  ( '["$max_test", "a", "ZZZ", "zzz", "abc"] should be transformed to "zzz"', 
    () => { expect(t.transform({ value: ["$max_test", "a", "ZZZ", "zzz", "abc"] })).toBe("zzz"); }
  );

  test
  ( '["$max_string", "b", "ä", "ZZZ", "zzz", "abc"] should be transformed to "ZZZ"', 
    () => { expect(t.transform({ value: ["$max_string", "b", "ä", "ZZZ", "zzz", "abc"] })).toBe("ZZZ"); }
  );

  test
  ( '["$min_string", "ä", "b", "ZZZ", "zzz", "abc"] should be transformed to "ä"', 
    () => { expect(t.transform({ value: ["$min_string", "b", "ä", "ZZZ", "zzz", "abc"] })).toBe("ä"); }
  );

  test
  ( '["$min_string"] should be transformed to null', 
    () => { expect(t.transform({ value: ["$min_string"] })).toBe(null); }
  );

  test
  ( '["$max_string"] should be transformed to null', 
    () => { expect(t.transform({ value: ["$max_string"] })).toBe(null); }
  );

  describe
  ( 'random default', 
    () => 
    f_random_test
    ( t,
      {"$function":"$random"},
      [0, 0.33, 0.49999999, 0.5, 0.66, 0.99999999],
      [0, 0.33, 0.49999999, 0.5, 0.66, 0.99999999]
    )
  );

  describe
  ( 'random $min, $max', 
    () => 
    f_random_test
    ( t,
      {"$function":"$random", "$min": 1, "$max": 11},
      [0, 0.33, 0.49999999, 0.5, 0.66,  0.99999999],
      [1, 4.3,  5.9999999,  6,   7.6,  10.9999999]
    )
  );
  
  describe
  ( 'random $min, $max, $integer', 
    () => 
    f_random_test
    ( t,
      {"$function":"$random", "$min": 2, "$max": 11, "$isInteger": true},
      [0, 0.102, 0.275, 0.321, 0.411, 0.565, 0.600, 0.703,  0.877,  0.999],
      [2, 3,     4,     5,     6,     7,     8,     9,     10,     11    ]
    )
  );
  
  describe
  ( 'random $min, $max, $integer, $scale', 
    () => 
    f_random_test
    ( t,
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
    ( t,
      {"$function":"$random", $min: 2, $max: 11, $isInteger: true, $scale: 'factor', $gzp: 0.5},
      [[0, 0.3], [0.102, 0.6], [0.275, 0], [0.321, 0.5], [0.411, 0.1], [0.565, 0.9], [0.600, 0.3], [0.703, 0.7],  [0.877, 0.2],  [0.999, 0.8]],
      [-1,       +1.5,         -2,         +2.5,         -3,           +3.5,         -4,           +4.5,          -5,            +5.5        ],
      {factor: 0.5}
    )
  );

  test
  ( '{"$function":"$sequence", "$first":2, "$last":5} should be transformed to [2, 3, 4, 5]', 
    () => { expect(t.transform({ value: {"$function":"$sequence", "$first":2, "$last":5} }))
             .toStrictEqual([2, 3, 4, 5]); 
          }
  );

  test
  ( '{"$function":"$sequence", "$first":2, "$last":5, "$prefix":"image"} should be transformed to ["image2","image3","image4","image5"]', 
    () => { expect(t.transform({ value: {"$function":"$sequence", "$first":2, "$last":5, "$prefix":"image"} }))
              .toStrictEqual(["image2","image3","image4","image5"]);
          }
  );

  test
  ( '{"$function":"$sequence", "$first":2, "$last":5, "$format":"f"} should be transformed to ["2a","3a","4a","5a"]', 
    () => { expect(t.transform({ value: {"$function":"$sequence", "$first":2, "$last":5, "$format":"f"},
                                 data:  { f: (i: JsonValue) => i + 'a'}
                              })
                  )
              .toStrictEqual(["2a","3a","4a","5a"]);
          }
  );

  test
  ( '"$some" should be transformed to "$some"', 
    () => { expect(t.transform({ value: "$some" })).toBe("$some"); }
  );

  test
  ( '["$some"] should be transformed to null', 
    () => { expect(t.transform({ value: ["$some"] })).toBe(null); }
  );

  test
  ( '["$some", 5] should be transformed to 5', 
    () => { expect(t.transform({ value: ["$some", 5] })).toBe(5); }
  );

  test
  ( '["$some", 5, 7, 9] should be transformed either into 5 or 7 or 9', 
    () => { const c_result = [];
            for (let i = 0; i < 100; i++)
            { c_result.push(t.transform({ value: ["$some", 5, 7, 9] })); } 
            expect([5, 7, 9]).toEqual(expect.arrayContaining(c_result)); 
            expect(c_result).toEqual(expect.arrayContaining([5, 7, 9])); 
          }
  );

  test
  ( '{"$function":"$some","$value":[]} should be transformed to null', 
    () => { expect(t.transform({ value: {"$function":"$some","$value":[]} })).toBe(null); }
  );

  test
  ( '{"$function":"$some","$value":[5]} should be transformed to 5', 
    () => { expect(t.transform({ value: {"$function":"$some","$value":[5]} })).toBe(5); }
  );

  test
  ( '{"$function":"$some","$value":[5,7,9]} should be transformed either into 5 or 7 or 9', 
    () => { const c_result = [];
            for (let i = 0; i < 100; i++)
            { c_result.push(t.transform({ value: {"$function":"$some","$value":[5,7,9]} })); } 
            expect([5, 7, 9]).toEqual(expect.arrayContaining(c_result)); 
            expect(c_result).toEqual(expect.arrayContaining([5, 7, 9])); 
          }
  );

  test
  ( '["$shuffle",1,2,3,4,5] should be transformed to [5,3,1,4,2] or similar', 
    () => { const c_result = t.transform({ value: ["$shuffle", 1, 2, 3, 4, 5] });
            expect([5, 3, 1, 4, 2]).toEqual(expect.arrayContaining(c_result as JsonArray)); 
            expect(c_result).toEqual(expect.arrayContaining([5, 3, 1, 4, 2])); 
          }
  );

  test
  ( '{"$function":"$shuffle","$value":[1,2,3,4,5]} should be transformed to [5,3,1,4,2] or similar', 
    () => { const c_result = t.transform({ value: {"$function":"$shuffle","$value":[1,2,3,4,5]} });
            expect([5, 3, 1, 4, 2]).toEqual(expect.arrayContaining(c_result as JsonArray)); 
            expect(c_result).toEqual(expect.arrayContaining([5, 3, 1, 4, 2])); 
          }
  );

  test
  ( '["$unnest", [1, 2], 3, [[4]], [5], [{}]] should be transformed to [1, 2, 3, [4], 5, {}]', 
    () => { expect(t.transform({ value: ["$unnest", [1, 2], 3, [[4]], [5], [{}]] }))
              .toStrictEqual([1, 2, 3, [4], 5, {}]); 
          }
  );

  test
  ( '{"$function":"$unnest","$value":[[1, 2],3,[[4]],[5],[{}]]} should be transformed to [1, 2, 3, [4], 5, {}]', 
    () => { expect(t.transform({ value: {"$function":"$unnest", "$value":[[1, 2],3,[[4]],[5],[{}]]} }))
              .toStrictEqual([1, 2, 3, [4], 5, {}]); 
          }
  );

  test
  ( '["$sum] should be transformed to 0', 
    () => { expect(t.transform({ value: ["$sum"] })).toBe(0); }
  );

  test
  ( '["$sum, 1, 5, 3, 4, 2] should be transformed to 15', 
    () => { expect(t.transform({ value: ["$sum", 1, 5, 3, 4, 2] })).toBe(15); }
  );

    test
  ( '["$product] should be transformed to 1', 
    () => { expect(t.transform({ value: ["$product"] })).toBe(1); }
  );

  test
  ( '["$product, 1, 5, 3, 4, 2] should be transformed to 120', 
    () => { expect(t.transform({ value: ["$product", 1, 5, 3, 4, 2] })).toBe(120); }
  );

  test
  ( '["$average, 1, 5, 3, 4, 2] should be transformed to 3', 
    () => { expect(t.transform({ value: ["$average", 1, 5, 3, 4, 2] })).toBe(3); }
  );

  test
  ( '["$average] should be transformed to 3', 
    () => { expect(t.transform({ value: ["$average"] })).toBe(NaN); }
  );

  test
  ( '"abc" should be transformed to "abc"', 
    () => { expect(t.transform({ value: "abc" })).toBe("abc"); }
  );

  test
  ( '[] should be transformed to []', 
    () => { expect(t.transform({ value: [] })).toEqual([]); }
  );
}

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
    ( `${JSON.stringify(json)} should be transformed to ${result_values[i]}`, 
      () => { mockRandom(random_values[i]); 
              expect(transformer.transform({ value: json, data })).toBeCloseTo(result_values[i], 5); 
            }
    );
  }
}

const JsonFunctionMaxTest: JsonFunctionDescriptor =
{ ...JsonFunctionMax,
  name: '$max_test',
  init: { default: '', aggregate: (a: string, b: string) => (a>b ? a : b) }
}
 
f_test
( new JsonTransformerFunction
  ({ init:
     [ JsonFunctionAverage,
       JsonFunctionCount, 
       JsonFunctionMin, 
       JsonFunctionMinString, 
       JsonFunctionMax,
       JsonFunctionMaxString,
       JsonFunctionMaxTest,
       JsonFunctionProduct,
       JsonFunctionShuffle,
       JsonFunctionSome, 
       JsonFunctionSum, 
       JsonFunctionUnnest,
       JsonFunctionDuplicate,
       JsonFunctionRandom,
       JsonFunctionSequence,
       JsonFunctionLevel, 
     ] 
  })
);

function f_rename_test(t: JsonTransformerFunction)
{ test
  ( '"@count" should be transformed to "@count"', 
    () => { expect(t.transform({ value: "@count" })).toBe("@count"); }
  );

  test
  ( '"$count" should be transformed to "$count"', 
    () => { expect(t.transform({ value: "$count" })).toBe("$count"); }
  );

  test
  ( '["@count", 5, 7, 9] should be transformed to 3', 
    () => { expect(t.transform({ value: ["@count", 5, 7, 9] })).toBe(3); }
  );

  test
  ( '["$count", 5, 7, 9] should be transformed to ["$count", 5, 7, 9]', 
    () => { expect(t.transform({ value: ["$count", 5, 7, 9] })).toStrictEqual(["$count", 5, 7, 9]); }
  );

  test
  ( '{"@function":"@count","@value":[5, 7, 9]} should be transformed to 3', 
    () => { expect(t.transform({ value: {"@function":"@count","@value":[5, 7, 9]} })).toBe(3); }
  );

  test
  ( '{"$function":"@count","@value":[5, 7, 9]} should be transformed to {"$function":"@count","@value":[5, 7, 9]}', 
    () => { expect(t.transform({ value: {"$function":"@count","@value":[5, 7, 9]} })).toStrictEqual({"$function":"@count","@value":[5, 7, 9]}); }
  );

  test
  ( '{"@function":"$count","@value":[5, 7, 9]} should be transformed to {"@function":"$count","@value":[5, 7, 9]}', 
    () => { expect(t.transform({ value: {"@function":"$count","@value":[5, 7, 9]} })).toStrictEqual({"@function":"$count","@value":[5, 7, 9]}); }
  );

  test
  ( '{"@function":"@count","$value":[5, 7, 9]} should be transformed to {"@function":"@count","$value":[5, 7, 9]}', 
    () => { expect(t.transform({ value: {"@function":"@count","$value":[5, 7, 9]} })).toStrictEqual({"@function":"@count","$value":[5, 7, 9]}); }
  );

  test
  ( '{"$function":"@count","$value":[5, 7, 9]} should be transformed to {"$function":"@count","$value":[5, 7, 9]}', 
    () => { expect(t.transform({ value: {"$function":"@count","$value":[5, 7, 9]} })).toStrictEqual({"$function":"@count","$value":[5, 7, 9]}); }
  );

  test
  ( '{"$function":"$count","$value":[5, 7, 9]} should be transformed to {"$function":"$count","$value":[5, 7, 9]}', 
    () => { expect(t.transform({ value: {"$function":"$count","$value":[5, 7, 9]} })).toStrictEqual({"$function":"$count","$value":[5, 7, 9]}); }
  );

  test
  ( '["$max, 1, 5, 3, 4, 2] should be transformed to ["$max", 1, 5, 3, 4, 2]', 
    () => { expect(t.transform({ value: ["$max", 1, 5, 3, 4, 2] })).toStrictEqual(["$max", 1, 5, 3, 4, 2]); }
  );

  test
  ( '["@max, 1, 5, 3, 4, 2] should be transformed to 5', 
    () => { expect(t.transform({ value: ["@max", 1, 5, 3, 4, 2] })).toBe(5); }
  );

  test
  ( '["@some", 5] should be transformed to 5', 
    () => { expect(t.transform({ value: ["@some", 5] })).toBe(5); }
  );

  test
  ( '{"@function":"@some","@value":[5]} should be transformed to 5', 
    () => { expect(t.transform({ value: {"@function":"@some","@value":[5]} })).toBe(5); }
  );

  test
  ( '{"@function":"@sequence", "@first":2, "@last":5, "@format":"f"} should be transformed to ["2a","3a","4a","5a"]', 
    () => { expect(t.transform({ value: {"@function":"@sequence", "@first":2, "@last":5, "@format":"f"},
                                 data:  { f: (i: JsonValue) => i + 'a'}
                              })
                  )
              .toStrictEqual(["2a","3a","4a","5a"]);
          }
  );
}

f_rename_test
( new JsonTransformerFunction
  ({ rename:
     { "$function": "@function",
       "$value":    "@value",
       "$count":    "@count",
       "$max":      "@max",
       "$some":     "@some",
       "$sequence": "@sequence",
       "$first":    "@first",
       "$last":     "@last",
       "$format":   "@format",
    },

     init:
     [ JsonFunctionCount, 
       JsonFunctionMax,
       JsonFunctionSome,
       JsonFunctionSequence,
     ] 
  })
)