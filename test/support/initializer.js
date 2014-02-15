/*jshint undef:false */

document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');
  
TravelyYoeman.rootElement = '#ember-testing';
TravelyYoeman.setupForTesting();
TravelyYoeman.injectTestHelpers();
window.stop = function () {};

