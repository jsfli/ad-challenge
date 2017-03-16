import Ember from 'ember';

export default Ember.Component.extend({

  model(params) {
    return this.store.findRecord('video', params.video_id);
  },
  actions: {
    thumbupClicked(video){
      var n = parseInt(video.get('rating'));
      n = n + 1;
      video.set('rating', n.toString());
      video.save();

    },
    delete(video) {
        if (confirm('Are you sure you want to delete this challenge?')){
          video.destroyRecord();
            this.transitionTo('/challenge/:challenge_id');
        }
      }

  }
});
