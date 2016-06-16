import DS from 'ember-data';
import Ember from 'ember';

export default DS.Serializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (requestType === 'deleteRecord') {
      return {
        data: this.normalize(primaryModelClass, {
          id: id
        })
      };
    }

    let { modelName } = primaryModelClass;
    let pluralizedModelName = Ember.String.pluralize(modelName);

    if (Array.isArray(payload[pluralizedModelName])) {
      return {
        data: payload[pluralizedModelName].map((record) => {
          return this.normalize(primaryModelClass, record);
        })
      };
    }

    return {
      data: this.normalize(primaryModelClass, payload[modelName])
    };
  },
  normalize(typeClass, hash) {
    return {
      id: hash.id,
      type: typeClass.modelName,
      attributes: hash
    };
  },
  // serializeIntoHash(hash, typeClass, snapshot) {
  //   let serializedData = {};
  //
  //   snapshot.eachAttribute((name, meta) => {
  //     serializedData[name] = snapshot.attr(name);
  //   });
  //
  //   hash[typeClass.modelName] = serializedData;
  // },
  serializeIntoHash(hash, typeClass, snapshot) {
    hash[typeClass.modelName] = this.serialize(snapshot);
  },
  serialize(snapshot) {
    let serializedData = {};

    if (snapshot.id) {
      serializedData.id = snapshot.id;
    }

    snapshot.eachAttribute((name) => {
      serializedData[name] = snapshot.attr(name);
    });

    return serializedData;
  }
});
