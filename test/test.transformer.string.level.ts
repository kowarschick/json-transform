/**
 * $author    Wolfgang L.J. Kowarschick <kowa$hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

/*
import { JsonTransform }          from '@wljkowa/json-transform';
import { transformerStringLevel } from '@wljkowa/json-transform/transformer/transformer.string.level';
*/

import { JsonTransformerStringLevel } from '~/transformer.string.level';

const 
  c_transform = new JsonTransformerStringLevel();

test
( '"$level" should be transformed into 0',
  () => { expect(c_transform.transform("$level")
                ).toStrictEqual(0); 
        }      
);  

/*
test
( '["$level", {"level": "$level"}, ["$level", ["$level"]]] should be transformed into [1, {"level": 2}, [2, [3]]]',
  () => { expect(c_transform.transform(["$level", {"level": "$level"}, ["$level", ["$level"]]])
                ).toStrictEqual([1, {"level": 2}, [2, [3]]]); 
        }      
);
*/