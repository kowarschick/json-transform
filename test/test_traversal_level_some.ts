/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonTransformer }                      from '@kowarschick/json-transformer';
import { JsonTransformerTraversal }             from '@kowarschick/json-transformer';
import { JsonTransformerTraversalBreadthFirst } from '@kowarschick/json-transformer';
import { JsonTransformerLevel }                 from '@kowarschick/json-transformer';
import { JsonTransformerSome }                  from '@kowarschick/json-transformer';
*/

import { JsonTransformer }                      from '~/transformer';
import { JsonTransformerTraversal }             from '~/traversal';
import { JsonTransformerTraversalBreadthFirst } from '~/traversal_breadth_first';
import { JsonTransformerLevel }                 from '~/level';
import { JsonTransformerSome }                  from '~/some';

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

function traversalTests(transformer: JsonTransformer)
{ test
  ( '"$level" should be transformed to 0',
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

traversalTests(new JsonTransformerTraversal().pipe(new JsonTransformerLevel()));

{ const c_t = new JsonTransformerTraversal();
  c_t.pipe(new JsonTransformerLevel());

  traversalTests(c_t);
}

traversalTests
(       new JsonTransformerTraversal()
  .pipe(new JsonTransformerLevel())
);

traversalTests
(       new JsonTransformer()
  .pipe(new JsonTransformerTraversal())
  .pipe(new JsonTransformerLevel())
);

{ const c_t = new JsonTransformerTraversal();
  c_t.pipe(new JsonTransformerLevel({ rename: {'$level': '@level'} }));

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

{ const
    c_t =   new JsonTransformerTraversal()
      .pipe(new JsonTransformerLevel())
      .pipe(new JsonTransformerSome());


  test
  ( '["$some", "$level", ["$level"], [["$level"]]] should be transformed either into 1 or [2] or [[3]]', 
    () => { const c_result = [];
            for (let i = 0; i < 100; i++)
            { c_result.push(c_t.transform({ value: ["$some", "$level", ["$level"], [["$level"]]] })); } 
            expect([1, [2], [[3]]]).toEqual(expect.arrayContaining(c_result)); 
            expect(c_result).toEqual(expect.arrayContaining([1, [2], [[3]]])); 
          }
  );

  test
  ( '{a: ["$some", "$level", ["$level"], [["$level"]]]} should be transformed either into {a:1} or {a:[2]} or {a:[[3]]}', 
    () => { const c_result = [];
            for (let i = 0; i < 100; i++)
            { c_result.push(c_t.transform({ value: {a: ["$some", "$level", ["$level"], [["$level"]]]} })); } 
            expect([{a:2}, {a:[3]}, {a:[[4]]}]).toEqual(expect.arrayContaining(c_result)); 
            expect(c_result).toEqual(expect.arrayContaining([{a:2}, {a:[3]}, {a:[[4]]}])); 
          }
  );
}

{ const
    c_t =   new JsonTransformer()
      .pipe(new JsonTransformerTraversal().pipe(new JsonTransformerLevel()),
            new JsonTransformerSome(),
           );


  test
  ( '["$some", "$level", ["$level"], [["$level"]]] should be transformed either into 1 or [2] or [[3]]', 
    () => { const c_result = [];
            for (let i = 0; i < 100; i++)
            { c_result.push(c_t.transform({ value: ["$some", "$level", ["$level"], [["$level"]]] })); } 
            expect([1, [2], [[3]]]).toEqual(expect.arrayContaining(c_result)); 
            expect(c_result).toEqual(expect.arrayContaining([1, [2], [[3]]])); 
          }
  );
}

{ const
    c_t =   new JsonTransformer()
      .pipe(new JsonTransformerTraversal().pipe(new JsonTransformerLevel()),
            new JsonTransformerTraversal().pipe(new JsonTransformerSome()),
           );

  test
  ( '{a: ["$some", "$level", ["$level"], [["$level"]]]} should be transformed either into {a:1} or {a:[2]} or {a:[[3]]}', 
    () => { const c_result = [];
            for (let i = 0; i < 100; i++)
            { c_result.push(c_t.transform({ value: {a: ["$some", "$level", ["$level"], [["$level"]]]} })); } 
            expect([{a:2}, {a:[3]}, {a:[[4]]}]).toEqual(expect.arrayContaining(c_result)); 
            expect(c_result).toEqual(expect.arrayContaining([{a:2}, {a:[3]}, {a:[[4]]}])); 
          }
  );
}

{ const
    c_t =   new JsonTransformer()
      .pipe(new JsonTransformerSome(),
            new JsonTransformerTraversal().pipe(new JsonTransformerLevel()),           
           );


  test
  ( '["$some", "$level", ["$level"], [["$level"]]] should be transformed either into 0 or [1] or [[2]]', 
    () => { const c_result = [];
            for (let i = 0; i < 100; i++)
            { c_result.push(c_t.transform({ value: ["$some", "$level", ["$level"], [["$level"]]] })); } 
            expect([0, [1], [[2]]]).toEqual(expect.arrayContaining(c_result)); 
            expect(c_result).toEqual(expect.arrayContaining([0, [1], [[2]]])); 
          }
  );
}

{ const
    c_t =   new JsonTransformer()
      .pipe(new JsonTransformerTraversal().pipe(new JsonTransformerSome()),
            new JsonTransformerTraversal().pipe(new JsonTransformerLevel()), 
           );

  test
  ( '{a: ["$some", "$level", ["$level"], [["$level"]]]} should be transformed either into {a:1} or {a:[2]} or {a:[[3]]}', 
    () => { const c_result = [];
            for (let i = 0; i < 100; i++)
            { c_result.push(c_t.transform({ value: {a: ["$some", "$level", ["$level"], [["$level"]]]} })); } 
            expect([{a:1}, {a:[2]}, {a:[[3]]}]).toEqual(expect.arrayContaining(c_result)); 
            expect(c_result).toEqual(expect.arrayContaining([{a:1}, {a:[2]}, {a:[[3]]}])); 
          }
  );
}

{ const
    c_t =   new JsonTransformerTraversalBreadthFirst()
      .pipe(new JsonTransformerSome())
      .pipe(new JsonTransformerLevel());

  test
  ( '{a: ["$some", "$level", ["$level"], [["$level"]]]} should be transformed either into {a:1} or {a:[2]} or {a:[[3]]}', 
    () => { const c_result = [];
            for (let i = 0; i < 100; i++)
            { c_result.push(c_t.transform({ value: {a: ["$some", "$level", ["$level"], [["$level"]]]} })); } 
            expect([{a:2}, {a:[3]}, {a:[[4]]}]).toEqual(expect.arrayContaining(c_result)); 
            expect(c_result).toEqual(expect.arrayContaining([{a:2}, {a:[3]}, {a:[[4]]}])); 
          }
  );
}