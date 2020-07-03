/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonValue, JsonArray, Data }  from '@wljkowa/json-transformer';
import { JsonTransformerFunction }     from '@wljkowa/json-transformer';
import { JsonFunctionCount }           from '@wljkowa/json-transformer';
import { JsonFunctionArrayMin }        from '@wljkowa/json-transformer';
import { JsonFunctionArrayMax }        from '@wljkowa/json-transformer';
import { JsonFunctionArrayShuffle }    from '@wljkowa/json-transformer';
import { JsonFunctionSome }            from '@wljkowa/json-transformer';
import { JsonFunctionArraySum }        from '@wljkowa/json-transformer';
import { JsonFunctionArrayUnnest }     from '@wljkowa/json-transformer';
import { JsonFunctionObjectDuplicate } from '@wljkowa/json-transformer';
import { JsonFunctionObjectRandom }    from '@wljkowa/json-transformer';
import { JsonFunctionObjectSequence }  from '@wljkowa/json-transformer';
import { JsonFunctionObjectShuffle }   from '@wljkowa/json-transformer';
import { JsonFunctionObjectUnnest }    from '@wljkowa/json-transformer';
import { JsonFunctionStringLevel }     from '@wljkowa/json-transformer';
*/

import { JsonValue, JsonArray, Data }  from '~/types';
import { JsonTransformerFunction }     from '~/function';
import { JsonFunctionCount }           from '~/function/count';
import { JsonFunctionArrayMin }        from '~/function/array_min';
import { JsonFunctionArrayMax }        from '~/function/array_max';
import { JsonFunctionArrayShuffle }    from '~/function/array_shuffle';
import { JsonFunctionSome }            from '~/function/some';
import { JsonFunctionArraySum }        from '~/function/array_sum';
import { JsonFunctionArrayUnnest }     from '~/function/array_unnest';
import { JsonFunctionObjectDuplicate } from '~/function/object_duplicate';
import { JsonFunctionObjectRandom }    from '~/function/object_random';
import { JsonFunctionObjectSequence }  from '~/function/object_sequence';
import { JsonFunctionObjectShuffle }   from '~/function/object_shuffle';
import { JsonFunctionObjectUnnest }    from '~/function/object_unnest';
import { JsonFunctionStringLevel }     from '~/function/string_level';

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
  
  /*
  test
  ( '{"$function":"$duplicate", "$value":{}, "$times":3} should be transformed to [{},{},{}]', 
    () => { expect(t.transform({ value: {"$function":"$duplicate", "$value":{}, "$times":3} }))
              .toStrictEqual([{},{},{}]); 
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
  ( '["$min] should be transformed to Infinity', 
    () => { expect(t.transform({ value: ["$min"] })).toBe(Infinity); }
  );
   
  test
  ( '["$max, 1, 5, 3, 4, 2] should be transformed to 5', 
    () => { expect(t.transform({ value: ["$max", 1, 5, 3, 4, 2] })).toBe(5); }
  );

  test
  ( '["$max] should be transformed to -Infinity', 
    () => { expect(t.transform({ value: ["$max"] })).toBe(-Infinity); }
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
  ( '{"$function":"$sequence", "$min":2, "$max":5} should be transformed to [2, 3, 4, 5]', 
    () => { expect(t.transform({ value: {"$function":"$sequence", "$min":2, "$max":5} }))
             .toStrictEqual([2, 3, 4, 5]); 
          }
  );

  test
  ( '{"$function":"$sequence", "$min":2, "$max":5, "$format":"image"} should be transformed to ["image2","image3","image4","image5"]', 
    () => { expect(t.transform({ value: {"$function":"$sequence", "$min":2, "$max":5, "$format":"image"} }))
              .toStrictEqual(["image2","image3","image4","image5"]);
          }
  );
  */

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

/*
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
  ( '["$sum, 1, 5, 3, 4, 2] should be transformed to 15', 
    () => { expect(t.transform({ value: ["$sum", 1, 5, 3, 4, 2] })).toBe(15); }
  );

  test
  ( '"abc" should be transformed to "abc"', 
    () => { expect(t.transform({ value: "abc" })).toBe("abc"); }
  );

  test
  ( '[] should be transformed to []', 
    () => { expect(t.transform({ value: [] })).toEqual([]); }
  );
  */
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

/*
f_test
( new JsonTransformerFunction
  ({ init:
     [ JsonFunctionCount, 
       //JsonFunctionArrayMin, 
       //JsonFunctionArrayMax,
       //JsonFunctionArrayShuffle, JsonFunctionObjectShuffle,
       JsonFunctionSome, 
       //JsonFunctionArraySum, 
       //JsonFunctionArrayUnnest,  JsonFunctionObjectUnnest,
       //JsonFunctionObjectDuplicate,
       //JsonFunctionObjectRandom,
       //JsonFunctionObjectSequence,
       //JsonFunctionStringLevel, 
     ] 
  })
);
*/
function f_rename_test(t: JsonTransformerFunction)
{ //console.log(t.functionName(["@count", 5, 7, 9]))
  //console.log(t.functionName({"@function":"@count","@value":[5, 7, 9]}))
  //console.log(t.arrayFunctionValue("@count",{"@function":"@count","@value":[5, 7, 9]}))
/*
  test
  ( '"@count" should be transformed to "@count"', 
    () => { expect(t.transform({ value: "@count" })).toBe("@count"); }
  );

  test
  ( '"$count" should be transformed to "$count"', 
    () => { expect(t.transform({ value: "$count" })).toBe("$count"); }
  );
*/
  test
  ( '["@count", 5, 7, 9] should be transformed to 3', 
    () => { expect(t.transform({ value: ["@count", 5, 7, 9] })).toBe(3); }
  );
  /*
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
  ( '["@some", 5] should be transformed to 5', 
    () => { expect(t.transform({ value: ["@some", 5] })).toBe(5); }
  );

  test
  ( '{"@function":"@some","@value":[5]} should be transformed to 5', 
    () => { expect(t.transform({ value: {"@function":"@some","@value":[5]} })).toBe(5); }
  );*/
}

f_rename_test
( new JsonTransformerFunction
  ({ rename:
     { "$function": "@function",
       "$value":    "@value",
       "$count":    "@count",
       "$some":     "@some"
     },

     init:
     [ JsonFunctionCount, 
       //JsonFunctionArrayMin, 
       //JsonFunctionArrayMax,
       //JsonFunctionArrayShuffle, JsonFunctionObjectShuffle,
       JsonFunctionSome, 
       //JsonFunctionArraySum, 
       //JsonFunctionArrayUnnest,  JsonFunctionObjectUnnest,
       //JsonFunctionObjectDuplicate,
       //JsonFunctionObjectRandom,
       //JsonFunctionObjectSequence,
       //JsonFunctionStringLevel, 
     ] 
  })
);