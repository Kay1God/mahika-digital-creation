document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for contacting Mahika Digital Creations! We will respond shortly.');
        form.reset();
    });
});
