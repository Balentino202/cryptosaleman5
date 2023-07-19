 // JavaScript code for PERSONAL ABILITY
window.addEventListener("DOMContentLoaded", function() {
    // Set the initial values
    let workDone = 0;
    let yearsOfExperience = 0;
    let totalClient = 0;
    let awardWon = 0;
  
    // Function to count the numbers
    function countNumbers() {
      if (workDone < 62) {
        workDone += 2;
        document.getElementById("work-done").textContent = workDone;
      }
      if (yearsOfExperience < 7) {
        yearsOfExperience += 1;
        document.getElementById("year").textContent = yearsOfExperience;
      }
      if (totalClient < 62) {
        totalClient += 2;
        document.getElementById("total-client").textContent = totalClient;
      }
      if (awardWon < 3) {
        awardWon += 1;
        document.getElementById("award-won").textContent = awardWon;
      }
  
      if (workDone < 62 || yearsOfExperience < 7 || totalClient < 62 || awardWon < 3) {
        setTimeout(countNumbers, 60); // Adjust the delay (in milliseconds) for faster counting
      }
    }
  
    // Call the counting function
    countNumbers(); //PERSONAL ABILITY END HERE
  });


     // JavaScript code for client testimonial
     const slider = document.querySelector('.slider');
     const sliderInner = document.querySelector('.slider-inner');
     const testimonialIndicators = document.querySelectorAll('.testimonial-indicator');
     
     let currentSlide = 0;
     const slideCount = sliderInner.children.length;
     
     // Function to move to a specific slide
     function goToSlide(slideIndex) {
       currentSlide = slideIndex;
       updateSlider();
       updateIndicators();
     }
     
     // Function to move to the next slide
     function nextSlide() {
       currentSlide++;
       if (currentSlide >= slideCount) {
         currentSlide = 0;
       }
       updateSlider();
       updateIndicators();
     }
     
     // Function to update the slider position
     function updateSlider() {
       sliderInner.style.transform = `translateX(-${currentSlide * 100}%)`;
     }
     
     // Function to update the active indicator
     function updateIndicators() {
       testimonialIndicators.forEach((indicator, index) => {
         indicator.classList.toggle('active', index === currentSlide);
       });
     }
     
     // Event listeners for the testimonial indicators
     testimonialIndicators.forEach((indicator, index) => {
       indicator.addEventListener('click', () => {
         goToSlide(index);
       });
     });
     
     // Automatic slide transition every 5 seconds
     setInterval(nextSlide, 5000); /* Updated interval time */
  