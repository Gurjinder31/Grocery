(function ($) {
    // USE STRICT
    "use strict";

        $(document).ready(function () {

            var selector_map = $('#google_map');
            var img_pin = selector_map.attr('data-pin');
            var data_map_x = selector_map.attr('data-map-x');
            var data_map_y = selector_map.attr('data-map-y');
            var scrollwhell = selector_map.attr('data-scrollwhell');
            var draggable = selector_map.attr('data-draggable');

            if (img_pin == null) {
                img_pin = 'images/icons/brampton_towers.png';
            }
            if (data_map_x == null || data_map_y == null) {
                data_map_x = 43.6660064;
                data_map_y = -79.7418745;
            }
            if (scrollwhell == null) {
                scrollwhell = 0;
            }

            if (draggable == null) {
                draggable = 0;
            }

            var style = [];

            var latitude = data_map_x,
                longitude = data_map_y,
                map_zoom = 14;

            var locations = [
                ['<div class="infobox"><p>1208, 75 Charolais Boulevard.' +
                ' <br>Braompton. ON L6Y2R8</p></div>'
                    , latitude, longitude, 2]
            ];

            if (selector_map !== undefined) {
                var map = new google.maps.Map(document.getElementById('google_map'), {
                    zoom: 17,
                    scrollwheel: scrollwhell,
                    navigationControl: true,
                    mapTypeControl: false,
                    scaleControl: false,
                    draggable: draggable,
                    styles: style,
                    center: new google.maps.LatLng(latitude, longitude),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
            }

            var infowindow = new google.maps.InfoWindow();

            var marker, i;

            for (i = 0; i < locations.length; i++) {

                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
					
					animation: google.maps.Animation.BOUNCE,
                    icon: marker
                });

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }

        });

})(jQuery);