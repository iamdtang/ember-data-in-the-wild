import DS from 'ember-data';
// export default DS.JSONSerializer.extend({
//   normalizeResponse(store, primaryModelClass, payload, id, requestType) {
//     return this._super(store, primaryModelClass, payload.data, id, requestType);
//   }
// });

// export default DS.RESTSerializer.extend({
//   normalizeResponse(store, primaryModelClass, payload, id, requestType) {
//     let newPayload = {};
//     newPayload[primaryModelClass.modelName] = payload.data;
//     return this._super(store, primaryModelClass, newPayload, id, requestType);
//   }
// });

// export default DS.SONSerializer.extend({
//   normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
//     return this._super(store, primaryModelClass, payload.data, id, requestType);
//   }
// });

export default DS.JSONSerializer.extend({
  // normalize(modelClass, resourceHash, prop) {
  //   let { name } = resourceHash;
  //   return {
  //     data: {
  //       id: resourceHash.id,
  //       type: 'contact',
  //       attributes: {
  //         name: `${name.first} ${name.last}`
  //       }
  //     }
  //   };
  // }
  normalize(modelClass, resourceHash, prop) {
    let { name } = resourceHash;
    resourceHash.name = `${name.first} ${name.last}`;
    return this._super(...arguments);
  }
});
