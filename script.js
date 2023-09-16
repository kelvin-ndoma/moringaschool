// Select the form element and add an event listener for form submission
const form = document.getElementById('newsletterForm');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the user input from the form fields
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const userData = {
    name: nameInput.value,
    email: emailInput.value,
    id: generateUserId(), // You can generate a unique ID here
  };

  // Make a POST request to the server
  fetch('https://digitalmarketing-d5jppwmih-kelvin-ndoma.vercel.app/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        // Handle the error response from the server
        return response.json().then((errorData) => {
          throw new Error(errorData.error);
        });
      }
      return response.json();
    })
    .then((data) => {
      // Handle the success response here
      console.log(data);
      // You can also update your UI to indicate success to the user
    })
    .catch((error) => {
      // Handle the error and display it to the user
      console.error(error.message);
      // You can update your UI to display the error message to the user
    });
});

// Function to generate a unique user ID (you can replace this with your logic)
function generateUserId() {
  // Generate a unique ID here and return it
  return 'uniqueId123';
}
