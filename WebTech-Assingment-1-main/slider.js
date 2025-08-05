//this code creates a basic slideshow functionality where the slides cycle automatically at regular intervals. 
//It's a simple way to implement a slideshow without any external libraries or complex logic.


var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  slides[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  var nextIndex = currentSlide + 1;
  if (nextIndex >= slides.length) {
    nextIndex = 0;
  }
  showSlide(nextIndex);
}

setInterval(nextSlide, 3000);

