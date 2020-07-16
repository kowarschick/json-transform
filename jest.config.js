module.exports = 
{ rootDir:         '.',
  testRegex:       '^[^\.]+\.ts$',

  transform:
  {"^.+\\.ts$": "ts-jest"},

  moduleFileExtensions: 
  [ "js", "ts" ],

  moduleNameMapper: 
  { '^~/(.*)':  '<rootDir>/src/$1' },

  testPathIgnorePatterns:
  [ '/node_modules/',
    '/src/',
    'examples_cjs',
    'examples_es6',
    'docs_js',
    'docs_ts',
    'coverage',
    'tmp',
    'transformer',
    'transformer.commented'
  ],

  coverageReporters:
  [ 'lcov', 'text' ]
};