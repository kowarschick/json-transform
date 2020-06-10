/**
 * @author    Wolfgang L.J. Kowarschick {kowa$hs-augsburg.de}
 * @copyright 2020  Wolfgang Kowarschick
 * @license   MIT
 */

/*
import { JsonValue, JsonMap, Data }                         from '@wljkowa/json';
import { JsonFunctionParameters }                           from '@wljkowa/json';
import { JsonTransformer }                                  from '@wljkowa/json/transformer/root';
import { JsonTransformerStringTemplateFunctions }           from '@wljkowa/json/transformer/string.template.functions';
import { JsonTransformerTraversal }                         from '@wljkowa/json/transformer/traversal';
*/

import { JsonValue, JsonMap, Data }               from '~/interfaces';
import { JsonFunctionParameters }                 from '~/interfaces';
import { JsonTransformer }                        from '~/root';
import { JsonTransformerStringTemplateFunctions } from '~/string.template.functions';
import { JsonTransformerTraversal }               from '~/traversal';

interface Point extends JsonMap
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
  
  c_transformer =
         new JsonTransformerTraversal({ data: c_data })
    .add(new JsonTransformerStringTemplateFunctions())
    .root;

  test
  ( '"${vpf({\'x\':100, \'y\':200})" should be transformed into "{v: [2, 4]}"', 
    () => { expect(c_transformer.transform({ value: "${vpf({'x':100, 'y':200})}" }))
              .toStrictEqual([2, 4]); 
          }
  );

  test
  ( '"{v: ${vpf({\'x\':100, \'y\':200})}}" should be transformed into "{v: [2,4]}"', 
    () => { expect(c_transformer.transform({ value: "{v: ${vpf({'x':100, 'y':200})}}" }))
              .toStrictEqual("{v: [2,4]}"); 
          }
  );
  
  test
  ( '{v: "${vpf({\'x\':100, \'y\':200})}"} should be transformed into {v: [2,4]}', 
    () => { expect(c_transformer.transform({ value: {v: "${vpf({'x':100, 'y':200})}"} }))
              .toStrictEqual({v: [2,4]}); 
          }
  );

  test
  ( 'complex nested objects should work, too', 
    () => { expect(c_transformer.transform({ value:  [{v: "${vpf({'x':100, 'y':200})}"}, {a: "${vpf({'x':200, 'y':400})}"}] }))
              .toStrictEqual([{v: [2,4]}, {a: [4,8]}]); 
          }
  );

  test
  ( '"${def()}" should be transformed into 123', 
    () => { expect(c_transformer.transform({ value: "${def()}" })).toBe(123); }
  );

  test
  ( '"${abc}" should be transformed into 234', 
    () => { expect(c_transformer.transform({ value: "${abc}", data: {abc: 234} })
                  ).toStrictEqual(234); 
          }
  );

  test
  ( '"${def()}" should be transformed into 234', 
    () => { expect(c_transformer.transform({ value: "${def()}", data: {def: () => 234} })).toBe(234); }
  );



function stringTests(transformer: JsonTransformer)
{ test
  ( '"${abc}" should be transformed into 123', 
    () => { expect(transformer.transform({ value: "${abc}" })).toStrictEqual(123); }
  );

  test
  ( '"${abc(\'def\')}" should be transformed into "${abc(\'def\')}"', 
    () => { expect(transformer.transform({ value: "${abc('def')}" })).toStrictEqual("${abc('def')}"); }
  );

  test
  ( '"${hello}, ${name}!" should be transformed into "Hallo, Wolfgang!"', 
    () => { expect(transformer.transform({ value: "${hello}, ${name}!", data: {name: "Wolfgang"} })
                  ).toStrictEqual("Hallo, Wolfgang!"); 
          }
  );

  test
  ( '"${hello}, ${name}! ${HowAreYou}" should be transformed into "Hallo, Wolfgang! ${HowAreYou}"', 
    () => { expect(transformer.transform({ value: "${hello}, ${name}! ${HowAreYou}", data: {name: "Wolfgang"} })
                  ).toStrictEqual("Hallo, Wolfgang! ${HowAreYou}"); 
          }
  );

  test
  ( '[["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"] should be transformed into [[123], {"abc": 123, "123": "abc"}, "Wolfgang"]', 
    () => { expect(transformer.transform({ value: [["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"], data: {name: "Wolfgang"} })
                  ).toStrictEqual([[123], {"abc": 123, "123": "abc"}, "Wolfgang"]); 
          }
  );
}

stringTests
(      new JsonTransformerTraversal({ data: { "abc": 123, "hello": "Hallo" } })
  .add(new JsonTransformerStringTemplateFunctions())
  .root
);

stringTests
(      new JsonTransformer()
  .add(new JsonTransformerTraversal
       ({data:        { "abc": 123, "hello": "Hallo" },
         transformer: new JsonTransformerStringTemplateFunctions()
       })
      )
  .root
);

stringTests
(      new JsonTransformer({ data: { "abc": 123, "hello": "Hallo" } })
  .add(new JsonTransformerTraversal())
  .add(new JsonTransformerStringTemplateFunctions())
  .root
)

stringTests
(      new JsonTransformer()
  .add(new JsonTransformerTraversal({ data:{ "abc": 123, "hello": "Hallo" } }))
  .add(new JsonTransformerStringTemplateFunctions())
  .root
);