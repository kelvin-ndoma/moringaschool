document.addEventListener('DOMContentLoaded', function () {
    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();

        // Get user input
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Validate user input
        if (!name || !email) {
            alert('Please provide both your name and email.');
            return;
        }

        // Create a user object
        const user = {
            name,
            email
        };

        // Send a POST request to the API to add the user
        fetch('https://digitalmarketing-pi.vercel.app/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            if (response.status === 201) {
                return response.json();
            } else {
                throw new Error('Failed to add user');
            }
        })
        .then(data => {
            // Clear the form
            nameInput.value = '';
            emailInput.value = '';

            // Display a success message
            alert(`Thank you, ${name}! You've successfully subscribed.`);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Oops! Something went wrong. Please try again later.');
        });
    }

    // Get the form element and add a submit event listener
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', handleFormSubmit);
});
