'use strict';

module.exports = {
  client: {
    source: [
      'src/**/*.*',
      '!src/**/*.{ts, scss}',
      '!src/app/**',
      '!src/styles/**'
    ],
    styles: 'src/**/*.scss',
    typescript: 'src/**/*.ts',
    destination: 'dist',
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  }
};
