/**
 * @author    Wolfgang L. J. Kowarschick <kowa$hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonTransformer }                    from '@wljkowa/json-transformer';
import { JsonTransformerLevel }               from '@wljkowa/json-transformer';
import { JsonTransformerTraversalRestricted } from '@wljkowa/json-transformer';
*/

import { JsonTransformer }                    from '~/transformer';
import { JsonTransformerLevel }               from '~/level';
import { JsonTransformerTraversalRestricted } from '~/traversal_restricted';

{ const 
    c_transform = 
           new JsonTransformerTraversalRestricted({init: { minLevel: 2, maxLevel: 3}})
      .pipe(new JsonTransformerLevel({init: '@level'}))
      .root;

  test
  ( '"@level" should be transformed into "@level"',
    () => { expect(c_transform.transform({ value: "@level" })).toStrictEqual("@level"); }      
  );
  
  test
  ( '["@level", {"level": "@level"}, ["@level", ["@level", ["@level"]]]] should be transformed into ["@level", {"level": 2}, [2, [3, ["@level"]]]]',
    () => { expect(c_transform.transform({ value: ["@level", {"level": "@level"}, ["@level", ["@level", ["@level"]]]] })
                  ).toStrictEqual(["@level", {"level": 2}, [2, [3, ["@level"]]]]); 
          }      
  );
}

{ const c_t: JsonTransformer = new JsonTransformerLevel();

  test
  ( '"$level" should be transformed into 0',
    () => { expect(c_t.transform({ value: "$level" })).toStrictEqual(0); }      
  ); 

  test
  ( '"@level" should not be transformed',
    () => { expect(c_t.transform({ value: "@level" })).toStrictEqual("@level"); }        
  );

  test
  ( '["$level", {"level": "$level"}, ["$level", ["$level"]]] should not be transformed',
    () => { expect(c_t.transform({ value: ["$level", {"level": "$level"}, ["$level", ["$level"]]] })
                  ).toStrictEqual(["$level", {"level": "$level"}, ["$level", ["$level"]]]); 
          }      
  );
}

{ const c_t: JsonTransformer = new JsonTransformerLevel().pipe(new JsonTransformerLevel()).root;

  test
  ( '"$level" should be transformed into 0',
    () => { expect(c_t.transform({ value: "$level" })).toStrictEqual(0); }      
  ); 

  test
  ( '"@level" should not be transformed',
    () => { expect(c_t.transform({ value: "@level" })).toStrictEqual("@level"); }        
  );

  test
  ( '["$level", {"level": "$level"}, ["$level", ["$level"]]] should not be transformed',
    () => { expect(c_t.transform({ value: ["$level", {"level": "$level"}, ["$level", ["$level"]]] })
                  ).toStrictEqual(["$level", {"level": "$level"}, ["$level", ["$level"]]]); 
          }      
  );
}

function traversalTests(transformer: JsonTransformer)
{ test
  ( '"$level" should be transformed into 0',
    () => { expect(transformer.transform({ value: "$level" })).toStrictEqual(0); }      
  ); 

  test
  ( '"@level" should not be transformed',
     () => { expect(transformer.transform({ value: "@level"})).toStrictEqual("@level"); }        
   );

  test
  ( '["$level", {"level": "$level"}, ["$level", ["$level"]]] should not be transformed',
    () => { expect(transformer.transform({ value: ["$level", {"level": "$level"}, ["$level", ["$level"]]] })
                  ).toStrictEqual([1, {"level": 2}, [2, [3]]]); 
          }      
  );
}

traversalTests(new JsonTransformerTraversalRestricted().pipe(new JsonTransformerLevel()).root);

{ const c_t = new JsonTransformerTraversalRestricted();
  c_t.pipe(new JsonTransformerLevel());

  traversalTests(c_t);
}

traversalTests
(      new JsonTransformerTraversalRestricted()
  .pipe(new JsonTransformerLevel())
  .root
);

traversalTests
(      new JsonTransformer()
  .pipe(new JsonTransformerTraversalRestricted())
  .pipe(new JsonTransformerLevel())
  .root
);

{ const c_t = new JsonTransformerTraversalRestricted();
  c_t.pipe(new JsonTransformerLevel({init: '@level'}));

  test
  ( '"$level" should be transformed into "$level"',
    () => { expect(c_t.transform({ value: "$level" })).toStrictEqual("$level"); }      
  ); 
  
  test
  ( '"@level" should be transformed into 0',
    () => { expect(c_t.transform({ value: "@level" })).toStrictEqual(0); }      
  );
  
  test
  ( '["@level", {"level": "@level"}, ["@level", ["@level"]]] should be transformed into [1, {"level": 2}, [2, [3]]]',
    () => { expect(c_t.transform({ value: ["@level", {"level": "@level"}, ["@level", ["@level"]]] })
                  ).toStrictEqual([1, {"level": 2}, [2, [3]]]); 
          }      
  );
}
