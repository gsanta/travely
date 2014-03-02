
Travely.NotesCreateRoute = Ember.Route.extend( {
	model: function() {
		return Ember.Object.create({});
	},

	renderTemplate: function() {
		this.render( 'note.edit', {
			controller: 'notesCreate'
		} );
	}
} )