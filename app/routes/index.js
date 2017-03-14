import Ember from 'ember';

export default Ember.Route.extend({
 model() {
  return Ember.RSVP.hash({
    challenges: this.store.findAll('challenge'),
    videos: this.store.findAll('video')
  });
},
  actions: {

  	saveChallenge3(params) {
      var newChallenge = this.store.createRecord('challenge', params);
      newChallenge.save();
      this.transitionTo('index');
    },

  	 destroyChallenge(challenge) {
      challenge.destroyRecord();
      this.transitionTo('index');
    }
  }

})
