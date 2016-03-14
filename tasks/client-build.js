'use strict';

var config = require('./config').client;

var gulp = require('gulp');
var util = require('gulp-util');
var webpack = require('webpack');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

module.exports = function(callback) {
  return function() {
    var webpackConfig = require('./config/webpack.config.js');
    var webpackBuild = webpack(webpackConfig);
    var firstRun = true;

    var callbackOnBuild = function(err, stats) {
      if (err) {
        throw new util.PluginError('webpack:error', err);
      }

      var statistics = stats.toJson({
        children: false,
        source: false,
        modules: false,
        chunkModules: false
      });

      var elapsedTime = Math.round(statistics.time / 10) / 100;

      if (firstRun) {
        firstRun = false;
      } else {
        util.log(`webpack:build ${elapsedTime}s`);
        callback();
      }
    };

    webpackBuild.watch({ aggregateTimeout: 100 }, callbackOnBuild);
  };
};
