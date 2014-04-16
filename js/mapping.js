var map;

function getMyLocation() {
    //lat = -99999;
    //lng = -99999;
    //elem = document.getElementById("loc");
    if (navigator.geolocation) {
        // the navigator.geolocation object is supported on your browser
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
          //  elem.innerHTML = "<h1>You are in " + lat + ", " + lng + "</h1>";
        });
        // elem.innerHTML = "Getting your location...";
    }
    else {
        alert("Geolocation is not supported by your web browser =/");
    }
}

function initialize() {
    lat = 42.360024;
    lng = -71.060168;
   // getMyLocation();

    var mapOptions = {
          center: new google.maps.LatLng(lat, lng),
          zoom: 15
        };
           map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
}
    google.maps.event.addDomListener(window, "load", initialize);

    google.maps.event.addDomListener(window, "resize", function() {
     var center = map.getCenter();
     google.maps.event.trigger(map, "resize");
     map.setCenter(center); 
    });
