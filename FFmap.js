var places = [
]

function initMap() {
    // creates the object map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 51.509865,
            lng: -0.118092
        },
        zoom: 12
    });

    var infowindow = new google.maps.InfoWindow();

    for (var i = 0; i < places.length; i++) {
        var newMarker = new google.maps.Marker({
            position: {
                lat: places[i][3],
                lng: places[i][4]
            },
            map: map,
            title: places[i][0]
        });
        google.maps.event.addListener(newMarker, 'click', (function (newMarker, i) {
            return function () {
                infowindow.setContent('<div>'+'<div id="iw-container"><div class="iw-title">' + places[i][0] + '</div>'+
                    '<span class="bold">' + 'Type:' + '</span>' +  '<span class="mapText">' + places[i][2] + '<br>' +
                    places[i][5] + '<br>' +
                    places[i][6] + '</span>'+ '</div>');
                infowindow.open(map, this);
                infowindow.open(map, newMarker);
            }
        })(newMarker, i));
    }
}

//fuck yeaaaaah
