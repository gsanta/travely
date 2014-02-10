App.NotesRoute = Ember.Route.extend( {
	model: function() {
		return {
			notes: this.store.find('note'),
			newNote: new App.NoteTemp
		}
	}
} );

App.NotesCreateRoute = Ember.Route.extend( {
	model: function() {
		return 	this.store.createRecord('note');
	}
} )