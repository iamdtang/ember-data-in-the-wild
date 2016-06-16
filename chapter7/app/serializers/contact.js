import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType)  {
    this.createLinks(payload.contact);
    return this._super(...arguments);
  },
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType)  {
    payload.contacts.forEach(this.createLinks);
    return this._super(...arguments);
  },
  createLinks(contact) {
    contact.links = {
      pets: `/api/contacts/${contact.id}/pets`,
      company: `/api/contacts/${contact.id}/company`
    };
  }
});
