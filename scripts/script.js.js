document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display a confirmation message
    alert('Your message has been sent successfully!');

    // Optionally, reset the form
    document.getElementById('contactForm').reset();

    // Continue with the form submission to FormSubmit
    this.submit();
});
