

App.NotesCreateController = Ember.ObjectController.extend( {

	content: "adj meg vmi szart",

	actions: {
		save: function() {
			
			var store = this.get('store');
        	var note = store.createRecord('note',{
				title: this.get("title"),
				description: this.get("content"),
				postedAt: new Date()
	        });

	        note.save();
		}
	}
} )