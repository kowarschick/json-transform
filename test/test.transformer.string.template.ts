/**
 * $author    Wolfgang L.J. Kowarschick {kowa$hs-augsburg.de}
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

/*
import { JsonTransformer }               from '@wljkowa/json/transformer/root';
import { JsonTransformerStringTemplate } from '@wljkowa/json/transformer/string.template';
import { JsonTransformerTraversal }      from '@wljkowa/json/transformer/traversal';
*/

import { JsonTransformer }               from '~/root';
import { JsonTransformerStringTemplate } from '~/string.template';
import { JsonTransformerTraversal }      from '~/traversal';

function allTests(transformer: JsonTransformer)
{ test
  ( '"${abc}" should be transformed into 123', 
    () => { expect(transformer.transform("${abc}")).toStrictEqual(123); }
  );

  test
  ( '"${abc(\'def\')}" should be transformed into "${abc(\'def\')}"', 
    () => { expect(transformer.transform("${abc('def')}")).toStrictEqual("${abc('def')}"); }
  );
  
  test
  ( '"${hello}, ${name}!" should be transformed into "Hallo, Wolfgang!"', 
    () => { expect(transformer.transform("${hello}, ${name}!", {name: "Wolfgang"})
                  ).toStrictEqual("Hallo, Wolfgang!"); 
          }
  );

  test
  ( '"${hello}, ${name}! ${HowAreYou}" should be transformed into "Hallo, Wolfgang! ${HowAreYou}"', 
    () => { expect(transformer.transform("${hello}, ${name}! ${HowAreYou}", {name: "Wolfgang"})
                  ).toStrictEqual("Hallo, Wolfgang! ${HowAreYou}"); 
          }
  );

  test
  ( '[["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"] should be transformed into [[123], {"abc": 123, "123": "abc"}, "Wolfgang"]', 
    () => { expect(transformer.transform([["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"], {name: "Wolfgang"})
                  ).toStrictEqual([[123], {"abc": 123, "123": "abc"}, "Wolfgang"]); 
          }
  );
}

allTests
(      new JsonTransformerTraversal({ data: { "abc": 123, "hello": "Hallo" } })
  .add(new JsonTransformerStringTemplate())
  .root
);

allTests
(      new JsonTransformer()
  .add(new JsonTransformerTraversal
       ({data:        { "abc": 123, "hello": "Hallo" },
         transformer: new JsonTransformerStringTemplate()
       })
      )
  .root
);

allTests
(      new JsonTransformer({ data: { "abc": 123, "hello": "Hallo" } })
  .add(new JsonTransformerTraversal())
  .add(new JsonTransformerStringTemplate())
  .root
)

allTests
(      new JsonTransformer()
  .add(new JsonTransformerTraversal({ data:{ "abc": 123, "hello": "Hallo" } }))
  .add(new JsonTransformerStringTemplate())
  .root
);
