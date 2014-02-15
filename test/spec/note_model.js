test('note model properties', function() {

	var store = TravelyYoeman.__container__.lookup('store:main'),
      model;

	Ember.run(function() {
	    model = store.createRecord('note', {
	    	title: "model title",
  			description: "model description",
  			postedAt: new Date("February 15, 2014 22:41:00")
	    });
	});

  equal(model.get('title'), 'model title');
  equal(model.get('description'), 'model description');
  deepEqual(model.get('postedAt'), new Date("February 15, 2014 22:41:00"));
});