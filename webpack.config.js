const  path = require('path');

function f_path(l_path)
{ return path.resolve(__dirname, l_path); }

module.exports = 
{ entry:  [f_path('examples.es6') + '/examples.es6.js'],
  target: 'node',

  resolve: 
  { extensions: [ '.js' ],
    alias:      { '~': f_path('examples.es6') }
  },

  output: 
  { filename: 'examples.bundle.es6.js',
    path: f_path('./examples.es6')
  },
}
