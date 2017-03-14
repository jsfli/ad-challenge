import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('challenge', params.challenge_id);
  },
  actions: {
	  saveVideo(params) {
	  		
	      var newVideo = this.store.createRecord('video', params);
	      var challenge = params.challenge;
	      challenge.get('videos').addObject(newVideo);
	      newVideo.save().then(function() {
	        return challenge.save();
	      });
	      this.transitionTo('challenge', challenge);
	    }
	}
});