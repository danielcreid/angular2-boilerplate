'use strict';

var config = require('./config').client;

var gulp = require('gulp');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

module.exports = function(callback) {
  return function() {
    var tsResult = tsProject.src()
      .pipe(ts(tsProject, {
        out: 'boot.js'
      }));

    return tsResult.js.pipe(gulp.dest(config.destination));

    //return gulp.src(config.typescript)
    //  //.pipe(watch(config.typescript, { verbose: true }))
    //  //  .on('change', callback)
    //  .pipe(ts({
    //    out: 'boot.js'
    //  }))
    //  .pipe(gulp.dest(config.destination));
  };
};
