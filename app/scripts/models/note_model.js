/*global Ember*/
TravelyYoeman.Note = DS.Model.extend({
  title: DS.attr( 'string' ),
  description: DS.attr( 'string' ),
  postedAt: DS.attr( 'date' )
});



// delete below here if you do not want fixtures
TravelyYoeman.Note.FIXTURES = [
  
  {
    id: 0,
    title: "title 1",
    description: "description 1",
    postedAt: new Date()
    
  },
  
  {
    id: 1,
    title: "title 2",
    description: "description 2",
    postedAt: new Date()
  }
  
];
