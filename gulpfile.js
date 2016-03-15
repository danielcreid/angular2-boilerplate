'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

var cleanTask = require('./tasks/clean');
var copyTask = require('./tasks/copy');
var stylesTask = require('./tasks/styles');
var typescriptTask = require('./tasks/typescript');

var clientCopyTask = require('./tasks/client-copy');
var clientBuildTask = require('./tasks/client-build');
var clientStylesTask = require('./tasks/client-styles');

var browserSyncTask = require('./tasks/browser-sync');

gulp.task('clean', cleanTask());
gulp.task('copy', copyTask());
gulp.task('styles', stylesTask());
gulp.task('typescript', typescriptTask(browserSyncTask.notifyChanged));

gulp.task('client-copy', clientCopyTask(browserSyncTask.notifyChanged));
gulp.task('client-build', clientBuildTask(browserSyncTask.notifyChanged));
gulp.task('client-styles', clientStylesTask(browserSyncTask.notifyChanged));

gulp.task('server-start', browserSyncTask());

gulp.task('serve', function(done){
  runSequence(
    'clean',
    //['client-build', 'client-copy', 'client-styles'],
    ['typescript', 'client-copy', 'client-styles'],
    'server-start',
    done
  );
});
