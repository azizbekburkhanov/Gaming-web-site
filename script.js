document.addEventListener('DOMContentLoaded', function() {
    const searchSwitch = document.querySelector('.search-switch');
    searchSwitch.addEventListener('click', function() {
        const searchTerm = prompt('What are you looking for?');
        if (searchTerm) {
            alert('Searching for: ' + searchTerm);
        }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});