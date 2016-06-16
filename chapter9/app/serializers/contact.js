import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  extractErrors(store, typeClass, payload, id) {
    let extractedErrors = {};
    payload.errors.forEach(function(error) {
      extractedErrors[error.attribute] = Object.keys(error.messages).map(function(rule) {
        return error.messages[rule];
      });
    });

    return extractedErrors
  }
});
