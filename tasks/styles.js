'use strict';

var config = require('./config');

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function(callback) {
  return function() {
    return gulp.src(config.styles)
      .pipe(sass.sync({
        outputStyle: 'expanded',
        errLogToConsole: true,
        includePaths: config.stylesIncludePaths
      }).on('error', sass.logError))
      .pipe(autoprefixer(config.autoprefixer))
      .pipe(gulp.dest(config.destination))
      .on('finish', function() {
        if (callback) { callback(); }
      });
  };
};
