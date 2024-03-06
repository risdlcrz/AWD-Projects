document.querySelector('.navbar-brand').addEventListener('click', function() {
    alert('Welcome to Photography Co.!');
});

document.querySelector('.inquiry-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Display the alert
    alert('Email has been sent!');

    // Clear the form
    this.reset();
});