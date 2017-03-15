import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  comment: DS.attr(),
  video: DS.belongsTo('video',{async: true}),
});
