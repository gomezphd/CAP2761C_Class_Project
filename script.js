document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    const form = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        fetch('https://formsubmit.co/ajax/cgomez@gomezphd.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            })
        }).then(response => response.json())
        .then(data => {
            formSuccess.style.display = 'block';
            form.reset();
        }).catch(error => {
            console.error('Error:', error);
        });
    });
});
