/**
 * $author    Wolfgang L.J. Kowarschick <kowa$hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

/*
import { JsonTransformer }            from '@wljkowa/json-transform/transformer';
import { JsonTransformerStringLevel } from '@wljkowa/json-transform/transformer.string.level';
import { JsonTransformerTraversal }   from '@wljkowa/json-transform/transformer.traversal.restricted';
*/

import { JsonTransformer }            from '~/transformer';
import { JsonTransformerStringLevel } from '~/transformer.string.level';
import { JsonTransformerTraversal }   from '~/transformer.traversal.restricted';

{ const 
    c_transform = 
           new JsonTransformerTraversal({init: { minLevel: 2, maxLevel: 3}})
      .add(new JsonTransformerStringLevel({init: '@level'}))
      .root;

  test
  ( '"@level" should be transformed into "@level"',
    () => { expect(c_transform.transform("@level")).toStrictEqual("@level"); }      
  );
  
  test
  ( '["@level", {"level": "@level"}, ["@level", ["@level", ["@level"]]]] should be transformed into ["@level", {"level": 2}, [2, [3, ["@level"]]]]',
    () => { expect(c_transform.transform(["@level", {"level": "@level"}, ["@level", ["@level", ["@level"]]]])
                  ).toStrictEqual(["@level", {"level": 2}, [2, [3, ["@level"]]]]); 
          }      
  );
}

{ const c_transformer: JsonTransformer = new JsonTransformerStringLevel();

  test
  ( '"$level" should be transformed into 0',
    () => { expect(c_transformer.transform("$level")).toStrictEqual(0); }      
  ); 

  test
  ( '"@level" should not be transformed',
    () => { expect(c_transformer.transform("@level")).toStrictEqual("@level"); }        
  );

  test
  ( '["$level", {"level": "$level"}, ["$level", ["$level"]]] should not be transformed',
    () => { expect(c_transformer.transform(["$level", {"level": "$level"}, ["$level", ["$level"]]])
                  ).toStrictEqual(["$level", {"level": "$level"}, ["$level", ["$level"]]]); 
          }      
  );
}

function traversalTests(transformer: JsonTransformer)
{ test
  ( '"$level" should be transformed into 0',
    () => { expect(transformer.transform("$level")).toStrictEqual(0); }      
  ); 

  test
  ( '"@level" should not be transformed',
    () => { expect(transformer.transform("@level")).toStrictEqual("@level"); }        
  );

  test
  ( '["$level", {"level": "$level"}, ["$level", ["$level"]]] should not be transformed',
    () => { expect(transformer.transform(["$level", {"level": "$level"}, ["$level", ["$level"]]])
                  ).toStrictEqual([1, {"level": 2}, [2, [3]]]); 
          }      
  );
}

traversalTests(new JsonTransformerTraversal({transformer: new JsonTransformerStringLevel()}));

{ const c_transformer = new JsonTransformerTraversal();
  c_transformer.add(new JsonTransformerStringLevel());

  traversalTests(c_transformer);
}

traversalTests
(      new JsonTransformerTraversal()
  .add(new JsonTransformerStringLevel())
  .root
);

traversalTests
(      new JsonTransformer()
  .add(new JsonTransformerTraversal())
  .add(new JsonTransformerStringLevel())
  .root
);

{ const c_transformer = new JsonTransformerTraversal();
  c_transformer.add(new JsonTransformerStringLevel({init: '@level'}));

  test
  ( '"$level" should be transformed into "$level"',
    () => { expect(c_transformer.transform("$level")).toStrictEqual("$level"); }      
  ); 
  
  test
  ( '"@level" should be transformed into 0',
    () => { expect(c_transformer.transform("@level")).toStrictEqual(0); }      
  );
  
  test
  ( '["@level", {"level": "@level"}, ["@level", ["@level"]]] should be transformed into [1, {"level": 2}, [2, [3]]]',
    () => { expect(c_transformer.transform(["@level", {"level": "@level"}, ["@level", ["@level"]]])
                  ).toStrictEqual([1, {"level": 2}, [2, [3]]]); 
          }      
  );
}