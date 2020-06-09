/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

 // run: node examples/example.string.level.js

const 
  JsonTransformerTraversal      = require('@wljkowa/json/transformer/traversal')      .JsonTransformerTraversal,
  JsonTransformerStringLevel    = require('@wljkowa/json/transformer/string.level')   .JsonTransformerStringLevel,
  JsonTransformerStringTemplate = require('@wljkowa/json/transformer/string.template').JsonTransformerStringTemplate,
  
  trace = require('./trace'),
  
  transformer =  
         new JsonTransformerTraversal({ data:            
                                        { abc:   123,
                                          hello: "Hallo",
                                          name:  "Wolfgang",
                                        }
                                     })
    .add(new JsonTransformerStringLevel())
    .add(new JsonTransformerStringTemplate())
    .root
  ;

trace.title('String: Templates with Placeholders (${name})');

trace.transform(transformer, "${abc}");
trace.transform(transformer, "${hello}, ${name}!");
trace.transform(transformer, "${hello}, ${name}! ${HowAreYou}");
trace.transform(transformer, [["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"]);

trace.end();

/*
trace.title('String: Templates with Placeholders (only rendered on level 2)');

const 
  transformerLevel2 =
    (_) =>
    { return (_.level === 2)
      ? transformerStringTemplate(_)
      : _.value};  

transformerLevel2.type = EnumJsonTransformer.String;


const
  transform2 = 
    new JsonTransform
    ({data:         { "abc": 123, "hello": "Hallo", name:  "Wolfgang", }, 
      transformers: [transformerStringLevel, transformerLevel2]
    });

trace.transform(transform2, [["${abc}"], {abc: "${abc}", "${abc}": "abc"}, "${name}"]);
trace.transform(transform2, ["$level", "${name}", ["$level", "${abc}", ["$level", "${abc}"]], {"level": "$level", "abc": "${abc}", "${name}": "???"}]);


trace.end();
*/