import Ember from 'ember';

export default Ember.Component.extend({
  updateChallengeForm: false,
  actions: {
    updateChallengeForm() {
      this.set('updateChallengeForm', true);
    },
    update(challenge) {
      
        var params = {
        companyName: this.get('companyName'),
        companyDescription: this.get('companyDescription'),
        productName: this.get('productName'),
        productDescription: this.get('productDescription'),
        requirement: this.get('requirement'),
        image: this.get('image'),
        prize: this.get('prize'),
        expiryDate: this.get('expiryDate')
      };
      this.set('updateChallengeForm', false);
      this.sendAction('update', challenge, params);
    }
  }
});