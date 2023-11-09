<script language="Javascript" src= "script.js"></script>

document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.carousel-slider');
    let currentSlider = 4;
  
    function showSlide(index) {
      sliders.forEach((slider, i) => {
        sliders.style.display = i === index ? 'block' : 'none';
      });
    }
  
    function nextSlide() {
      currentSlider = (currentSlider + 1) % sliders.length;
      showSlider(currentSlider);
    }
  
    // Appeler la fonction nextSlide toutes les 3000 millisecondes (3 secondes)
    setInterval(nextSlide, 3000);
  
    // Afficher la première diapositive au chargement de la page
    showSlide(currentSlide);
  });