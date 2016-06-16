import DS from 'ember-data';
import Ember from 'ember';

let { $ } = Ember;
let { pluralize } = Ember.String;

export default DS.Adapter.extend({
  findAll(store, type /*, sinceToken, snapshotRecordArray*/) {
    let url = `${this.namespace}/${pluralize(type.modelName)}`;
    return $.get(url);
  },
  findRecord(store, type, id/*, snapshot*/) {
    let url = `${this.namespace}/${pluralize(type.modelName)}/${id}`;
    return $.get(url);
  },
  createRecord(store, type, snapshot) {
    let url = `${this.namespace}/${pluralize(type.modelName)}`;
    let data = {};
    let serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(data, type, snapshot);
    return $.ajax({
      type: 'POST',
      url: url,
      data: JSON.stringify(data)
    });
  },
  updateRecord(store, type, snapshot) {
    let url = `${this.namespace}/${pluralize(type.modelName)}/${snapshot.id}`;
    let data = {};
    let serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(data, type, snapshot);
    return $.ajax({
      type: 'PUT',
      url: url,
      data: JSON.stringify(data)
    });
  },
  deleteRecord(store, type, snapshot) {
    let url = `${this.namespace}/${pluralize(type.modelName)}/${snapshot.id}`;
    return $.ajax({
      type: 'DELETE',
      url: url
    });
  }
});
