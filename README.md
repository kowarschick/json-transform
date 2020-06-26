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

There are several transformers and transformer functions.
Transformer functions are a little bit simpler than
tanformers. They can be passed to the transformer 
<code>JsonTransformerFunction</code> which applies them
when approriate. Compare the two functions
<code>JsonFunctionArraySome</code> and <code>JsonFunctionObjectSome</code> 
with the transformer <code>JsonTransformerSome</some>.

## Complex Example

By means of this package it is, e.g., possible to initialize
a memory game (pairs).

```ts
import { JsonTransformerTraversal }     from '@wljkowa/json-transformer';
import { JsonTransformerFunction }      from '@wljkowa/json-transformer';
import { JsonTransformerStringReplace } from '@wljkowa/json-transformer';

import { JsonFunctionObjectDuplicate }  from '@wljkowa/json-transformer';
import { JsonFunctionObjectSequence }   from '@wljkowa/json-transformer';
import { JsonFunctionObjectShuffle }    from '@wljkowa/json-transformer';
import { JsonFunctionArrayUnnest }      from '@wljkowa/json-transformer';

const
  transformer =
          new JsonTransformerTraversal({ data: { $noOfPairs: 10 } })
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

  pairs =
  { cards: { "$function": "$sequence",
             "$max":      "$noOfPairs",
             "$format":   "image"  
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

console.log(transformer
              .transform({ value: pairs,
                           data:  { $noOfPairs: 4 }
                        })
           );
// =>
// { cards: [ 'image1', 'image2', 'image3', 'image4' ],
//   board: [ 1, 4, 2, 3, 3, 4, 1, 2 ]
// }

console.log(transformer.transform({ value: pairs }));
// =>
// { cards:
//   [ 'image1', 'image2', 'image3', 'image4',
//     'image5', 'image6', 'image7', 'image8',
//     'image9', 'image10'
//   ],
//
//   board:
//   [  6,  8, 7, 5, 6, 7, 5,
//      2,  2, 8, 4, 9, 9, 3,
//     10, 10, 1, 1, 4, 3
//   ]
// }

console.log(transformer
             .transform
              ({ value: pairs,
                 data:  { $noOfPairs: 20,
                          image: i =>
                                 'bild'+('__'+i).slice(-3)
                        }
              })
           );
// =>
// { cards:
//   [ 'bild__1', 'bild__2', 'bild__3', 'bild__4',
//     'bild__5', 'bild__6', 'bild__7', 'bild__8',
//     'bild__9', 'bild_10', 'bild_11', 'bild_12',
//     'bild_13', 'bild_14', 'bild_15', 'bild_16',
//     'bild_17', 'bild_18', 'bild_19', 'bild_20'
//   ],

//   board:
//   [ 5,  3, 14, 17, 18, 17,  5, 16, 11, 10,
//     9, 12, 11, 12, 15,  8,  1, 15, 14,  4,
//     2,  2,  6, 18,  4, 10, 16,  3,  6,  7,
//     7, 13, 19, 20, 13,  1,  9,  8, 20, 19
//   ]
// }
```
## More Examples

See directories ```test``` and ```examples``` for many more examples.

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
