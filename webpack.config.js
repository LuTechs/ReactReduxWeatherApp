var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    pageA:'./client_app/index'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CommonsChunkPlugin('common','common.js'),
    new ExtractTextPlugin("styles.css"),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
        include: __dirname
      }
    ]
  },

  devServer: {
   historyApiFallback: true,
   contentBase: './client_app/'
 }
}
