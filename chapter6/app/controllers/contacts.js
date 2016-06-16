import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteContact(contact, e) {
      e.preventDefault();
      contact.destroyRecord();
    }
  }
});
