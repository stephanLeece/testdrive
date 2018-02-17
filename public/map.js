// a whole buncha googly map code gonna go here
$(window).on('load', () => {

  function initMap() {
        var drivedrive = {lat: 35.1718136, lng: 33.36292};
        var map = new google.maps.Map(document.getElementById('gMap'), {
          zoom: 17,
          center: drivedrive
        });
        var marker = new google.maps.Marker({
          position: drivedrive,
          map: map
        });
      };
if (window.location.pathname == '/info') {
    initMap();
    console.log('loading map');
}



});
