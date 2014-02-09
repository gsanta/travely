App.Note = DS.Model.extend( {
	title: DS.attr( 'string' ),
	description: DS.attr( 'string' ),
	postedAt: DS.attr( 'date' )
} );

App.Note.FIXTURES = [ {
		id: 1,
		title: "First note",
		description: "First note description",
		postedAt: new Date( '12-23-2013' )
	}, {
		id: 2,
		title: "Second note",
		description: "Second note description",
		postedAt: new Date( '2-5-2014' )
	}
];