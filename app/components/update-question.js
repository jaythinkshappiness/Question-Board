import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
 actions: {
   updateQuestionForm() {
     this.set('updateQuestionForm', true);
   },
   update(board) {
     var params = {
       author: this.get('author'),
       question: this.get('question'),
     };
     this.set('updateQuestionForm', false);
     this.sendAction('update', board, params);
   }
 }
});
