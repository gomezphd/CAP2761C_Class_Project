
// Function to load header and footer
function loadComponent(component, target) {
    fetch(component)
        .then(response => response.text())
        .then(data => {
            document.querySelector(target).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${component}:`, error));
}

// Load header and footer
document.addEventListener("DOMContentLoaded", function() {
    loadComponent('components/header.html', '#header-placeholder');
    loadComponent('components/footer.html', '#footer-placeholder');
});
