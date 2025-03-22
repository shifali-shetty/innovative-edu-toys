function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
}
// Contact Form Submission Handling
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert(`Thank you, ${name}! We’ve received your message.`);
    document.getElementById("contactForm").reset();
});
// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80; // Adjust this based on your header height
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    });
});
