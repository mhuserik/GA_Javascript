//Initialize Maps Api
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 10,
    scrollwheel: false,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  });

  var marker = new google.maps.Marker({
    position: {lat: 40.8054491, lng: -73.9654415},
    map: map,
    title: 'Monks Café'
  });
  }

  // 1. Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyBbp4Ta4yn3nMBV3_WpFKNCGjibzwBBHfk",
    authDomain: "ga-js-e58d0.firebaseapp.com",
    databaseURL: "https://ga-js-e58d0.firebaseio.com",
    projectId: "ga-js-e58d0",
    storageBucket: "ga-js-e58d0.appspot.com",
    messagingSenderId: "178164609235",
    appId: "1:178164609235:web:7cd597c8edf96823262426",
    measurementId: "G-8QY4V8MLY2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 2. Connect to your Firebase application using your reference URL
var database = firebase.database();

 //3. Creating ObjectLiteral to be populated with user input. 
//Need to focus on this aspect 
  $('#inputform').submit(function(e) {
      // prevent the page from reloading.
        e.preventDefault();
      // grab user's unput from input field.
        var userInput1 = $('#userInputName').val();
        var userInput2 = $('#userInputDay').val();
      // clear the inupt values on submit.
        $('#uerInputName').val('');
        $('#userInputDay').val('');
      // create section in database for input.
        var reservationReference = database.ref('reservations');
      // use the set method to save data to the comments.
        reservationReference.push({
          name: userInput1,
          date: userInput2
        });
  });
// 3. Retrieve reservations data when page loads and when reservations are added/updated.
/* function getReservations() {
  database.ref('reservations').on('value', function (results) {
    var allReservations = results.val();
    var reservations = [];
     for (var item in allReservations) {
       var context = {
         userInputDay: allReservations[item].userInputDay,
         userInputName: allReservations[item].userInputName
       }
     }
  } 
} */



 