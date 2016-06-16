import Ember from 'ember';

export default Ember.Controller.extend({
  newName: Ember.computed('model.name', {
    get() {
      return this.get('model.name');
    },
    set(key, value) {
      return value;
    }
  }),
  actions: {
    editContact(contact, e) {
      e.preventDefault();
      contact.set('name', this.get('newName'));
      contact.save();
      this.set('newName', '');
    }
  }
});
