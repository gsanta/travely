require('dependencies/js/jquery/jquery-1.9.1');
require('dependencies/js/jquery/jquery-ui-1.10.3.custom.min');
require('dependencies/js/ember/ember');
require('dependencies/js/ember/ember-data');
require('dependencies/js/bootstrap/bootstrap.min');
require('build/js/templates');

window.App = Ember.Application.create();

App.Router.map(function () {
    this.route("map", { path: "/" });
    this.route("photos");
    this.route("setup");
    this.resource("notes");
} );

App.Store = DS.Store.extend( {
    revision: 12,
    adapter: DS.FixtureAdapter
} );

require( 'app/js/routes/router' );
require( 'app/js/models/note' );
require( 'app/js/routes/notes' );


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