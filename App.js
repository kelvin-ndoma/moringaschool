// JavaScript for handling the newsletter subscription form

// Function to handle form submission
function subscribe(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the user's name and email from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // You can send the name and email to your server for processing here
    // For this example, let's just display a confirmation message
    const confirmationMessage = `Thank you, ${name}! You've successfully subscribed with email: ${email}.`;

    // Display the confirmation message
    alert(confirmationMessage);

    // Optionally, you can reset the form after submission
    document.getElementById('newsletterForm').reset();
}

// Add an event listener to the form for submission
const form = document.getElementById('newsletterForm');
form.addEventListener('submit', subscribe);
