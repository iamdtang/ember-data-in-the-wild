import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('contact', {
      name: 'David'
    });
  }
});
