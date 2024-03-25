const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const deviceSelect = document.getElementById('device');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  if (emailInput.value === '' || deviceSelect.value === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate form submission (replace with actual submission logic)
  console.log('Email:', emailInput.value);
  console.log('Device:', deviceSelect.value);

  successMessage.style.display = 'block';
  form.reset(); // Reset the form after successful submission
});


// Text Carousel
const carousel = document.querySelector('.carousel-slides');
const slides = carousel.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentSlide = 0;

function moveSlide(slideIndex) {
  carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
  currentSlide = slideIndex;
}

nextButton.addEventListener('click', () => {
  const totalSlides = slides.length;
  if (currentSlide === totalSlides - 1) {
    moveSlide(0); // Move to first slide on next click
  } else {
    moveSlide(currentSlide + 1);
  }
});

prevButton.addEventListener('click', () => {
  if (currentSlide === 0) {
    moveSlide(totalSlides - 1); // Move to last slide on prev click
  } else {
    moveSlide(currentSlide - 1);
  }
});


//Parallax starts here

window.addEventListener('scroll', function() {
 const parallaxLayers = document.querySelectorAll('.layer');
const scrollTop = window.scrollY;

parallaxLayers.forEach((layer, index) => {
  const speed = index === 0 ? -0.1 : index === 0 ? 0.1 : 0.; // Adjust speed as needed
  const transformY = scrollTop * speed;
  layer.style.transform = `translateY(${transformY}px)`;
});
});
