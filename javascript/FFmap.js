var places = [['CookDaily', 'E', 'Fusion',51.523517,-0.076453, 'Vegan Restaurant by King Cook Daily at Boxpark in Shoreditch', '<a href="https://www.cookdaily.co.uk/" target="_blank">Vist their Site!</a>'],
['Mooshies', 'E', 'Burgers',51.519736,-0.071739, 'Plant-based burger and fries restaurant opened Oct 2016', '<a href="https://veganburger.org/" target="_blank">Vist their Site!</a>'],
['Temple of Hackney', 'E', 'Fried Chicken',51.545889,-0.054081, 'London Vegan Fast Food.', '<a href="http://templeofseitan.co.uk/" target="_blank">Vist their Site!</a>'],
['The Spread Eagle', 'E', 'Pub Grub',51.548675,-0.040762, 'Londons first 100% vegan pub', '<a href="https://www.thespreadeaglelondon.co.uk/" target="_blank">Vist their Site!</a>'],
['The Vurger Co.', 'E', 'Burgers',51.524038,-0.072782, 'Delicious artisan veggie burgers made entirely from plant based ingredients.', '<a href="http://www.thevurgerco.com/" target="_blank">Vist their Site!</a>'],
['Waffled', 'E', 'Waffles',51.520227,-0.073101,"Makes gluten-free vegan savory waffles out of either buckwheat or falafel, with a choice of dips including beetroot, guacamole, hummus or spicy tomato", '<a href="https://www.facebook.com/waffl3d'],
['What The Pitta', 'E', 'Doner Kebabs',51.523467,-0.076071, 'Vegan Döner and other Turkish inspired vegan treats', '<a href="http://whatthepitta.com/" target="_blank">Vist their Site!</a>'],
['Temple of Camden', 'N', 'Fried Chicken ',51.538528,-0.130427, 'London Vegan Fast Food.', '<a href="http://templeofseitan.co.uk/" target="_blank">Vist their Site!</a>'],
['What The Pitta - Camden', 'N', 'Doner Kebab',51.538044,-0.140432, 'Vegan Döner and other Turkish inspired vegan treats', '<a href="http://whatthepitta.com/" target="_blank">Vist their Site!</a>'],
['Eat of Eden', 'SW', 'West Indian ',51.462075,-0.111721,"Eat of Eden is an innovative and exciting concept which caters for all who want to eat wholesome, healthy and delicious vegan food.", '<a href="http://eatofeden.co.uk/" target="_blank">Vist their Site!</a>'],
['Liors Kitchen at Tierra Verde', 'SW', 'Healthy ',51.456333,-0.162648, 'Healthy vegan and vegetarian seasonal cooking!', '<a href="https://en-gb.facebook.com/Liors-kitchen-at-Tierra-Verde-1141802105952650/" target="_blank">Vist their Site!</a>'],
['PickyWops - Fulham', 'SW', 'Pizza',51.484678,-0.201782, 'Italian Restaurant in London.', '<a href="https://www.pickywops.com/" target="_blank">Vist their Site!</a>'],
['Plantbase Cafe', 'SW', 'Healthy ',51.463034,-0.170413, 'Healthy plant based food in Tunbridge Wells.', '<a href="https://www.theplantbase.co.uk/" target="_blank">Vist their Site!</a>'],
['Joys Health Sanctuary', 'SE', 'Pies',51.446557,-0.018544,"Specialises in healthy fruit juices, dairy free protein shakes, dairy free, sugar free and gluten free cakes. Delicious hot patties are also on the menu.", '<a href="https://en-gb.facebook.com/joyshealthsanctuary/" target="_blank">Vist their Site!</a>'],
['Made From Plants', 'SE', 'Pies',51.416144,-0.072966,"Plant-based/vegan bakery and shop in Crystal Palace, South East London", '<a href="http://madefromplants.co.uk/" target="_blank">Vist their Site!</a>'],
['PickyWops - Peckham', 'SE', 'Pizza',51.470823,-0.067537, 'Italian Restaurant in London.', '<a href="https://www.pickywops.com/" target="_blank">Vist their Site!</a>'],
['Vantra Eden', 'W', 'Healthy ',51.521036,-0.135406,"A specialist in a range of raw, steamed and fermented vegan food.", '<a href="http://www.vantra.co.uk/" target="_blank">Vist their Site!</a>'],
['Vegan HQ', 'W', 'Burgers',51.505926,-0.305326, 'Vegan coffee shop and mini market serving burgers and hot dogs.', '<a href="http://facebook.com/veganhquk/" target="_blank">Vist their Site!</a>'],
['The Blacksmith & The Toffeemaker', 'C', 'Pub Grub',51.528194,-0.104673, 'Trendy pub with a laid-back vibe and an emphasis on all things gourmet and all things British.', '<a href="https://www.theblacksmithandthetoffeemaker.co.uk/" target="_blank">Vist their Site!</a>'],
['Young Vegans', 'C', 'Pies',51.541006,-0.146592, 'Pie and Mash - Great British vegan food made in London', '<a href="https://www.youngvegans.co.uk/" target="_blank">Vist their Site!</a>'],
['By Chloe - Covent Garden', 'C', 'Burgers',51.513597,-0.120388,"New York's hippest plant-based, fast casual restaurant has arrived in Covent Garden.", '<a href="https://eatbychloe.com/" target="_blank">Vist their Site!</a>']]

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
