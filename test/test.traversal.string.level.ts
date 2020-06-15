/**
 * @author    Wolfgang L.J. Kowarschick <kowa$hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonTransformer }            from '@wljkowa/json/transformer/root';
import { JsonTransformerStringLevel } from '@wljkowa/json/transformer/string.level';
import { JsonTransformerTraversal }   from '@wljkowa/json/transformer/traversal';
*/

import { JsonTransformer }            from '~/transformer';
import { JsonTransformerStringLevel } from '~/string.level';
import { JsonTransformerTraversal }   from '~/traversal';

{ const c_t: JsonTransformer = new JsonTransformerStringLevel();

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
    () => { expect(transformer.transform({ value: "@level" })).toStrictEqual("@level"); }        
  );

  test
  ( '["$level", {"level": "$level"}, ["$level", ["$level"]]] should not be transformed',
    () => { expect(transformer.transform({ value: ["$level", {"level": "$level"}, ["$level", ["$level"]]] })
                  ).toStrictEqual([1, {"level": 2}, [2, [3]]]); 
          }      
  );
}

traversalTests(new JsonTransformerTraversal({transformer: new JsonTransformerStringLevel()}));

{ const c_t = new JsonTransformerTraversal();
  c_t.pipe(new JsonTransformerStringLevel());

  traversalTests(c_t);
}

traversalTests
(      new JsonTransformerTraversal()
  .pipe(new JsonTransformerStringLevel())
  .root
);

traversalTests
(      new JsonTransformer()
  .pipe(new JsonTransformerTraversal())
  .pipe(new JsonTransformerStringLevel())
  .root
);

{ const c_t = new JsonTransformerTraversal();
  c_t.pipe(new JsonTransformerStringLevel({init: '@level'}));

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
