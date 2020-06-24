/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonTransformerTraversal }     from '@wljkowa/json-transformer';
import { JsonTransformerStringReplace } from '@wljkowa/json-transformer';
*/

import { JsonTransformerTraversal }     from '~/traversal';
import { JsonTransformerStringReplace } from '~/string_replace';

{ const c_t = new JsonTransformerStringReplace
                  ({ data: { a: 1, b: [], c: {}} });

  test
  ( '"a" should be transformed to 1',
    () => { expect(c_t.transform({ value: "a" })).toBe(1); }      
  ); 

  test
  ( '"b" should be transformed to []',
    () => { expect(c_t.transform({ value: "b" })).toStrictEqual([]); }      
  );

  test
  ( '"c" should be transformed to {}',
    () => { expect(c_t.transform({ value: "c" })).toStrictEqual({}); }      
  );

  test
  ( '"d" should be transformed to "d"',
    () => { expect(c_t.transform({ value: "d" })).toBe("d"); }      
  );

  test
  ( '["a", "b", "c", "d"] should be transformed to ["a", "b", "c", "d"]',
    () => { expect(c_t.transform({ value: ["a", "b", "c", "d"] })).toStrictEqual(["a", "b", "c", "d"]); }      
  ); 
}

{ const c_t =       new JsonTransformerTraversal
                        ({ data: { a: 1, b: [], c: {}} })
              .pipe(new JsonTransformerStringReplace())
              .root;

  test
  ( '"a" should be transformed to 1',
    () => { expect(c_t.transform({ value: "a" })).toBe(1); }      
  ); 

  test
  ( '"b" should be transformed to []',
    () => { expect(c_t.transform({ value: "b" })).toStrictEqual([]); }      
  );

  test
  ( '"c" should be transformed to {}',
    () => { expect(c_t.transform({ value: "c" })).toStrictEqual({}); }      
  );

  test
  ( '"d" should be transformed to "d"',
    () => { expect(c_t.transform({ value: "d" })).toBe("d"); }      
  );

  test
  ( '["a", "b", "c", "d"] should be transformed to [1, [], {}, "d"]',
    () => { expect(c_t.transform({ value: ["a", "b", "c", "d"] })).toStrictEqual([1, [], {}, "d"]); }      
  ); 
}
