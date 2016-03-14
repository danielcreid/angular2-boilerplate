'use strict';

var config = require('./config').client;

var gulp = require('gulp');
var del = require('del');

module.exports = function() {
  return function() {
    return del([config.destination]);
  };
};
