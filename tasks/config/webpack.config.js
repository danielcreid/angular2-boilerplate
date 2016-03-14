'use strict';

var config = require('./index').client;

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  entry: {
    boot: './src/boot.ts'
  },
  output: {
    path: path.resolve(__dirname, '../../', config.destination),
    filename: '[name].js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.json', '.ts', '.html', '.css', '.scss']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.scss$/, loaders: ['raw', 'sass'] },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css/, loaders: ['raw'] }
    ]
  },
  devtool: 'eval'
};
