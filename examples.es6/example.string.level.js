/**
 * $author    Wolfgang L.J. Kowarschick <kowa@hs-augsburg.de>
 * $copyright 2020  Wolfgang Kowarschick
 * $license   MIT
 */

import JsonTransformerStringLevel from '@wljkowa/json/transformer/string.level.js';
import JsonTransformerTraversal   from '@wljkowa/json/transformer/traversal.js';

import trace from './trace';

const 
  transformer =  
         new JsonTransformerTraversal()
    .add(new JsonTransformerStringLevel())
    .root
  ;

trace.title('String: $level (cjs)');

trace.transform(transformer, "$level");
trace.transform(transformer, ["$level", {"level": "$level"}, ["$level", ["$level"]]]);
trace.transform(transformer, ["$level", {"level": "$level"}, ["$level", ["$level", ["$level", {"level": "$level"}, ["$level", ["$level"]]]]]]);

trace.end();
