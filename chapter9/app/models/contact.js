import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pets: DS.hasMany('pet', { async: true }),
  company: DS.belongsTo('company', { async: true })
});
