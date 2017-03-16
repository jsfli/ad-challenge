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
    update(challenge, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
        challenge.set(key,params[key]);
        }
    });
      challenge.save();
      this.transitionTo('index');
    },

    // saveVideo(params) {
    //   var newVideo = this.store.createRecord('video', params);
    //   newVideo.save();
    //   this.transitionTo('index');
    // },

  	 destroyChallenge(challenge) {
      challenge.destroyRecord();
      this.transitionTo('index');
    }
  }

})
