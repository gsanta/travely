TravelyYoeman.NotesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('note');
  }
});

