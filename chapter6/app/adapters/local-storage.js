import DS from 'ember-data';
import Ember from 'ember';

let { $, RSVP } = Ember;
let { pluralize } = Ember.String;

export default DS.Adapter.extend({
  _getDataFromStorage() {
    let jsonString = localStorage.getItem(this.namespace);

    if (!jsonString) {
      return {};
    }

    return JSON.parse(jsonString);
  },
  findAll(store, type /*, sinceToken, snapshotRecordArray*/) {
    let json = this._getDataFromStorage();
    let { modelName } = type;
    let storageKeyForModelName = pluralize(modelName);
    let records = json[storageKeyForModelName];

    if (!records) {
      json[storageKeyForModelName] = [];
    }

    return RSVP.resolve(json);
  },
  findRecord(store, type, id, snapshot) {
    let json = this._getDataFromStorage();
    let { modelName } = type;
    let storageKeyForModelName = pluralize(modelName);
    let records = json[storageKeyForModelName];

    if (!records) {
      return RSVP.reject();
    }

    let foundRecord = records.find((record) => {
      return record.id === snapshot.id;
    });

    if (foundRecord) {
      let payload = {};
      payload[modelName] = foundRecord;
      return RSVP.resolve(payload);
    }

    return RSVP.reject();
  },
  createRecord(store, type, snapshot) {
    let { modelName } = type;
    let data = {};
    let serializer = store.serializerFor(modelName);
    serializer.serializeIntoHash(data, type, snapshot);

    let record = data[modelName];
    let json = this._getDataFromStorage();
    let storageKeyForModelName = pluralize(modelName);
    let records = json[storageKeyForModelName];

    if (records) {
      let lastRecord = records[records.length - 1];
      record.id = String(Number(lastRecord.id) + 1);
      records.push(record);
    } else {
      record.id = '1';
      json[storageKeyForModelName] = [record];
    }

    localStorage.setItem(this.namespace, JSON.stringify(json));
    return RSVP.resolve(data);
  },
  updateRecord(store, type, snapshot) {
    let { modelName } = type;
    let data = {};
    let serializer = store.serializerFor(modelName);
    serializer.serializeIntoHash(data, type, snapshot);

    let storageKeyForModelName = pluralize(modelName);
    let json = this._getDataFromStorage();
    let records = json[storageKeyForModelName];

    if (!records) {
      return RSVP.reject();
    }

    let recordToUpdate = json[storageKeyForModelName].find((record) => {
      return record.id === snapshot.id;
    });

    if (recordToUpdate) {
      let recordUpdates = data[modelName];
      Ember.merge(recordToUpdate, recordUpdates);
      localStorage.setItem(this.namespace, JSON.stringify(json));
      return RSVP.resolve(data);
    }

    return RSVP.reject();
  },
  deleteRecord(store, type, snapshot) {
    let json = this._getDataFromStorage();
    let { modelName } = type;
    let storageKeyForModelName = pluralize(modelName);
    let records = json[storageKeyForModelName];

    if (!records) {
      return RSVP.reject();
    }

    let indexOfRecordToDelete = records.findIndex((record) => {
      return record.id === snapshot.id;
    });

    if (indexOfRecordToDelete > -1) {
      records.splice(indexOfRecordToDelete, 1);

      if (records.length === 0) {
        delete json[storageKeyForModelName];
      }

      localStorage.setItem(this.namespace, JSON.stringify(json));
      return RSVP.resolve();
    }

    return RSVP.reject();
  }
});
