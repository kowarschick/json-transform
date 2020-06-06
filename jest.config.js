module.exports = 
{ rootDir:         'test',
  testRegex:       '.(j|t)s$',
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