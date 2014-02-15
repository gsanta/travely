TravelyYoeman.Router.map(function () {
  
  this.resource('notes', function(){
    this.resource('note', { path: '/:note_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
