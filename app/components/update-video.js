import Ember from 'ember';

export default Ember.Component.extend({
  updateVideoForm: false,
  actions: {
    updateVideoForm() {
      this.set('updateVideoForm', true);
    },
    update(video) {
      var params = {
        username: this.get('username'),
        videodescription: this.get('videodescription'),
        videourl: this.get('videourl'),
        rating: this.get('rating'),
        comment: this.get('comment'),
      };
      this.set('updateVideoForm', false);
      this.sendAction('update', video, params);
    }
  }
});