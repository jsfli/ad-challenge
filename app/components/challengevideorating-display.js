import Ember from 'ember';

export default Ember.Component.extend({
  scores: Ember.computed.mapBy('video.reviews','rating'),

  sumOfScores: Ember.computed.sum('scores'),

  averageScore: Ember.computed('sumOfScores','scores.length',function(){
    var average = this.get('sumOfScores')/this.get('scores.length');
    return average.toFixed(1);
  }),
});
