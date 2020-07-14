module.exports = 
{ rootDir:         'test',
  testRegex:       '^[^\.]+\.ts$',
  testEnvironment: 'node',
  preset:          'ts-jest',
  resolver:        null,

  globals: 
  { 'ts-jest': { tsconfig: './tsconfig.json' } },

  moduleFileExtensions: 
  ["js", "ts"],

  moduleNameMapper: 
  { '^~/(.*)':  '<rootDir>/../src/$1' },
  
  collectCoverageFrom: 
  [ "./**/*.ts" ],

  coverageReporters: 
  ['json', 'lcov']
};