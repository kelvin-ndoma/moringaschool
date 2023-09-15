document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.getElementById('newsletterForm');

    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get user input
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const name = nameInput.value;
        const email = emailInput.value;

        // Create a new subscriber object
        const subscriber = {
            name: name,
            email: email
        };

        // Send the subscriber data to the server
        fetch('http://localhost:3000/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscriber)
        })
        .then(response => response.json())
        .then(data => {
            // Handle success, e.g., show a success message
            console.log('Subscriber added:', data);
            alert('Thank you for subscribing!');
            nameInput.value = ''; // Clear the input fields
            emailInput.value = '';
        })
        .catch(error => {
            // Handle errors, e.g., show an error message
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
