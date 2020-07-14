/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

export * from './types' 

// JSON transformers
export * from './transformer';             // base transformer

export * from './level';                   // also exists as function transformer
export * from './null';                    // transforms undefined to null
export * from './random';                  // also exists as function transformer
export * from './some';                    // also exists as function transformer
export * from './string_replace';          // replaces string by values found in data
export * from './template';                // replaces values within strings by data values
export * from './template_functions';      // replaces values within strings by data values/functions
export * from './traversal';               // traveres a JSON value depth first
export * from './traversal_breadth_first'; // traveres a JSON value breath first
export * from './traversal_restricted';    // traverses only certain levels

// JSON functions
export * from './function';                // transformer that invokes JSON functions 
export * from './function/aggregate';      // aggregate functions such as avarage, min, max, sum
export * from './function/count';          // array length
export * from './function/duplicate';      // duplicates elemen ts of an array
export * from './function/level';          // replaces a level string by the current level
export * from './function/random';         // computes random values
export * from './function/sequence';       // generates sequences
export * from './function/shuffle';        // shuffles an array content
export * from './function/some';           // randomly fetches an element of an array
export * from './function/unnest';         // flattens an array
