const
  path = require('path'),
  TerserPlugin = require('terser-webpack-plugin');

function f_path(l_path)
{ return path.resolve(__dirname, l_path); }

module.exports = 
{ entry:  [f_path('examples_es6') + '/examples_es6.js'],
  target: 'node',

  mode: "production",

  resolve: 
  { extensions: [ '.js' ],
    alias:      { '~': f_path('examples_es6') }
  },

  output: 
  { filename: 'examples_bundle_es6.js',
    path: f_path('./examples_es6')
  },

  optimization: 
  { minimize: true,
    minimizer: [ new TerserPlugin() ],
  },
}
