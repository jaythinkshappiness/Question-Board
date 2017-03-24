import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('board');
  },
  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('board', params);
      newBoard.save();
      this.transitionTo('index');
    }
  }
});
