import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createFilm: function () {
      var newFilm = this.store.createRecord('film', {
        title: this.name,
        body: this.body,
        review: this.review,
        rating: this.rating,
      });
      newFilm.save();
      this.set('name', 'body', 'review', 'rating').then(
        setTimeout(() => window.location.reload(), 3000)
      );
    },
  },
});
