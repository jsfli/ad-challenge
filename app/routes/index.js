import Ember from 'ember';

var challenges = [{
  id: 1,
  companyName: "Coca Cola",
  companyDescription: "Softdrink company",
  productName: "Vanilla Coke",
  productDescription: "Beverage",
  requirement: "4 minutes ad",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
  prize: 2000,
  expiryDate: 2
}, {
  id: 2,
  companyName: "Colgate",
  companyDescription: "Dental Hygiene Company",
  productName: "Mint flavored toothpaste",
  productDescription: "toothpaste",
  requirement: "4 minutes ad",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
  prize: 1000,
  expiryDate: 2
}, {
  id: 3,
  companyName: "Nike",
  companyDescription: "Shoe company",
  productName: "Messi boots",
  productDescription: "football boots",
  requirement: "4 minutes ad",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
  prize: 3000,
  expiryDate: 1
}];

export default Ember.Route.extend({
  model() {
    return challenges;
  },
});