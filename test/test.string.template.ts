/**
 * @author    Wolfgang L.J. Kowarschick {kowa$hs-augsburg.de}
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

/*
import { JsonTransformer }               from '@wljkowa/json/transformer/root';
import { JsonTransformerStringLevel }    from '@wljkowa/json/transformer/string.level';
import { JsonTransformerStringTemplate } from '@wljkowa/json/transformer/string.template';
import { JsonTransformerTraversal }      from '@wljkowa/json/transformer/traversal';
*/

import { JsonTransformer }               from '~/root';
import { JsonTransformerStringLevel }    from '~/string.level';
import { JsonTransformerStringTemplate } from '~/string.template';
import { JsonTransformerTraversal }      from '~/traversal';

function allTests(transformer: JsonTransformer)
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

allTests
(      new JsonTransformerTraversal({ data: { "abc": 123, "hello": "Hallo" } })
  .pipe(new JsonTransformerStringTemplate())
  .root
);

allTests
(      new JsonTransformer()
  .pipe(new JsonTransformerTraversal
       ({data:        { "abc": 123, "hello": "Hallo" },
         transformer: new JsonTransformerStringTemplate()
       })
      )
  .root
);

allTests
(      new JsonTransformer({ data: { "abc": 123, "hello": "Hallo" } })
  .pipe(new JsonTransformerTraversal())
  .pipe(new JsonTransformerStringTemplate())
  .root
)

allTests
(      new JsonTransformer()
  .pipe(new JsonTransformerTraversal({ data: { "abc": 123, "hello": "Hallo" } }))
  .pipe(new JsonTransformerStringTemplate())
  .root
);

allTests
( new JsonTransformerTraversal
  ({ data:        
      { "abc": 123, "hello": "Hallo" },
     transformer:  
       new JsonTransformerStringTemplate
       ({ transformer:
            new JsonTransformerStringLevel()
       })
  })
);

allTests
(      new JsonTransformerTraversal({ data: { "abc": 123, "hello": "Hallo" } })
  .pipe(new JsonTransformerStringTemplate())
  .pipe(new JsonTransformerStringLevel())
  .root
);

allTests
( new JsonTransformerTraversal
  ({ data:        
      { "abc": 123, "hello": "Hallo" },
     transformer:  
       new JsonTransformerStringLevel
       ({ transformer:
            new JsonTransformerStringTemplate()
       })
  })
);

allTests
(      new JsonTransformerTraversal({ data: { "abc": 123, "hello": "Hallo" } })
  .pipe(new JsonTransformerStringLevel())
  .pipe(new JsonTransformerStringTemplate())
  .root
);
