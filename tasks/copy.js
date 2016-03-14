'use strict';

var config = require('./config').client;

var gulp = require('gulp');

module.exports = function() {
  return function() {
    return gulp.src(config.source)
      .pipe(gulp.dest(config.destination));
  };
};
