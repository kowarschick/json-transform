/**
 * @author    Wolfgang L. J. Kowarschick {kowa@hs-augsburg.de}
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonTransformer }          from '@wljkowa/json-transformer';
import { JsonTransformerLevel }     from '@wljkowa/json-transformer';
import { JsonTransformerTemplate }  from '@wljkowa/json-transformer';
import { JsonTransformerTraversal } from '@wljkowa/json-transformer';
*/

import { JsonTransformer }          from '~/transformer';
import { JsonTransformerLevel }     from '~/level';
import { JsonTransformerTemplate }  from '~/template';
import { JsonTransformerTraversal } from '~/traversal';

function allTests(transformer: JsonTransformer)
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

allTests
(      new JsonTransformerTraversal({ data: { "abc": 123, "hello": "Hallo" } })
  .pipe(new JsonTransformerTemplate())
  .root
);

allTests
(      new JsonTransformer({ data: { "abc": 123, "hello": "Hallo" } })
  .pipe(new JsonTransformerTraversal())
  .pipe(new JsonTransformerTemplate())
  .root
)

allTests
(      new JsonTransformer()
  .pipe(new JsonTransformerTraversal({ data: { "abc": 123, "hello": "Hallo" } }))
  .pipe(new JsonTransformerTemplate())
  .root
);

allTests
(      new JsonTransformerTraversal({ data: { "abc": 123, "hello": "Hallo" } })
  .pipe(new JsonTransformerTemplate())
  .pipe(new JsonTransformerLevel())
  .root
);

allTests
(      new JsonTransformerTraversal({ data: { "abc": 123, "hello": "Hallo" } })
  .pipe(new JsonTransformerLevel())
  .pipe(new JsonTransformerTemplate())
  .root
);
