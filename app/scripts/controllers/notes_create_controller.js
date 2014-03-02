Travely.NotesCreateController = Ember.ObjectController.extend( { 
	actions: {
		save: function() {
			console.log( this.get( 'model' ).get( 'title' ) + " " + this.get( 'model' ).get( 'body' ) )
			this.get('model').set('postedAt', new Date());

			var newNote = this.store.createRecord('note', this.get('model'));
		    newNote.save();

		    this.transitionToRoute('notes');
		}
	}
} )