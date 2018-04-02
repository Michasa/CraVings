var places = [
    ['Dough Society', 'E', 'Donuts and Coffee', 51.548888, -0.054615, 'Dough Society specialises in 100% vegan handmade fried brioche donuts since 2016.', '<a href="https://doughsocietyldn.com/" target="_blank">Vist their Site!</a>'],
    ['Leles', 'E', 'Cafe and Vegan Patisserie', 51.551631, -0.051712, " 'LELES serves breakfast, lunch and weekend brunch in a cosy light-filled space in the heart of Clapton, Hackney'", '<a href="https://www.leleslondon.com/" target="_blank">Vist their Site!</a>'],
    ['The Canvas ', 'E', 'Baked and Homemade Savoury Goods', 51.520222, -0.071524, " 'Homemade meals, gluten free cookies and vegan cakes.'", '<a href="https://www.thecanvascafe.org/" target="_blank">Vist their Site!</a>'],
    ['The V Deli - Vdelicious', 'E', " 'Baked Goods, Deli and Juice Bar'", 51.547252, -0.047656, 'Plant based vegan Deli and Bakery', '<a href="http://www.vdelicious.co.uk/" target="_blank">Vist their Site!</a>'],
    ['Unripe Banana', 'E', 'Café', 51.530978, -0.068863, 'Vegan coffee shop serving coffee and snacks such as toasties', '<a href="https://www.unripebanana.co.uk/" target="_blank">Vist their Site!</a>'],
    ['Paradise Unbakery', 'NW', " 'Café, Breakfast & Brunch, Mains, Raw Vegan Cakes'", 51.533332, -0.218226, " 'Delightful Vegan Breakfasts, Brunches and Raw Vegan Cakes '", '<a href="https://paradiseunbakery.com/" target="_blank">Vist their Site!</a>'],
    ['Ahimsa The Vegan Café', 'NW', 'Café', 51.594566, -0.382668, 'Delicious freshly made vegan food which can be enjoyed in our cafe or ‘on-the-go’.', '<a href="http://www.thevegancafe.com/" target="_blank">Vist their Site!</a>'],
    ['The Fields Beneath', 'NW', 'Café', 51.546486, -0.146753, 'Gourmet coffee, pastries and light bites in a quirky brick and wood cafe beneath the station arches.', '<a href="https://www.thefieldsbeneath.com/" target="_blank">Vist their Site!</a>'],
    ['Alkaline Juice Factory', 'SW', 'Juice Bar', 51.454497, -0.120011, 'Freshly Made Alkaline Juices & Vegan Street Food To Help You Shine. ', '<a href="https://en-gb.facebook.com/alkalinejuicefactory/" target="_blank">Vist their Site!</a>'],
    ['Oracles Organic', 'SW', 'Juice Bar', 51.46262, -0.111807, 'Fresh juices and live raw food lunch boxes', '<a href="http://www.oraclesorganics.co.uk/" target="_blank">Vist their Site!</a>'],
    ['Juicebaby', 'SW', 'Juice Bar', 51.483738, -0.177224, 'Modern cafe for menu of cold pressed juices and smoothies', '<a href="http://www.juicebaby.co.uk/landing/" target="_blank">Vist their Site!</a>'],
    ['Cupcakes and Shhht', 'SE', 'Baked Goods', 51.493226, -0.098378, " 'Vegan Bakery with Cakes, Freakshakes and Savoury Food'", '<a href="https://www.cupcakesandshhht.com/" target="_blank">Vist their Site!</a>'],
    ['MOTHER - Juice Works', 'E', 'Juice Bar', 51.547082, -0.021962, 'Vegan organic cafe serving cold-pressed organic juice and lunch and breakfast', '<a href="http://www.mother.works/" target="_blank">Vist their Site!</a>']
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
        position: {lat: places[i][3], lng: places[i][4]},
        map: map,
        title: places[i][0]
                });
    }
}

//    //for (var i = 0; i < places.length; i++) {
//    service.getDetails(places[i][0], function (place, status) {
//            if (status === google.maps.places.PlacesServiceStatus.OK) {
//                var marker = new google.maps.Marker({
//                    map: map,
//                    position: place.geometry.location
//                });
//                google.maps.event.addListener(marker, 'click', function () {
//                    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//                        'Place ID: ' + place.place_id + '<br>' +
//                        place.formatted_address + '</div>');
//                    infowindow.open(map, this);
//                });
//            }
//        });
//    }
//}
