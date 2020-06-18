/**
 * @author    Wolfgang L. J. Kowarschick <kowa$hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonTransformerFunction } from '@wljkowa/json-transformer';
import { JsonFunctionLevel }       from '@wljkowa/json-transformer'
import { JsonFunctionSome }        from '@wljkowa/json-transformer'
import { JsonFunctionCount }       from '@wljkowa/json-transformer'
import { JsonFunctionSum }         from '@wljkowa/json-transformer'
import { JsonFunctionMin }         from '@wljkowa/json-transformer'
import { JsonFunctionMax }         from '@wljkowa/json-transformer'
*/

import { JsonTransformerFunction } from '~/function';
import { JsonFunctionLevel }       from '~/function/level'
import { JsonFunctionSome }        from '~/function/some'
import { JsonFunctionCount }       from '~/function/count'
import { JsonFunctionSum }         from '~/function/sum'
import { JsonFunctionMin }         from '~/function/min'
import { JsonFunctionMax }         from '~/function/max'

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
}

functionTests
( new JsonTransformerFunction
  ({init:
    { functions: 
      [ JsonFunctionLevel, 
        JsonFunctionSome, JsonFunctionCount,
        JsonFunctionSum, JsonFunctionMin, JsonFunctionMax
      ] 
    }
  })
);