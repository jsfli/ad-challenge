import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('video', params.video_id);
  },

  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review',params);
      var video = params.video;
      video.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return video.save();
      });
    }
  }
});
