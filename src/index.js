import './sass/styles.scss';
import 'bootstrap';
import $ from 'jquery';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';


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
