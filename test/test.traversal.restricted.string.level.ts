/**
 * @author    Wolfgang L.J. Kowarschick <kowa$hs-augsburg.de>
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */

/*
import { JsonTransformer }                    from '@wljkowa/json/transformer/root';
import { JsonTransformerStringLevel }         from '@wljkowa/json/transformer/string.level';
import { JsonTransformerTraversalRestricted } from '@wljkowa/json/transformer/traversal.restricted';
*/

import { JsonTransformer }                    from '~/root';
import { JsonTransformerStringLevel }         from '~/string.level';
import { JsonTransformerTraversalRestricted } from '~/traversal.restricted';

{ const 
    c_transform = 
           new JsonTransformerTraversalRestricted({init: { minLevel: 2, maxLevel: 3}})
      .add(new JsonTransformerStringLevel({init: '@level'}))
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

{ const c_transformer: JsonTransformer = new JsonTransformerStringLevel();

  test
  ( '"$level" should be transformed into 0',
    () => { expect(c_transformer.transform({ value: "$level" })).toStrictEqual(0); }      
  ); 

  test
  ( '"@level" should not be transformed',
    () => { expect(c_transformer.transform({ value: "@level" })).toStrictEqual("@level"); }        
  );

  test
  ( '["$level", {"level": "$level"}, ["$level", ["$level"]]] should not be transformed',
    () => { expect(c_transformer.transform({ value: ["$level", {"level": "$level"}, ["$level", ["$level"]]] })
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

traversalTests(new JsonTransformerTraversalRestricted({transformer: new JsonTransformerStringLevel()}));

{ const c_transformer = new JsonTransformerTraversalRestricted();
  c_transformer.add(new JsonTransformerStringLevel());

  traversalTests(c_transformer);
}

traversalTests
(      new JsonTransformerTraversalRestricted()
  .add(new JsonTransformerStringLevel())
  .root
);

traversalTests
(      new JsonTransformer()
  .add(new JsonTransformerTraversalRestricted())
  .add(new JsonTransformerStringLevel())
  .root
);

{ const c_transformer = new JsonTransformerTraversalRestricted();
  c_transformer.add(new JsonTransformerStringLevel({init: '@level'}));

  test
  ( '"$level" should be transformed into "$level"',
    () => { expect(c_transformer.transform({ value: "$level" })).toStrictEqual("$level"); }      
  ); 
  
  test
  ( '"@level" should be transformed into 0',
    () => { expect(c_transformer.transform({ value: "@level" })).toStrictEqual(0); }      
  );
  
  test
  ( '["@level", {"level": "@level"}, ["@level", ["@level"]]] should be transformed into [1, {"level": 2}, [2, [3]]]',
    () => { expect(c_transformer.transform({ value: ["@level", {"level": "@level"}, ["@level", ["@level"]]] })
                  ).toStrictEqual([1, {"level": 2}, [2, [3]]]); 
          }      
  );
}
