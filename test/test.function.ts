/**
 * @author    Wolfgang L.J. Kowarschick <kowa$hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */

/*
import { JsonTransformerArraySome } from '@wljkowa/json/transformer/array.some';
import { JsonTransformerTraversal } from '@wljkowa/json/transformer/traversal';
*/

import { JsonTransformerFunction }  from '~/function';
import { JsonFunctionStringLevel }  from '~/function/string.level'
import { JsonFunctionArraySome }    from '~/function/array.some'
import { JsonFunctionArrayCount }   from '~/function/array.count'
import { JsonFunctionArraySum }     from '~/function/array.sum'
import { JsonFunctionArrayMin }     from '~/function/array.min'
import { JsonFunctionArrayMax }     from '~/function/array.max'

function functionTests(transformer: JsonTransformerFunction)
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
    () => { expect(transformer.transform({ value: ["$some"] })).toBe(undefined); }
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
}

functionTests
( new JsonTransformerFunction
  ({init:
    { before: [ JsonFunctionStringLevel, 
                JsonFunctionArraySome, JsonFunctionArrayCount,
                JsonFunctionArraySum, JsonFunctionArrayMin, JsonFunctionArrayMax
              ] 
    }
  })
);

functionTests
( new JsonTransformerFunction
  ({init:
    { after: [ JsonFunctionStringLevel, 
               JsonFunctionArraySome, JsonFunctionArrayCount,
               JsonFunctionArraySum, JsonFunctionArrayMin, JsonFunctionArrayMax
             ] 
    }
  })
);