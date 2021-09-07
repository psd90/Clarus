import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      return this.store.findAll('film');
    },
    actions: {
        error: function(error, transition) {
            // Display some sort of message
            console.log(error)
            alert("Something is wrong");
            // Redirect to a different part of the application
            this.transitionTo('index');
        }
    }
  });