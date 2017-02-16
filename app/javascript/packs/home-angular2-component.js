import 'es6-shim';
import 'rxjs';
import 'angular2/bundles/angular2-polyfills.min.js';
import { bootstrap } from 'angular2/platform/browser';
import HomeAngularComponent from '../home-angular2';

document.addEventListener('DOMContentLoaded', () => {
  bootstrap(HomeAngularComponent);
});
