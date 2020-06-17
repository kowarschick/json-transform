/**
 * @author    Wolfgang L. J. Kowarschick <kowa$hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonTransformer } from '@wljkowa/json-transformer';
*/

import { JsonTransformer }     from '~/transformer';
import { JsonTransformerNull } from '~/null';

{ const c_t = new JsonTransformer();

  test
  ( 'null should be transformed into null', 
    () => { expect(c_t.transform({ value: null })).toBe(null); }
  );

  test
  ( 'undefined should be transformed into null', 
    () => { expect(c_t.transform({ value: undefined })).toBe(undefined); }
  );

  test
  ( '"abc" should be transformed into "abc"', 
    () => { expect(c_t.transform({ value: "abc" })).toBe("abc"); }
  );
}

{ const c_t = new JsonTransformerNull();

  test
  ( 'null should be transformed into null', 
    () => { expect(c_t.transform({ value: null })).toBe(null); }
  );

  test
  ( 'undefined should be transformed into null', 
    () => { expect(c_t.transform({ value: undefined })).toBe(null); }
  );

  test
  ( '"abc" should be transformed into "abc"', 
    () => { expect(c_t.transform({ value: "abc" })).toBe("abc"); }
  );
}
