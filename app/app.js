
require('templates');
require('dependencies/jquery/jquery-1.9.1');
require('dependencies/jquery/jquery-ui-1.10.3.custom.min');
require('dependencies/handlebars/handlebars-runtime');
require('dependencies/ember/ember');
require('dependencies/ember/ember-data');
require('dependencies/bootstrap/bootstrap.min');
require('dependencies/compiled/templates');

window.App = Ember.Application.create();

require('app/routes/router');