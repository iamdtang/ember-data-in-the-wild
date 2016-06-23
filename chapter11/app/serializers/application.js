import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  modelNameFromPayloadKey(key) {
    return key.replace('Model', '');
  }
});
