import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  // pathForType(modelName) {
  //   return modelName;
  // },
  urlForQuery(query, modelName) {
    let city = Ember.String.dasherize(query.city.toLowerCase());
    delete query.city;
    return `${this.host}/${this.namespace}/contacts/${city}`;
  }
});
