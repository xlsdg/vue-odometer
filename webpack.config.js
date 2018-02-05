var path = require('path')
var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-odometer.js',
    library: undefined,
    libraryTarget: 'umd'
    // umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs2: 'vue',
      commonjs: 'vue',
      amd: 'vue',
    },
    'odometer': {
      root: 'Odometer',
      commonjs2: 'odometer',
      commonjs: 'odometer',
      amd: 'odometer',
    }
  },
  plugins: [
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true
    // })
  ],
  performance: {
    hints: false
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
};
