import EmberRouter from '@ember/routing/router';
import config from 'clarus/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('films');
  this.route('film', { path: '/film/:film_id' });
  this.route('not-found', { path: '/*path' });
  this.route('addFilm');
});
