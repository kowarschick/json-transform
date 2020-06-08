/**
 * $author    Wolfgang L.J. Kowarschick <kowa$hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

/*
import { JsonTransformer }            from '@wljkowa/json-transform/transformer';
import { JsonTransformerStringLevel } from '@wljkowa/json-transform/transformer.string.level';
import { JsonTransformerTraversal }   from '@wljkowa/json-transform/transformer.traversal';
*/

import { JsonTransformer }            from '~/transformer';
import { JsonTransformerStringLevel } from '~/transformer.string.level';
import { JsonTransformerTraversal }   from '~/transformer.traversal';

let l_transform: JsonTransformer = new JsonTransformerStringLevel();

test
( '"$level" should be transformed into 0',
  () => { expect(l_transform.transform("$level")).toStrictEqual(0); }      
); 

test
( '"@level" should not be transformed',
  () => { expect(l_transform.transform("@level")).toStrictEqual("@level"); }      
);

test
( '["$level", {"level": "$level"}, ["$level", ["$level"]]] should not be transformed',
  () => { expect(l_transform.transform(["$level", {"level": "$level"}, ["$level", ["$level"]]])
                ).toStrictEqual(["$level", {"level": "$level"}, ["$level", ["$level"]]]); 
        }      
);

l_transform = new JsonTransformerTraversal({transformers: new JsonTransformerStringLevel()});

test
( '"$level" should be transformed into 0',
  () => { expect(l_transform.transform("$level")).toStrictEqual(0); }      
); 

test
( '"@level" should be transformed into "@level"',
  () => { expect(l_transform.transform("@level")).toStrictEqual("@level"); }      
);

test
( '["$level", {"level": "$level"}, ["$level", ["$level"]]] should be transformed into [1, {"level": 2}, [2, [3]]]',
  () => { expect(l_transform.transform(["$level", {"level": "$level"}, ["$level", ["$level"]]])
                ).toStrictEqual([1, {"level": 2}, [2, [3]]]); 
        }      
);