/**
 * @author    Wolfgang L.J. Kowarschick <kowa$hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonTransformerArraySome } from '@wljkowa/json';
*/

import { JsonTransformerArraySome } from '~/array_some';

{ const c_t = new JsonTransformerArraySome();

  test
  ( '["$some", 5] should be transformed into 5', 
    () => { expect(c_t.transform({ value: ["$some", 5] })).toBe(5); }
  );

  test
  ( '["$some", 5, 7, 9] should be transformed either into 5 or 7 or 9', 
    () => { const c_result = [];
            for (let i = 0; i < 100; i++)
            { c_result.push(c_t.transform({ value: ["$some", 5, 7, 9] })); } 
            expect([5, 7, 9]).toEqual(expect.arrayContaining(c_result)); 
            expect(c_result).toEqual(expect.arrayContaining([5, 7, 9])); 
          }
  );
  
  test
  ( '["$some"] should be transformed into null', 
    () => { expect(c_t.transform({ value: ["$some"] })).toBe(null); }
  );
  
  test
  ( '[] should be transformed into []', 
    () => { expect(c_t.transform({ value: [] })).toEqual([]); }
  );
  
  test
  ( '"abc" should be transformed into "abc"', 
    () => { expect(c_t.transform({ value: "abc" })).toBe("abc"); }
  );
}

{ const c_t = new JsonTransformerArraySome({ init: '@some'});

  test
  ( '["@some", 5] should be transformed into 5', 
    () => { expect(c_t.transform({ value: ["@some", 5] })).toBe(5); }
  );

  test
  ( '["$some", 5] should be transformed into ["$some", 5]', 
    () => { expect(c_t.transform({ value: ["$some", 5] })).toStrictEqual(["$some", 5]); }
  );

  test
  ( '["@some", 5, 7, 9] should be transformed either into 5 or 7 or 9', 
    () => { const c_result = [];
            
            for (let i = 0; i < 100; i++)
            { c_result.push(c_t.transform({ value: ["@some", 5, 7, 9] })); } 

            expect([5, 7, 9]).toEqual(expect.arrayContaining(c_result)); 
            expect(c_result).toEqual(expect.arrayContaining([5, 7, 9])); 
          }
  );
  
  test
  ( '["@some"] should be transformed into null', 
    () => { expect(c_t.transform({ value: ["@some"] })).toBe(null); }
  );
  
  test
  ( '[] should be transformed into []', 
    () => { expect(c_t.transform({ value: [] })).toEqual([]); }
  );
}
