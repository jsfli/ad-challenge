import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('challenge', params.challenge_id);
  },
<<<<<<< HEAD
  
=======
});
  // var a = Ember.$('#output').value;
>>>>>>> c2b1182e7eee00cb59fc44ff02b6f064a9299c94
  actions: {

  		

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

