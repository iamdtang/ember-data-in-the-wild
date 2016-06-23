import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  modelNameFromPayloadKey(key) {
    console.log('company serializer: ', key); // not called
    return 'company';
  }
});
