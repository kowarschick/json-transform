[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/kowarschick/json-transform.svg?branch=master)](https://travis-ci.org/kowarschick/json-transform)
[![Coverage Status](https://coveralls.io/repos/github/kowarschick/json-transform/badge.svg?branch=master)](https://coveralls.io/github/kowarschick/json-transform?branch=master)

## A modular JSON tranformer package

The ```@kowarschick/json-transformer``` package is used to transform JSON template
objects into JSON objects. It has been developed in course of the lecture
“Web Programming” by [Wolfgang L. J. Kowarschick](https://kowa.hs-augsburg.de).

This package can be used in all cases where an application is initialized
using a JSON file. The content of such file can be transformed in
a variety of ways. Typical applications are REST API templates, game levels, or
configuration files.

Please note that I use the [Horstmann Brace Style](https://horstmann.com/unblog/2010-06-28/braces.html).
Every LISP programmer knows why. Moverover, since I like to make code readable manually, I currently
don't use any linter.

## Installation

```bash
npm install --save @kowarschick/json-transformer
```

## Usage

Objects of the class ```JsonTransformer``` transform JSON objects
by means of the method ```transform```. The ```JsonTransformerSome```,
which is a subclass of ```JsonTransformer```, e.g., returns randomly
an element of an array starting with ```$some```. The head element
```$some``` is, of course, never returned.

```ts
Import { JsonTransformerSome } from '@kowarschick/json-transformer';

const transformer =
  new JsonTransformerSome();

transformer.transform({ value: ["$some", 5, 7, 9] })
// => 5 or 7 or 9
```

There are several transformers and transformer functions.
Transformer functions are a little somewhat simpler than
stand-alone tranformers. They can be passed to the
```JsonTransformerFunction``` transformer, which applies them
when appropriate. The example above could also be
implemented as follows:

```ts
Import { JsonTransformerFunction } from '@kowarschick/json-transformer';
Import { JsonFunctionSome }        from '@kowarschick/json-transformer';

const transformer =
  new JsonTransformerFunction({ init: [JsonFunctionSome] });

transformer.transform({ value: ["$some", 5, 7, 9] })
// => 5 or 7 or 9
```

Every transformer function can also be implemented as stand-alone
transformer. The contrary, however, is not true: More complex
transformers, such as ```JsonTransformerTraversal``` (see below),
cannot be realized as transformer functions.

Transformers can be connected to more complex transformers
by means of the ```pipe``` method. For instance, the traversal
transformer ```JsonTransformerTraversal``` recursively
traverses a JSON object and applies the transformers of
the pipe to each element.

In the next example there is a third transformer used:
The level transformer ```JsonTransformerLevel``` replaces the
string ```"$level"``` by the level of the JSON container which it
is a member of.

```ts
Import { JsonTransformerTraversal } from '@kowarschick/json-transformer';
Import { JsonTransformerLevel }     from '@kowarschick/json-transformer';
Import { JsonFunctionSome }         from '@kowarschick/json-transformer';

const
  transformer =
         new JsonTransformerTraversal()
   .pipe(new JsonTransformerLevel())
   .pipe(new JsonTransformerSome());

transformer.transform
({ value: ["$some", "$level", ["$level"], [["$level"]] })
// => 1 or [2] or [[3]]
```

## REST API Example

One area where JSON transformers are useful are REST APIs.
Before delivering JSON data to a client you can define approriate
JSON templates. Those templates can be transformed to the
JSON to be delivered, by using the transformers ```JsonTransformerTraversal```
and ```JsonTransformerTemplateFunctions```.

The first transformer has already been introduced, the
second transformer tests whether the current element
is a string. If so, it looks into the data object
(which may be passed either to the transformer itself
as default data object or to the method ```transform```
as current data object) whether there are appropiate
replacement values for specific string templates
(```${...}```). If such a replacement value is found,
the string template (not the whole string) is replaced
by the value found in the data object.

In contrast to ```JsonTransformerTemplate``` the
```JsonTransformerTemplateFunctions``` transformer also
supports string templates with function calls: ```${...(...)}```.
If such a template is found and a suitable function is found
in the data object that function is invoked to compute the
replacement value.

```ts
Import { JsonTransformerTraversal }         from '@kowarschick/json-transformer';
Import { JsonTransformerTemplateFunctions } from '@kowarschick/json-transformer';

const
  transformer =
         new JsonTransformerTraversal()
   .pipe(new JsonTransformerTemplateFunctions()),
  
  restTemplate =
  { "links":
    { "self":   "${base}/articles",
      "parent": "${base}"
    },
  
    "data": "${articles()}"
  },
  
  data =
  { base:     "https://www.example.com/v1",
    articles: () =>
              [ { id: 1, type: "articels", title: "Apple"  },
                { id: 2, type: "articles", title: "Orange" },
              ]
              // usually computed by calling some database service
  };

console.log
( transformer.transform({ value: restTemplate, data: data }) );

// =>
// { "links":
//   { "self":   "https://www.example.com/v1/articles",
//     "parent": "https://www.example.com/v1"
//   },
//   "data":
//   [ { "id": 1, type: "articels", title: "Apple" },
//     { "id": 2, type: "articles", title: "Orange" }
//   ]
// }
```

## Complex Game Level Example

A game level, e.g., often is described by a JSON file. Many elements of
a level are usually created randomly, the size of the level may depend on
the size of the browser window etc.

Below is a slightly more complex example: The JSON transformer package
is used to shuffle the tokens of a memory game (Pairs).

```JsonTransformerStringReplace``` replaces certain strings by
values found in the data object. It is less complex and more
performant than ```JsonTransformerTemplate``` as it does not
support string templates. It only replaces complete strings
by other values.

```ts
import { JsonTransformerTraversal }     from '@kowarschick/json-transformer';
import { JsonTransformerFunction }      from '@kowarschick/json-transformer';
import { JsonTransformerStringReplace } from '@kowarschick/json-transformer';

import { JsonFunctionDuplicate }        from '@kowarschick/json-transformer';
import { JsonFunctionSequence }         from '@kowarschick/json-transformer';
import { JsonFunctionShuffle }          from '@kowarschick/json-transformer';
import { JsonFunctionUnnest }           from '@kowarschick/json-transformer';

const
  transformer =  
          new JsonTransformerTraversal
              ({ data:
                 { "@noOfPairs": 10,
                   "@image":     i => 'image'+i
                 }
              })
    .pipe(new JsonTransformerFunction
              ({ init:
                 [ JsonFunctionDuplicate,
                   JsonFunctionSequence,
                   JsonFunctionShuffle,
                   JsonFunctionUnnest,
                 ]
              })
         )
    .pipe(new JsonTransformerStringReplace()),

  pairs =
  { cards: { "$function": "$sequence",
             "$last":     "@noOfPairs",
             "$format":   "@image"  
           },
    board: { "$function": "$shuffle",
             "$value":    { "$function": "$duplicate",
                            "$value":    { "$function": "$sequence",
                                           "$last":     "@noOfPairs"
                                         },
                            "$times":    2,
                            "$flatten":  true
                          }
           }
  };

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

console.log
( transformer.transform
  ({ value: pairs,
     data:  { "@noOfPairs": 4 }
  })
);
// =>
// { cards: [ 'image1', 'image2', 'image3', 'image4' ],
//   board: [ 1, 4, 2, 3, 3, 4, 1, 2 ]
// }

console.log
( transformer.transform
  ({ value: pairs,
     data:  
     { "@noOfPairs": 20,
       "@image":     i => 'bild'+('__'+i).slice(-3)
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

See directories ```examples_cjs```,  ```examples_es6```, and ```test``` for
many more examples.

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
