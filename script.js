document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Document is ready');

    // Slideshow functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slideshow img');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert('Pesan Anda telah dikirim!');
        form.reset();
    });
});
