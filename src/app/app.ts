import { Component } from 'angular2/core';

//var template = require('./src/app/app.html');
//var styles = require('./src/app/app.scss');

var template = require('./app.html');
var styles = require('./app.scss');

@Component({
  selector: 'app',
  templateUrl: '<h1>It works!</h1>'//template,
  //styleUrls: [styles]
})
export class App {}
