function initMap(){
var LocationsForMap = [
  ['St. John Lutheran Church',37.22108, -80.01389],
  ['Christ the King Presbyterian Church',37.24932086563623, -79.94480564493806]
];

var map = new google.maps.Map(document.getElementById('map'), {
zoom: 12,
center: new google.maps.LatLng(37.22108, -80.01389),
mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < LocationsForMap.length; i++) {  
marker = new google.maps.Marker({
  position: new google.maps.LatLng(LocationsForMap[i][1], LocationsForMap[i][2]),
  map: map
});

google.maps.event.addListener(marker, 'click', (function(marker, i) {
  return function() {
    infowindow.setContent(LocationsForMap[i][0]);
    infowindow.open(map, marker);
  }
})(marker, i));
}}