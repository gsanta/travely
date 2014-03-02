test('Note listing', function() {
  Travely.reset();
  visit("/notes").then(function() {
    var title = find('div:eq(0) .title','.listing-notes').text();
    var content = find('div:eq(0) .content','.listing-notes').text();
    var postedAt = find('div:eq(0) .posted-at','.listing-notes').text();

    equal(title, 'title 1', 'the first note\'s title is: ' + title);
    equal(content, 'content 1', 'the first note\'s content is: ' + content);
    equal(postedAt, new Date( "February 15, 2014 22:41:00" ), 'the first note\'s date is: ' + postedAt);
  });
});