import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
	videodescription: DS.attr(),
  videourl: DS.attr(),
  rating: DS.attr(),
  comment: DS.attr(),
  challenge: DS.belongsTo('challenge', { async: true }),
});
