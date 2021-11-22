import EmberRouter from '@ember/routing/router';
import config from 'dz3/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('Book');
  this.route('xxx', function () {
    this.route('edit');
    this.route('xedit');
  });
  this.route('edit');
});
