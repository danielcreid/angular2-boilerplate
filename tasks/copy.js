'use strict';

var config = require('./config').client;

var gulp = require('gulp');

module.exports = function(callback) {
  return function() {
    gulp.src(config.source)
      .pipe(gulp.dest(config.destination))
      .on('finish', function() {
        if (callback) { callback(); }
      });
  };
};
