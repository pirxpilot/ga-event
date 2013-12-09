var ga = require('ga');
var events = require('event');
var dataset = require('dataset');

module.exports = analytics;

function analytics(propertyId) {
  if (!ga(propertyId)) {
    // nothing to do
    return;
  }

  function trackEvent(ds) {
    var gaq = window._gaq = window._gaq || [];
    var args = ['_trackEvent'];

    ['Category', 'Action', 'Label', 'Value', 'Noninteraction'].forEach(function(prop) {
      args.push(ds.get('ga' + prop));
    });
    // only Category and Action are not optional in GA
    if (!args[2]) {
      args[2] = 'click'; // set action to click by default
    }
    gaq.push(args);
  }

  events.bind(document.body, 'click', function(e) {
    var ds = dataset(e.target || e.srcElement);
    if (ds.get('gaCategory')) {
      trackEvent(ds);
    }
  }, true);
}
