'use strict';

var config = require('./config').client;

var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

module.exports = function(callback) {
  return function() {
    gulp.src(config.source)
      .pipe(watch(config.source, { verbose: true }))
        .on('change', callback)
      .pipe(gulp.dest(config.destination))
      .pipe(browserSync.stream());

    return gulp.src(config.source)
      .pipe(gulp.dest(config.destination));
  };
};
