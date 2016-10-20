var webpack = require('webpack');

module.exports = {
  context : __dirname,
  entry : {
    main  : './app/main.js',
    entry : './app/entry.js'
  },
  output : {
    path : './dist',
    filename : '[name].js',
  },
  node : {
    __dirname  : false
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        loader : 'babel-loader',
        exclude : /node_modules/
      },
      {
        test : /\.json$/,
        loader : 'json?sourceMap'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules&localIdentName=[local]--[hash:base64:5]'],
      }
    ]
  },
  target : 'electron'
};