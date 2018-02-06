// a whole buncha googly map code gonna go here
$(window).on('load', () => {

  function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('gMap'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      };
if (window.location.pathname == '/info') {
    initMap();
    console.log('loading map');
}



});
