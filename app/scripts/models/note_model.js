/*global Ember*/
Travely.Note = DS.Model.extend({
  title: DS.attr( 'string' ),
  content: DS.attr( 'string' ),
  postedAt: DS.attr( 'date' )
});

// delete below here if you do not want fixtures
Travely.Note.FIXTURES = [
  
  {
    id: 0,
    title: "title 1",
    content: "content 1",
    postedAt: new Date("February 15, 2014 22:41:00")
    
  },
  
  {
    id: 1,
    title: "title 2",
    content: "content 2",
    postedAt: new Date()
  }
  
];
