'use strict';

var config = require('./config').client;

var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = function(callback) {
  return function() {
    gulp.src(config.source)
      .pipe(watch(config.source, { verbose: true }))
        .on('change', callback)
      .pipe(gulp.dest(config.destination));

    return gulp.src(config.source)
      .pipe(gulp.dest(config.destination));
  };
};
