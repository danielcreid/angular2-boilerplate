'use strict';

var config = require('./tasks/config').client;

var gulp = require('gulp');
var runSequence = require('run-sequence');

var watch = require('gulp-watch');

var cleanTask = require('./tasks/clean');
var copyTask = require('./tasks/copy');
var stylesTask = require('./tasks/styles');
var typescriptTask = require('./tasks/typescript');

var browserSyncTask = require('./tasks/browser-sync');

//var clientCopyTask = require('./tasks/client-copy');
//var clientBuildTask = require('./tasks/client-build');
//var clientStylesTask = require('./tasks/client-styles');

gulp.task('clean', cleanTask());
gulp.task('copy', copyTask());
gulp.task('styles', stylesTask());
gulp.task('typescript', typescriptTask());

gulp.task('server-start', browserSyncTask());

//gulp.task('client-copy', clientCopyTask(browserSyncTask.notifyChanged));
//gulp.task('client-build', clientBuildTask(browserSyncTask.notifyChanged));
//gulp.task('client-styles', clientStylesTask(browserSyncTask.notifyChanged));
//
//gulp.task('server-start', browserSyncTask());
//
//gulp.task('serve', function(done){
//  runSequence(
//    'clean',
//    //['client-build', 'client-copy', 'client-styles'],
//    ['typescript', 'client-copy', 'client-styles'],
//    'server-start',
//    done
//  );
//});


gulp.task('serve', function(done) {
  runSequence(
    'clean',
    ['copy', 'typescript', 'styles'],
    'server-start',
    'watch',
    done
  );
});

gulp.task('build:dev', function() {
});

gulp.task('build:prod', function() {
});

gulp.task('watch', function() {
  gulp.watch(config.source, ['copy']);
  gulp.watch(config.styles, ['styles']);
  gulp.watch(config.typescript, ['typescript']);
});
