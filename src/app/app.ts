import { Component } from 'angular2/core';

var template = require('./app.html');
var styles = require('./app.scss');

@Component({
  selector: 'app',
  template: template,
  styles: [styles]
})
export class App {}
