import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contacts');
  this.route('contact', { path: 'contacts/:id' });
  this.route('normalizing-responses');
  this.route('normalize');
  this.route('create-contact');
});

export default Router;
