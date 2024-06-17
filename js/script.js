// script.js

document.addEventListener('DOMContentLoaded', () => {
    loadFooter();
    handleFormSubmission();
});

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

function handleFormSubmission() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Display a confirmation message
            alert('Your message has been sent successfully!');

            // Optionally, reset the form
            form.reset();

            // Continue with the form submission to FormSubmit
            this.submit();
        });
    }
}
