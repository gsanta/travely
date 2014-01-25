
require('templates');
require('dependencies/js/jquery/jquery-1.9.1');
require('dependencies/js/jquery/jquery-ui-1.10.3.custom.min');
require('dependencies/js/handlebars/handlebars-runtime');
require('dependencies/js/ember/ember');
require('dependencies/js/ember/ember-data');
require('dependencies/js/bootstrap/bootstrap.min');
require('dependencies/js/compiled/templates');

window.App = Ember.Application.create();

require('app/js/routes/router');