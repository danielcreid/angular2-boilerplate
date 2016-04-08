'use strict';

var config = require('./config');

var gulp = require('gulp');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject('tsconfig.json');

module.exports = function(callback) {
  return function() {
    var tsResult = tsProject.src()
      .pipe(sourcemaps.init())
      .pipe(ts(tsProject))
      .on('finish', function() {
        if (callback) { callback(); }
      });

    return tsResult.js
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.destination));
  };
};
