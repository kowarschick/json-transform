/**
 * @author    Wolfgang L. J. Kowarschick {kowa@hs-augsburg.de}
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonValue, JsonObject, Data }      from '@kowa/json-transformer';
import { JsonFunctionParameters }           from '@kowa/json-transformer';
import { JsonTransformer }                  from '@kowa/json-transformer';
import { JsonTransformerTemplateFunctions } from '@kowa/json-transformer';
import { JsonTransformerTraversal }         from '@kowa/json-transformer';
*/

import { JsonValue, JsonObject, Data }      from '~/types';
import { JsonFunctionParameters }           from '~/types';
import { JsonTransformer }                  from '~/transformer';
import { JsonTransformerTemplateFunctions } from '~/template_functions';
import { JsonTransformerTraversal }         from '~/traversal';

interface Point extends JsonObject
{ x: number,
  y: number
}
 
// type instead of interface works, too
type Data2 
= Data & 
  { fps: number,
    vps: JsonTransformer
  }

const 
  c_data =
    { abc:   123, 
      hello: "Hallo",
      fps:    50, 
      vpf:   ({value, data}: JsonFunctionParameters): JsonValue => 
             [ (value as Point).x/c_data.fps,
               (value as Point).y/(data as Data2).fps,
             ],
      def:   () => 123
    },
  
  c_t =   new JsonTransformerTraversal({ data: c_data })
    .pipe(new JsonTransformerTemplateFunctions());

  test
  ( '"${vpf({\'x\':100, \'y\':200})" should be transformed to "{v: [2, 4]}"', 
    () => { expect(c_t.transform({ value: "${vpf({'x':100, 'y':200})}" }))
              .toStrictEqual([2, 4]); 
          }
  );

  test
  ( '"{v: ${vpf({\'x\':100, \'y\':200})}}" should be transformed to "{v: [2,4]}"', 
    () => { expect(c_t.transform({ value: "{v: ${vpf({'x':100, 'y':200})}}" }))
              .toStrictEqual("{v: [2,4]}"); 
          }
  );
  
  test
  ( '{v: "${vpf({\'x\':100, \'y\':200})}"} should be transformed to {v: [2,4]}', 
    () => { expect(c_t.transform({ value: {v: "${vpf({'x':100, 'y':200})}"} }))
              .toStrictEqual({v: [2,4]}); 
          }
  );

  test
  ( 'complex nested objects should work, too', 
    () => { expect(c_t.transform({ value:  [{v: "${vpf({'x':100, 'y':200})}"}, {a: "${vpf({'x':200, 'y':400})}"}] }))
              .toStrictEqual([{v: [2,4]}, {a: [4,8]}]); 
          }
  );

  test
  ( '"${def()}" should be transformed to 123', 
    () => { expect(c_t.transform({ value: "${def()}" })).toBe(123); }
  );

  test
  ( '"${abc}" should be transformed to 234', 
    () => { expect(c_t.transform({ value: "${abc}", data: {abc: 234} })
                  ).toStrictEqual(234); 
          }
  );

  test
  ( '"${def()}" should be transformed to 234', 
    () => { expect(c_t.transform({ value: "${def()}", data: {def: () => 234} })).toBe(234); }
  );



function stringTests(transformer: JsonTransformer)
{ test
  ( '"${abc}" should be transformed to 123', 
    () => { expect(transformer.transform({ value: "${abc}" })).toStrictEqual(123); }
  );

  test
  ( '"${abc(\'def\')}" should be transformed to "${abc(\'def\')}"', 
    () => { expect(transformer.transform({ value: "${abc('def')}" })).toStrictEqual("${abc('def')}"); }
  );

  test
  ( '"${hello}, ${name}!" should be transformed to "Hallo, Wolfgang!"', 
    () => { expect(transformer.transform({ value: "${hello}, ${name}!", data: {name: "Wolfgang"} })
                  ).toStrictEqual("Hallo, Wolfgang!"); 
          }
  );

  test
  ( '"${hello}, ${name}! ${HowAreYou}" should be transformed to "Hallo, Wolfgang! ${HowAreYou}"', 
    () => { expect(transformer.transform({ value: "${hello}, ${name}! ${HowAreYou}", data: {name: "Wolfgang"} })
                  ).toStrictEqual("Hallo, Wolfgang! ${HowAreYou}"); 
          }
  );

  test
  ( '[["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"] should be transformed to [[123], {"abc": 123, "123": "abc"}, "Wolfgang"]', 
    () => { expect(transformer.transform({ value: [["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"], data: {name: "Wolfgang"} })
                  ).toStrictEqual([[123], {"abc": 123, "123": "abc"}, "Wolfgang"]); 
          }
  );
}

stringTests
(       new JsonTransformerTraversal({ data: { "abc": 123, "hello": "Hallo" } })
  .pipe(new JsonTransformerTemplateFunctions())
);

stringTests
(       new JsonTransformer()
  .pipe(new JsonTransformerTraversal({data: { "abc": 123, "hello": "Hallo" } }))
  .pipe(new JsonTransformerTemplateFunctions())
);

stringTests
(       new JsonTransformer({ data: { "abc": 123, "hello": "Hallo" } })
  .pipe(new JsonTransformerTraversal())
  .pipe(new JsonTransformerTemplateFunctions())
);

{ const 
    c_t =   new JsonTransformerTraversal()
      .pipe(new JsonTransformerTemplateFunctions()),
    
    c_rest =
    { "links": 
      { "self":   "${base}/articles",
        "parent": "${base}"
      },
    
      "data": "${articles()}"
    },
    
    c_data = 
    { base: "https://www.example.com/v1",
      articles: () => [ { id: 1, type: "articels", title: "Apple" },
                        { id: 2, type: "articles", title: "Orange" },
                      ]
    },

    c_result =
    { links: 
      { self:   'https://www.example.com/v1/articles',
        parent: 'https://www.example.com/v1'
      },
      data: 
      [ { id: 1, type: 'articels', title: 'Apple' },
        { id: 2, type: 'articles', title: 'Orange' }
      ]
    };

  test
  ( 'REST API', 
    () => { expect(c_t.transform({ value: c_rest, data: c_data })).toStrictEqual(c_result); }
  );
}