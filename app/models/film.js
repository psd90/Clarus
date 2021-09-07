import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  review: DS.attr('string'),
  rating: DS.attr('number'),
});
