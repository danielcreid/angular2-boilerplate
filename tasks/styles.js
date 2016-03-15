'use strict';

var config = require('./config').client;

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function() {
  return function() {
    return gulp.src(config.styles)
      .pipe(sass.sync({
        outputStyle: 'expanded',
        errLogToConsole: true,
        includePaths: [
          './src/styles',
          './node_modules/foundation-sites/scss'
        ]
      }))
      .pipe(autoprefixer(config.autoprefixer))
      .pipe(gulp.dest(config.destination));
  };
};
