require('dependencies/js/jquery/jquery-1.9.1');
require('dependencies/js/jquery/jquery-ui-1.10.3.custom.min');
require('dependencies/js/ember/ember');
require('dependencies/js/ember/ember-data');
require('dependencies/js/bootstrap/bootstrap.min');
require('dependencies/js/compiled/templates');

window.App = Ember.Application.create();

require('app/js/routes/router');

$(function() {
	var client = new Dropbox.Client( { key: '8z2mismtbwrgoep' } );

	// Try to finish OAuth authorization.
	client.authenticate({interactive: false}, function (error) {
		console.log("authentication")
	    if (error) {
	        alert('Authentication error: ' + error);
	    }
	});

	if (client.isAuthenticated()) {
		console.log("autentikalva vagyok");
	    // Client is authenticated. Display UI.
	}

	$("#testButton").click(function() {
		client.authenticate();
	});
});