'use strict';

var config = require('./tasks/config');

var gulp = require('gulp');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');
var util = require('gulp-util');
var path = require('path');

var cleanTask = require('./tasks/clean');
var copyTask = require('./tasks/copy');
var stylesTask = require('./tasks/styles');
var typescriptTask = require('./tasks/typescript');
var browserSyncTask = require('./tasks/browser-sync');

gulp.task('clean', cleanTask());
gulp.task('copy', copyTask());
gulp.task('styles', stylesTask());
gulp.task('typescript', typescriptTask());
gulp.task('server-start', browserSyncTask());

gulp.task('watch', function() {
  var logChangedFile = function(file) {
    util.log(util.colors.green(path.basename(file.path)) + ' was changed');
  };

  gulp.watch(config.source, ['copy']).on('change', function(file) {
    logChangedFile(file);
    browserSyncTask.notifyChanged();
  });

  gulp.watch(config.styles, ['styles']).on('change', function(file) {
    logChangedFile(file);
    browserSyncTask.notifyChanged();
  });

  gulp.watch(config.typescript, ['typescript']).on('change', function(file) {
    logChangedFile(file);
    browserSyncTask.notifyChanged();
  });
});

gulp.task('serve', function(done) {
  runSequence(
    'clean',
    ['copy', 'typescript', 'styles'],
    'server-start',
    'watch',
    done
  );
});

gulp.task('build:dev', function() {});

gulp.task('build:prod', function() {});
