import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,

  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },

    saveReview(){
      var params = {
        rating: parseInt(this.get('rating')),
        comment: this.get('comment'),
        video: this.get('video')
      };
      this.set('addNewReview',false);
      this.sendAction('saveReview',params);
    },

    cancelReview() {
      this.set('addNewReview',false);
    }
  }
});
