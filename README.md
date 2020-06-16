# ```json-transform```

## Zweck

The ```wk-json-transform``` package is used to transform JSON template
objects into JOSN objects. It is developed as part of the lecture
"Web Programming" by [Wolfgang L. J. Kowarschick](https://kowa.hs-augsburg.de).

## Installation

```bash
cd ...
git clone https://github.com/wljkowa/json-transform.git
```

## Verwendung

Objects of the class ```JsonTransform``` transform JSON objects
by means of the method ```transform```. Which transformers are
applied in wich ordering is determined by passing transformer
functions either to the constructor or to the method ```transform```.
In addition, an environment object can be passed to both methods.
The transformer functions can access the enviroment objects.

```bash
import { JsonTransform }        from '@wljkowa/json-transformer-transform/json.transform';
import { transformerArraySome } from '@wljkowa/json-transformer-transform/transformer/transformer.array.some'

let jsonTransform = new JsonTransform({}, [transformerArraySome]);

console.log(jsonTransform.transform(['$some', 5, 7, 9])) -> 5 or 7 or 9 (randomly)
```

See directories ```test``` and ```examples``` for more examples.

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
