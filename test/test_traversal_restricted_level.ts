/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonTransformer }                    from '@kowarschick/json-transformer';
import { JsonTransformerLevel }               from '@kowarschick/json-transformer';
import { JsonTransformerTraversalRestricted } from '@kowarschick/json-transformer';
*/

import { JsonTransformer }                    from '~/transformer';
import { JsonTransformerLevel }               from '~/level';
import { JsonTransformerTraversalRestricted } from '~/traversal_restricted';

{ const 
    c_transform = 
           new JsonTransformerTraversalRestricted({init: {minLevel: 2, maxLevel: 3}})
      .pipe(new JsonTransformerLevel({rename: {$level: '@level'} }));

  test
  ( '"@level" should be transformed to "@level"',
    () => { expect(c_transform.transform({ value: "@level" })).toStrictEqual("@level"); }      
  );
  
  test
  ( '["@level", {"level": "@level"}, ["@level", ["@level", ["@level"]]]] should be transformed to ["@level", {"level": 2}, [2, [3, ["@level"]]]]',
    () => { expect(c_transform.transform({ value: ["@level", {"level": "@level"}, ["@level", ["@level", ["@level"]]]] })
                  ).toStrictEqual(["@level", {"level": 2}, [2, [3, ["@level"]]]]); 
          }      
  );
}

{ const c_t: JsonTransformer = new JsonTransformerLevel();

  test
  ( '"$level" should be transformed to 0',
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

{ const c_t: JsonTransformer = new JsonTransformerLevel().pipe(new JsonTransformerLevel());

  test
  ( '"$level" should be transformed to 0',
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
  ( '"$level" should be transformed to 0',
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

traversalTests(new JsonTransformerTraversalRestricted().pipe(new JsonTransformerLevel()));

{ const c_t = new JsonTransformerTraversalRestricted();
  c_t.pipe(new JsonTransformerLevel());

  traversalTests(c_t);
}

traversalTests
(      new JsonTransformerTraversalRestricted()
  .pipe(new JsonTransformerLevel())
);

traversalTests
(      new JsonTransformer()
  .pipe(new JsonTransformerTraversalRestricted())
  .pipe(new JsonTransformerLevel())
);

{ const c_t = new JsonTransformerTraversalRestricted();
  c_t.pipe(new JsonTransformerLevel({ rename: {'$level' : '@level'} }));

  test
  ( '"$level" should be transformed to "$level"',
    () => { expect(c_t.transform({ value: "$level" })).toStrictEqual("$level"); }      
  ); 
  
  test
  ( '"@level" should be transformed to 0',
    () => { expect(c_t.transform({ value: "@level" })).toStrictEqual(0); }      
  );
  
  test
  ( '["@level", {"level": "@level"}, ["@level", ["@level"]]] should be transformed to [1, {"level": 2}, [2, [3]]]',
    () => { expect(c_t.transform({ value: ["@level", {"level": "@level"}, ["@level", ["@level"]]] })
                  ).toStrictEqual([1, {"level": 2}, [2, [3]]]); 
          }      
  );
}
