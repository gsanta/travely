App.NotesRoute = Ember.Route.extend( {
	model: function() {
		return this.store.find('note');
	}
} );

App.NotesCreateRoute = Ember.Route.extend( {
	model: function() {
		return 	this.store.createRecord('note');
	}
} )