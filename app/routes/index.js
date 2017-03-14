import Ember from 'ember';

export default Ember.Route.extend({
 model() {
  return Ember.RSVP.hash({
    challenges: this.store.findAll('challenge'),
    videos: this.store.findAll('video')
  });
},
  actions: {
  	 destroyChallenge(challenge) {
      challenge.destroyRecord();
      this.transitionTo('index');
    }
  }

})
