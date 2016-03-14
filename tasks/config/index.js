'use strict';

module.exports = {
  client: {
    source: [
      'src/**/*.*',
      '!src/**/*.{ts, scss}',
      '!src/app/**',
      '!src/styles/**'
    ],
    styles: 'src/styles/**/*.scss',
    destination: 'dist',
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  }
};
