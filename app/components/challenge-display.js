import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		delete(challenge) {
      		if (confirm('Are you sure you want to delete this challenge?')) {
        	this.sendAction('destroyChallenge', challenge);
     	 	}
    	}
	}
});
