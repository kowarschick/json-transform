/**
 * $author    Wolfgang L.J. Kowarschick {kowa$hs-augsburg.de}
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

/*
import { JsonTransformer }               from '@wljkowa/json-transform/transformer';
import { JsonTransformerStringTemplate } from '@wljkowa/json-transform/transformer.string.template';
import { JsonTransformerTraversal }      from '@wljkowa/json-transform/transformer.traversal';
*/

import { JsonTransformer }               from '~/transformer';
import { JsonTransformerStringTemplate } from '~/transformer.string.template';
import { JsonTransformerTraversal }      from '~/transformer.traversal';

function allTests(transformer: JsonTransformer)
{ test
  ( '"${abc}" should be transformed into 123', 
    () => { expect(transformer.transform("${abc}")).toStrictEqual(123); }
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
