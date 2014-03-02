Travely.NoteEditController = Ember.ObjectController.extend({
  //needs: 'note',
  actions: {
    save: function(){
      var note = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      note.save();
      // then transition to the current user
      this.transitionToRoute('note', note);
    }
  }
});

