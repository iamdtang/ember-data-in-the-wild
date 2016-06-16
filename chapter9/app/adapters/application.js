import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
  namespace: 'api'
  // handleResponse(status, headers, payload, requestData) {
  //   if (this.isInvalid(status)) {
  //     payload.errors = Object.keys(payload.errors).map(function(attribute) {
  //       return {
  //         detail: payload.errors[attribute],
  //         source: {
  //           pointer: `data/attributes/${attribute}`
  //         }
  //       };
  //     });
  //   }
  //
  //   return this._super(status, headers, payload, requestData);
  // }
});
