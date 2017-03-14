import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('challenge', params.challenge_id);
  },
<<<<<<< HEAD
  
=======
});
<<<<<<< HEAD
  
  actions: {
=======
  // var a = Ember.$('#output').value;
>>>>>>> c2b1182e7eee00cb59fc44ff02b6f064a9299c94
  actions: {

  		

>>>>>>> 937deecc498ca5c471c07e9b3cd3e59f1f773f11
	  saveVideo(params) {
	      var newVideo = this.store.createRecord('video', params);
	      var challenge = params.challenge;
	      challenge.get('videos').addObject(newVideo);
	      newVideo.save().then(function() {
	        return challenge.save();
	      });
	      this.transitionTo('challenge', challenge);
	    },

	    delete(video) {
	    	if (confirm('Are you sure you want to delete this challenge?')){
	    		video.destroyRecord();
      			this.transitionTo('/challenge/:challenge_id');
	    	}
    	}
	}
});
