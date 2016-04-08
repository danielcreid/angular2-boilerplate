'use strict';

module.exports = {
  destination: 'dist',
  source: [
    'src/**/*.*',
    '!src/**/*.{ts,scss}'
  ],
  vendor: [
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/router.dev.js',
    'node_modules/angular2/bundles/http.dev.js'
  ],
  styles: 'src/**/*.scss',
  stylesIncludePaths: [
    './src/styles'
  ],
  typescript: 'src/**/*.ts',
  autoprefixer: {
    browsers: ['last 2 versions']
  }
};
