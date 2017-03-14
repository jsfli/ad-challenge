import Ember from 'ember';

export default Ember.Component.extend({
  addNewVideo: false,
  actions: {
    videoFormShow() {
      this.set('addNewVideo', true);
    },
    saveVideo() {
     var params = {
       username: this.get('username'),
       videodescription: this.get('videodescription'),
       videourl: this.get('videourl'),
       rating: this.get('rating'),
       comment: this.get('comment')
     };
     this.set('addNewVideo', false);
     this.sendAction('saveVideo', params);
   }
  }
});