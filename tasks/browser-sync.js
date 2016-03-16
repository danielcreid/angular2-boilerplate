'use strict';

var config = require('./config');

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = function() {
  return function() {
    browserSync.init({
      server: {
        baseDir: './' + config.destination
      },
      reloadDelay: 200
    });
  };
};

module.exports.notifyChanged = function() {
  browserSync.reload();
};
