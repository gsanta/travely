require('dependencies/js/jquery/jquery-1.9.1');
require('dependencies/js/jquery/jquery-ui-1.10.3.custom.min');
require('dependencies/js/ember/ember');
require('dependencies/js/ember/ember-data');
require('dependencies/js/ember/localstorage_adapter');
require('dependencies/js/bootstrap/bootstrap.min');
require('dependencies/js/moment/moment');
require('build/js/templates');

window.App = Ember.Application.create();


App.Store = DS.Store.extend( {
    revision: 12,
    adapter: DS.LSAdapter.extend({
		namespace: 'travely'
	})
    // adapter: DS.RESTAdapter.extend({
    // 	url: 'http://localhost/travely_server/data.json'
    // })
} );

require( 'app/js/routes/router' );
require( 'app/js/models/note' );
require( 'app/js/routes/notes' );
require( 'app/js/controllers/notes' );

Ember.Handlebars.helper('format-date', function( date ) {
	return moment(date).fromNow();
} );


// $(function() {
// 	var client = new Dropbox.Client( { key: '8z2mismtbwrgoep' } );

// 	// Try to finish OAuth authorization.
// 	client.authenticate({interactive: false}, function (error) {
// 		console.log("authentication")
// 	    if (error) {
// 	        alert('Authentication error: ' + error);
// 	    }
// 	});

// 	if (client.isAuthenticated()) {
// 		console.log("autentikalva vagyok");
// 	    // Client is authenticated. Display UI.
// 	}

// 	$("#testButton").click(function() {
// 		client.authenticate();
// 	});
// });