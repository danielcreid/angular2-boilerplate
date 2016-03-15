'use strict';

var config = require('./config').client;

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');

module.exports = function(callback) {
  return function() {
    gulp.src(config.styles)
      .pipe(plumber())
      .pipe(watch(config.styles, { verbose: true }))
        .on('change', callback)
      .pipe(sass.sync({
        outputStyle: 'expanded',
        errLogToConsole: true,
        includePaths: [
          './src/styles',
          './node_modules/foundation-sites/scss'
        ]
      }))
      .pipe(autoprefixer(config.autoprefixer))
      .pipe(gulp.dest(config.destination))
      .pipe(browserSync.stream());

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
