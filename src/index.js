import './sass/styles.scss';
import 'bootstrap';
import $ from 'jquery';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

// Carousel init
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instance = M.Carousel.init(elems, {
    fullWidth: true,
    numVisible: 1,
    duration: 300,
    indicators: true
  });
  var instance = M.Carousel.getInstance(elems[0]);
  setTimeout(autoplay, 4500);
  function autoplay() {
    instance.next();
    setTimeout(autoplay, 4500);
  }
});

// Google map init
// function initMap() {
//   var nickysLoc = {
//     lat: 40.762221,
//     lng: -73.980320
//   }
//
//   var map = new google.maps.Map(
//     document.getElementById('map'),
//     {
//       zoom: 4,
//       center: nickysLoc
//     }
//   );
//
//   var marker = new google.maps.Marker({
//     position: nickysLoc,
//     map: map
//   });
//
// }
