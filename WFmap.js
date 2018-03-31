function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 51.509865,
            lng: -0.118092
        },
        zoom: 12
    });

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    var wfPlaces = [
                [{
            placeId: 'ChIJw7IZm8McdkgRXzx6t5UPbi8'
                }],
                [{
            placeId: 'ChIJzwJpL5IcdkgRkySg-N9nny0'
                }],
                [{
            placeId: 'ChIJBW3yzvscdkgRo7FHtKX5K9Q'
                }],
                [{
            placeId: 'ChIJ9a8NHLAcdkgRtuswsdJU0UI'
                }],
                [{
            placeId: 'ChIJRTcqErocdkgRGNs2C5VLcTc'
                }],
                [{
            placeId: 'ChIJ-_EoA5MddkgR9Ex1TEbJsOw'
                }],
                [{
            placeId: 'ChIJWyH6QQ0ddkgRTMHUhmww7hY'
                }],
                [{
            placeId: 'ChIJ2cS7oRoddkgR0H9ZGggIx2'
                }],
                [{
            placeId: 'ChIJ89C8tbocdkgRTmgJv7FBu0Y'
                }],
                [{
            placeId: 'ChIJz6FOZh0ddkgRbKdi8pza5VM'
                }],
                [{
            placeId: 'ChIJS0zT35kHdkgRd0qPqDU66jM'
                }],
                [{
            placeId: 'ChIJuY8sNoOg2EcRY8lqS8jf40c'
                }],
                [{
            placeId: 'ChIJr34Mk9scdkgR0irkswZPrK8'
                }],
                [{
            placeId: 'ChIJaxWqk7UcdkgRjr3dwrPTj8I'
                }]
            ]; //incomplete

    for (var i = 0; i < wfPlaces.length; i++) {

        service.getDetails(wfPlaces[i][0], function (place, status) {
            if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                console.log(status + [i]);
                setTimeout(function () {
                    displayPlaces(map, service, infowindow, data, i);
                }, 200);
            } else if (status === google.maps.places.PlacesServiceStatus.OK) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });

                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                        'Cuisine:' + place.place_id + '<br>' +
                        place.formatted_address + '</div>');
                    infowindow.open(map, this);
                });
            }
        });
    }
}
