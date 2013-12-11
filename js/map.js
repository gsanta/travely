if( navigator.geolocation ) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
    console.log( 'Geolocation is not supported in your browser' );
}

function initialize()
{

var mapProp = {
  center:new google.maps.LatLng(latitude,longitude),
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
var map=new google.maps.Map(document.getElementById("googleMap")
  ,mapProp);
}

function showPosition(position) {
    //document.write('Latitude: '+position.coords.latitude+'Longitude: '+position.coords.longitude);
    //initialize({ latitude: position.coords.latitude, longitude: position.coords.longitude })
    
    longitude = position.coords.longitude
    latitude = position.coords.latitude
    
    console.log(position.coords.latitude)
    var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
    var options = {
      zoom: 15,
      center: coords,
      mapTypeControl: false,
      navigationControlOptions: {
          style: google.maps.NavigationControlStyle.SMALL
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), options);
  }

var longitude = undefined;
var latitude = undefined;

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}



