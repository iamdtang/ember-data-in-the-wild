import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createContact(e) {
      e.preventDefault();
      let contact = this.store.createRecord('contact', {
        name: this.get('name')
      });

      contact.save();
      this.set('name', '');
    }
  }
});
