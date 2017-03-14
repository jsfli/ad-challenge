import Ember from 'ember';

export default Ember.Component.extend({
  addNewChallenge: false,
  actions: {
    challengeFormShow() {
      this.set('addNewChallenge', true);
    },

    saveChallenge1() {
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
      this.set('addNewChallenge', false);
      this.sendAction('saveChallenge2', params);
    }
  }
});