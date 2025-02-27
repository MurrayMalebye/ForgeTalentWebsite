document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    // Show the first testimonial initially
    showTestimonial(currentIndex);

    // Automatically move to the next testimonial every 3 seconds
    setInterval(nextTestimonial, 3000);
});



let currentSlide = 0;
const slides = document.querySelectorAll(".slideshow-slide");

function showSlide(index) {
    // Set the current slide to full opacity
    slides[index].style.opacity = 1;
}

function fadeOut(slide) {
    slide.style.opacity = 0;
}

function nextSlide() {
    // Fade out the current slide
    fadeOut(slides[currentSlide]);

    // Update currentSlide index
    currentSlide = (currentSlide + 1) % slides.length;

    // Fade in the new slide
    showSlide(currentSlide);
}

// Start with the first slide visible
showSlide(currentSlide);

// Automatically change the slide every 5 seconds
let slideshowInterval = setInterval(nextSlide, 6000);

// Pause the slideshow when hovering over the slideshow container
document.querySelector('.slideshow-container').addEventListener('mouseover', () => {
    clearInterval(slideshowInterval);
});

// Resume the slideshow when not hovering
document.querySelector('.slideshow-container').addEventListener('mouseout', () => {
    slideshowInterval = setInterval(nextSlide, 5000);
});

// Start the slideshow with fade effect
setTimeout(() => {
    slides.forEach((slide, index) => {
        if (index !== currentSlide) {
            fadeOut(slide);
        }
    });
}, 100); // Initial fade out of other slides
