

App.NotesController = Ember.ObjectController.extend( {

	content: "adj meg vmi szart",

	actions: {
		save: function() {
			console.log("save: " + this.get('newNote').get('title'))
			var store = this.get('store');
        	var note = store.createRecord('note',{
				title: this.get('newNote').get('title'),
				description: this.get('newNote').get('content'),
				postedAt: new Date()
	        });

	        note.save();
		}
	}
} )