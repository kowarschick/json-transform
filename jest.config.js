module.exports = 
{ rootDir:         'test',
  testRegex:       '^[^\.]+\.ts$',
  testEnvironment: 'node',
  preset:          'ts-jest',
  resolver:        null,
  globals: 
  { 'ts-jest': { tsconfig: './tsconfig.json' },
  },
  moduleNameMapper: 
  { '^~/(.*)':  '<rootDir>/../src/$1',
  },
};