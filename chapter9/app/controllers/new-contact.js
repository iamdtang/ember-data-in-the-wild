import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    Ember.run.later(() => {
      let contact = this.get('model');
      let promise = contact.save();

      promise.then(() => {
        // handle success
      }).catch((error) => {
        console.log('errors: ', contact.get('errors')); // instance of DS.Errors
        console.log('errors.name: ', contact.get('errors.name')); // array of error objects for the name attribute
        console.log('errors.toArray(): ', contact.get('errors').toArray());
        console.log('isValid(): ', contact.get('isValid')); // false
        console.log(error); // instance of DS.InvalidError (if invalid) or DS.AdapterError
        throw error;
      });
    })

  }
});
