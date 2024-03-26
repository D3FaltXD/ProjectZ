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



//Parallax starts here

window.addEventListener('scroll', function() {
 const parallaxLayers = document.querySelectorAll('.layer');
const scrollTop = window.scrollY;

parallaxLayers.forEach((layer, index) => {
  const speed = index === 0 ? -0.1 : index === 0 ? 0.01 : 0.1; // Adjust speed as needed
  const transformY = scrollTop * speed;
  layer.style.transform = `translateY(${transformY}px)`;
});
});


