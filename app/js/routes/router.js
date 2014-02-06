App.Router.map(function () {
    this.route("map", { path: "/" });
    this.route("photos");
    this.route("setup");
    this.resource("notes", function() {
        this.resource("note", { path: "/:note_id" }, function() {
            this.route( "edit" );
        } );
        this.route( "create" );
    } );
});