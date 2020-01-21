function initMap() {  
  var myLatLng = {lat: 40.8054491, lng: -73.9654415};
  var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 10
    });

  var marker = new google.maps.marker({
    position: myLatLng,
    map: map,
    title: 'Hello World'
  });
  }