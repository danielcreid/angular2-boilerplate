import 'es6-shim/es6-shim';
import 'systemjs/dist/system-polyfills';
//import 'angular2/es6/dev/src/testing/shims_for_IE'; // Broken?
import 'angular2/bundles/angular2-polyfills';
import 'systemjs/dist/system';
import 'rxjs/bundles/Rx';
import 'angular2/bundles/angular2.dev';

import { bootstrap } from 'angular2/platform/browser';
import { App } from './app/app';

bootstrap(App);
