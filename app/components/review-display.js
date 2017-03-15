import Ember from 'ember';

export default Ember.Component.extend({
  scores: Ember.computed.mapBy('model.reviews','rating'),

  sumOfScores: Ember.computed.sum('scores'),

  averageScore: Ember.computed('sumOfScores','scores.length',function(){
    var average = this.get('sumOfScores')/this.get('scores.length');
    return average.toFixed(1);
  }),

  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('model.reviews','sortBy'),
});
