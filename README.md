# @wljkowa/json-transformer

The ```@wljkowa/json-transformer``` package is used to transform JSON template
objects into JOSN objects. It is developed as part of the lecture
"Web Programming" by [Wolfgang L. J. Kowarschick](https://kowa.hs-augsburg.de).

This package can be used in all cases, when an application is initialized
by means of a JSON file. The content of such file can be transforemd in
in a variety of ways. Typical applications are game levels, REST APIs or
config files.

A game level, e.g, often is described by a JSON file. Many elements of
a level are usually created randomly, the size of the level may depend on
the size of the browser window etc. Below is a slightly more complex example:
The JSON transformer package is used to shuffle the tokens of a memory game
(Pairs).


## Installation

```bash
npm install --save @wljkowa/json-transformer
```

## Usage

Objects of the class ```JsonTransformer``` transform JSON objects
by means of the method ```transform```. Which transformers are
applied in wich ordering is determined by passing transformer
functions either to the constructor or to the method ```transform```.
In addition, an environment object can be passed to both methods.
The transformer functions can access the enviroment objects.

```bash
Import { JsonTransformerSome } from '@wljkowa/json-transformer';

const t1 = new JsonTransformerSome();

t1.transform({ value: [ "$some", 5, 7, 9] }) // => 5 or 7 or 9
```

See directories ```test``` and ```examples``` for more examples.

## Complex Example

By means of this package it is, e.g., possible to initialize
a memory game.

```ts
import { JsonTransformerTraversal }     from '~/traversal';
import { JsonTransformerFunction }      from '~/function';
import { JsonTransformerStringReplace } from '~/string_replace';

import { JsonFunctionObjectDuplicate } from '~/function/object_duplicate';
import { JsonFunctionObjectSequence }  from '~/function/object_sequence';
import { JsonFunctionObjectShuffle }   from '~/function/object_shuffle';
import { JsonFunctionArrayUnnest }     from '~/function/array_unnest';

const
  c_t =   new JsonTransformerTraversal({ data: { $noOfPairs: 10 } })
    .pipe(new JsonTransformerFunction
              ({init:
                { functions:
                  [ JsonFunctionObjectDuplicate,
                    JsonFunctionObjectSequence,
                    JsonFunctionObjectShuffle,
                    JsonFunctionArrayUnnest,
                  ]
                }
              })
         )
    .pipe(new JsonTransformerStringReplace())
    .root,

  c_memory =
  { cards: { "$function": "$sequence",
             "$max":      "$noOfPairs",
             "$prefix":   "image"  
           },
    board: { "$function": "$shuffle", 
             "$value":    { "$function":    "$duplicate", 
                            "$value":       { "$function": "$sequence", 
                                              "$max":      "$noOfPairs" 
                                            }, 
                            "$times":       2,
                            "$withinArray": true
                          }
           }
  };

console.log(c_t.transform({ value: c_memory,
                            data:  { $noOfPairs: 4 }
                         })
           );
// =>
// { cards: [ 'image1', 'image2', 'image3', 'image4' ],
//   board: [ 1, 4, 2, 3, 3, 4, 1, 2 ]
// }

console.log(c_t.transform({ value: c_memory })
           );
// =>
// { cards: [ 'image1', 'image2', 'image3', 'image4',
//            'image5', 'image6', 'image7', 'image8',
//            'image9', 'image10'
//          ],
//   board: [  6,  8, 7, 5, 6, 7, 5,
//             2,  2, 8, 4, 9, 9, 3,
//            10, 10, 1, 1, 4, 3
//          ]
// }

console.log(c_t.transform({ value: c_memory,
                            data:  { $noOfPairs: 20 }
                         })
           );
// =>
// { cards: [ 'image1',  'image2',  'image3',  'image4',
//            'image5',  'image6',  'image7',  'image8',
//            'image9',  'image10', 'image11', 'image12', 
//            'image13', 'image14', 'image15', 'image16', 
//            'image17', 'image18', 'image19', 'image20'
//          ],
//   board: [ 5,  3, 14, 17, 18, 17,  5, 16, 11, 10,
//            9, 12, 11, 12, 15,  8,  1, 15, 14,  4,
//            2,  2,  6, 18,  4, 10, 16,  3,  6,  7,
//            7, 13, 19, 20, 13,  1,  9,  8, 20, 19
//          ]
// }
```

## License

The MIT License (MIT, <https://opensource.org/licenses/MIT>)

Copyright © 2020 Wolfgang L. J. Kowarschick

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
