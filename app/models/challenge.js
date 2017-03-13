import DS from 'ember-data';

export default DS.Model.extend({
	companyName: DS.attr(),
	companyDescription: DS.attr(),
  productName: DS.attr(),
  productDescription: DS.attr(),
  requirement: DS.attr(),
  image: DS.attr(),
  prize: DS.attr(),
  expiryDate: DS.attr(),
  videos: DS.hasMany('video', { async: true })

});
