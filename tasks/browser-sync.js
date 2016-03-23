'use strict';

var config = require('./config');

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');

module.exports = function() {
  return function() {
    browserSync.init({
      server: {
        baseDir: './' + config.destination,
        middleware: [historyApiFallback()]
      },
      reloadDelay: 200
    });
  };
};

module.exports.notifyChanged = function() {
  browserSync.reload();
};
