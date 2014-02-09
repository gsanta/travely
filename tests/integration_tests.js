module("Integration Tests", {
    setup: function() {
        App.reset();
    }
});

test("number of nav elements on root", function(){
    visit("/");
    andThen(function() {
        equal(find("nav").length, 1, "The first page should have 1 nav");
    });
});